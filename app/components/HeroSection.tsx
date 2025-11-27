"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const images = [
    {
      src: "/logo.png",
      alt: "Cremería Los Altos - Productos frescos",
    },
    {
      src: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=800&h=800&fit=crop",
      alt: "Leche fresca y productos lácteos",
    },
    {
      src: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=800&h=800&fit=crop",
      alt: "Quesos y crema frescos",
    },
    {
      src: "https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=800&h=800&fit=crop",
      alt: "Panela y productos lácteos artesanales",
    },
    {
      src: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=800&h=800&fit=crop",
      alt: "Jamón de calidad superior",
    },
    {
      src: "https://images.unsplash.com/photo-1606914509765-069038a10200?w=800&h=800&fit=crop",
      alt: "Salchichas frescas",
    },
    {
      src: "https://images.unsplash.com/photo-1588165276332-0c5ba0e07b5b?w=800&h=800&fit=crop",
      alt: "Mantequilla y productos lácteos",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section id="inicio" className="bg-gradient-to-br from-neutral-lighter to-blue-50/30 py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
                  Cremería los Altos, calidad superior a precios imbatibles
                </h1>
                <div className="hidden md:block w-12 h-1 bg-accent rounded-full mt-2"></div>
              </div>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Abastecemos hogares y negocios en Guadalajara y Zapopan con
                productos frescos, confiables y a precios competitivos.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary-dark text-white text-base px-8 py-6"
              >
                <Link href="#contacto">Contacto para mayoristas</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white text-base px-8 py-6"
              >
                <Link href="#sucursales">Ver sucursales</Link>
              </Button>
            </div>
          </div>

          {/* Right: Image Carousel */}
          <div className="relative">
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                    index === currentIndex ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                </div>
              ))}
            </div>
            {/* Carousel Indicators */}
            <div className="flex justify-center gap-2 mt-4">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "w-8 bg-primary"
                      : "w-2 bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

