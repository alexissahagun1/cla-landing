import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, DollarSign, Heart } from "lucide-react";

export default function AboutSection() {
  const features = [
    {
      icon: CheckCircle2,
      title: "Lácteos frescos seleccionados",
      description: "Productos de la más alta calidad",
    },
    {
      icon: DollarSign,
      title: "Precios competitivos para menudeo y mayoreo",
      description: "Opciones para todos los presupuestos",
    },
    {
      icon: Heart,
      title: "Atención cercana y personalizada",
      description: "Servicio con trato humano",
    },
  ];

  return (
    <section id="quienes-somos" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Quiénes Somos
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: Text Content */}
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Somos una cremería con raíces tapatías y presencia en Guadalajara
              y Zapopan. Ofrecemos lácteos frescos, precios competitivos y un
              trato cercano tanto para familias como para negocios que buscan un
              proveedor confiable.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Nuestra experiencia y compromiso con la calidad nos han
              posicionado como una opción de confianza en la región.
            </p>
          </div>

          {/* Right: Info Card */}
          <Card className="border-neutral-200 shadow-sm">
            <CardContent className="p-6 space-y-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

