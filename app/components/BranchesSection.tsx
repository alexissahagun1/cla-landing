import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Clock, Phone } from "lucide-react";
import BranchesMap from "./BranchesMap";

interface Branch {
  name: string;
  address: string;
  hours: string;
  phone: string;
}

const branches: Branch[] = [
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

export default function BranchesSection() {
  return (
    <section id="sucursales" className="py-16 md:py-24 bg-neutral-lighter">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Nuestras Sucursales
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Encuéntranos en puntos clave de Guadalajara y Zapopan.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {branches.map((branch, index) => (
            <Card key={index} className="border-neutral-200 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-primary text-xl">
                  {branch.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-3">
                  <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">{branch.address}</p>
                </div>
                <div className="flex gap-3">
                  <Clock className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">{branch.hours}</p>
                </div>
                <div className="flex gap-3">
                  <Phone className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <a
                    href={`tel:${branch.phone}`}
                    className="text-primary hover:underline"
                  >
                    {branch.phone}
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Map with all branches */}
        <div className="mt-12">
          <Card className="border-neutral-200 shadow-sm">
            <CardContent className="p-6">
              <BranchesMap />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

