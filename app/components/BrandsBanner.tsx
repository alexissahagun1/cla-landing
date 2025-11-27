"use client";

import { useRef, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import Image from "next/image";

const brands = [
  {
    name: "Corona",
    logo: "embutidos-corona.png",
  },
  {
    name: "Custom Culinary",
    logo: "custom-culinary.webp",
  },
  {
    name: "San Antonio",
    logo: "SanAntonio.png",
  },
  {
    name: "Sigma",
    logo: "Sigma.png",
  },
  {
    name: "Fud",
    logo: "https://logo.clearbit.com/fud.com.mx",
  },
  {
    name: "Eugenia",
    logo: "eugenia.png",
  },
  {
    name: "Mega Alimentos",
    logo: "mega-alimentos.png",
  },
  {
    name: "Chefs Cepacsa",
    logo: "chefs.png",
  },
  {
    name: "La Costeña",
    logo: "costena.svg",
  },
  {
    name: "Alceda",
    logo: "alceda.png",
  },
  {
    name: "Lacteos Mojica",
    logo: "mojica.png",
  },
  {
    name: "Grupo Bafar",
    logo: "bafar.png",
  },
  {
    name: "Tyson",
    logo: "tyson.png",
  },
];

export default function BrandsBanner() {
  const [api, setApi] = useState<CarouselApi>();

  const plugin = useRef(
    Autoplay({
      delay: 2000,
      stopOnInteraction: false,
      stopOnMouseEnter: false,
    })
  );

  return (
    <section className="py-8 md:py-12 bg-neutral-50 border-y border-neutral-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Proveedores que confían en nosotros
          </h2>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[plugin.current]}
          className="w-full"
          setApi={setApi}
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {brands.map((brand, index) => (
              <CarouselItem
                key={index}
                className="pl-2 md:pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/6"
              >
                <div className="relative h-20 md:h-24 w-full flex items-center justify-center p-4 bg-transparent hover:bg-neutral-50 rounded-lg transition-colors">
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    fill
                    className="object-contain p-2 opacity-70 hover:opacity-100 transition-opacity duration-300"
                    unoptimized
                    onError={(e) => {
                      // Fallback: mostrar el nombre de la marca si el logo falla
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent && !parent.querySelector('.brand-fallback')) {
                        const fallback = document.createElement('div');
                        fallback.className = 'brand-fallback text-xs text-gray-500 font-medium text-center px-2';
                        fallback.textContent = brand.name;
                        parent.appendChild(fallback);
                      }
                    }}
                  />
                </div>
              </CarouselItem>
            ))}
            {/* Duplicar las marcas para efecto infinito */}
            {brands.map((brand, index) => (
              <CarouselItem
                key={`duplicate-${index}`}
                className="pl-2 md:pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/6"
              >
                <div className="relative h-20 md:h-24 w-full flex items-center justify-center p-4 bg-transparent hover:bg-neutral-50 rounded-lg transition-colors">
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    fill
                    className="object-contain p-2 opacity-70 hover:opacity-100 transition-opacity duration-300"
                    unoptimized
                    onError={(e) => {
                      // Fallback: mostrar el nombre de la marca si el logo falla
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent && !parent.querySelector('.brand-fallback')) {
                        const fallback = document.createElement('div');
                        fallback.className = 'brand-fallback text-xs text-gray-500 font-medium text-center px-2';
                        fallback.textContent = brand.name;
                        parent.appendChild(fallback);
                      }
                    }}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}

