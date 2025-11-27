"use client";

import { GoogleMap, Marker, InfoWindow, useLoadScript } from "@react-google-maps/api";
import { useMemo, useEffect, useState } from "react";
import { MapPin, Clock, Phone } from "lucide-react";

interface BranchLocation {
  name: string;
  address: string;
  hours: string;
  phone: string;
  lat?: number;
  lng?: number;
}

const branches: BranchLocation[] = [
  {
    name: "Sucursal Valdepeñas",
    address: "Esquina Av. Valdepeñas, Av Torremolinos y, Francisco Villa, 45130 Zapopan, Jal.",
    hours: "Lunes a Sábado: 8:00 AM - 8:00 PM",
    phone: "(33) 1234-5678",
  },
  {
    name: "Sucursal Santa Margarita",
    address: "Av. Sta. Margarita 197, Santa Margarita1a Secc., 45140 Zapopan, Jal.",
    hours: "Lunes a Sábado: 8:00 AM - 8:00 PM",
    phone: "(33) 2345-6789",
  },
  {
    name: "Sucursal Plan de San Luis",
    address: "Av. Plan de San Luis 1636, San Bernardo, 44260 Guadalajara, Jal.",
    hours: "Lunes a Sábado: 8:00 AM - 8:00 PM",
    phone: "(33) 3456-7890",
  },
  {
    name: "Sucursal Centro",
    address: "C. Joaquin Angulo 231, Centro Barranquitas, 44280 Guadalajara, Jal.",
    hours: "Lunes a Sábado: 8:00 AM - 8:00 PM",
    phone: "(33) 4567-8901",
  },
  {
    name: "Sucursal Hacienda Santa Fe",
    address: "Blvd Nuevo Mexico Plaza de las mercedes Local 1 y 2, Hacienda Santa Fe, 45653 Tlajomulco de Zúñiga, Jal.",
    hours: "Lunes a Sábado: 8:00 AM - 8:00 PM",
    phone: "(33) 5678-9012",
  },
  {
    name: "Sucursal Concepción",
    address: "Avenida Concepción N° 4, 45654",
    hours: "Lunes a Sábado: 8:00 AM - 8:00 PM",
    phone: "(33) 6789-0123",
  },
  {
    name: "Sucursal Real del Sol",
    address: "Real del Sol, 45654 Villas de la Hacienda, Jalisco",
    hours: "Lunes a Sábado: 8:00 AM - 8:00 PM",
    phone: "(33) 7890-1234",
  },
  {
    name: "Matriz CEDIS",
    address: "Blvd. de los charros 1870, El Vigía, 45140 Zapopan, Jal.",
    hours: "Lunes a Sábado: 8:00 AM - 8:00 PM",
    phone: "(33) 8901-2345",
  },
];

const mapContainerStyle = {
  width: "100%",
  height: "500px",
};

const center = {
  lat: 20.6597,
  lng: -103.3496,
};

export default function BranchesMap() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
    libraries: ["places"],
  });

  const [geocodedBranches, setGeocodedBranches] = useState<Array<BranchLocation & { lat: number; lng: number }>>([]);
  const [isGeocoding, setIsGeocoding] = useState(true);
  const [selectedBranch, setSelectedBranch] = useState<number | null>(null);

  useEffect(() => {
    if (!isLoaded) return;

    const geocodeAddresses = async () => {
      const geocoder = new window.google.maps.Geocoder();
      const geocoded: Array<BranchLocation & { lat: number; lng: number }> = [];

      for (const branch of branches) {
        try {
          const result = await new Promise<google.maps.GeocoderResult[]>((resolve, reject) => {
            geocoder.geocode({ address: branch.address }, (results, status) => {
              if (status === "OK" && results) {
                resolve(results);
              } else {
                reject(new Error(`Geocoding failed: ${status}`));
              }
            });
          });

          if (result && result[0]) {
            const location = result[0].geometry.location;
            geocoded.push({
              ...branch,
              lat: location.lat(),
              lng: location.lng(),
            });
          }
        } catch (error) {
          console.error(`Error geocoding ${branch.name}:`, error);
        }
      }

      setGeocodedBranches(geocoded);
      setIsGeocoding(false);
    };

    geocodeAddresses();
  }, [isLoaded]);

  const options = useMemo(
    () => ({
      disableDefaultUI: false,
      clickableIcons: true,
      scrollwheel: true,
      zoomControl: true,
      streetViewControl: false,
      mapTypeControl: false,
      fullscreenControl: true,
    }),
    []
  );

  const mapCenter = useMemo(() => {
    if (geocodedBranches.length === 0) return center;
    
    const avgLat = geocodedBranches.reduce((sum, b) => sum + b.lat, 0) / geocodedBranches.length;
    const avgLng = geocodedBranches.reduce((sum, b) => sum + b.lng, 0) / geocodedBranches.length;
    
    return { lat: avgLat, lng: avgLng };
  }, [geocodedBranches]);

  if (loadError) {
    return (
      <div className="aspect-video bg-neutral-200 rounded-lg flex items-center justify-center">
        <p className="text-gray-500 text-center px-4">
          Error al cargar el mapa. Por favor, verifica la configuración de Google Maps API.
        </p>
      </div>
    );
  }

  if (!isLoaded || isGeocoding) {
    return (
      <div className="aspect-video bg-neutral-200 rounded-lg flex items-center justify-center">
        <p className="text-gray-500">
          {isGeocoding ? "Obteniendo ubicaciones..." : "Cargando mapa..."}
        </p>
      </div>
    );
  }

  return (
    <div className="w-full rounded-lg overflow-hidden">
      <GoogleMap
        zoom={11}
        center={mapCenter}
        mapContainerStyle={mapContainerStyle}
        options={options}
      >
        {geocodedBranches.map((branch, index) => (
          <Marker
            key={index}
            position={{ lat: branch.lat, lng: branch.lng }}
            title={branch.name}
            label={{
              text: (index + 1).toString(),
              color: "white",
              fontWeight: "bold",
              fontSize: "14px",
            }}
            onClick={() => setSelectedBranch(index)}
          >
            {selectedBranch === index && (
              <InfoWindow
                onCloseClick={() => setSelectedBranch(null)}
                options={{
                  pixelOffset: new window.google.maps.Size(0, -40),
                }}
              >
                <div className="p-2 min-w-[250px]">
                  <h3 className="font-bold text-primary text-lg mb-3">
                    {branch.name}
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex gap-2 items-start">
                      <MapPin className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <p className="text-gray-700">{branch.address}</p>
                    </div>
                    <div className="flex gap-2 items-start">
                      <Clock className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <p className="text-gray-700">{branch.hours}</p>
                    </div>
                    <div className="flex gap-2 items-start">
                      <Phone className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <a
                        href={`tel:${branch.phone}`}
                        className="text-primary hover:underline"
                      >
                        {branch.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </InfoWindow>
            )}
          </Marker>
        ))}
      </GoogleMap>
    </div>
  );
}

