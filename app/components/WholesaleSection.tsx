import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Package, Truck, HeadphonesIcon } from "lucide-react";

const benefits = [
  "Precios especiales por volumen",
  "Surtido constante y confiable",
  "Atención directa para tu negocio",
  "Opciones de entregas programadas",
];

const steps = [
  {
    number: "1",
    title: "Nos contactas",
    description: "Llena el formulario o llámanos directamente",
  },
  {
    number: "2",
    title: "Platicamos sobre lo que necesitas",
    description: "Revisamos tus requerimientos y volúmenes",
  },
  {
    number: "3",
    title: "Te damos una cotización clara",
    description: "Precios transparentes sin sorpresas",
  },
  {
    number: "4",
    title: "Coordinamos tus entregas",
    description: "Establecemos un calendario que funcione para ti",
  },
];

export default function WholesaleSection() {
  return (
    <section id="mayoristas" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Soluciones para mayoristas
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Trabajamos con negocios que buscan un proveedor confiable y
            comprometido con su éxito.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left: Benefits */}
          <div>
            <h3 className="text-2xl font-semibold text-primary mb-6">
              Beneficios para tu negocio
            </h3>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-lg text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Steps */}
          <div>
            <h3 className="text-2xl font-semibold text-primary mb-6">
              Cómo funciona
            </h3>
            <div className="space-y-6">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">
                      {step.number}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary text-lg mb-1">
                      {step.title}
                    </h4>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

