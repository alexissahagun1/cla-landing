"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Mail, Phone, Clock } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    tipoCliente: "",
    mensaje: "",
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form data:", formData);
    setShowSuccess(true);
    setFormData({
      nombre: "",
      email: "",
      telefono: "",
      tipoCliente: "",
      mensaje: "",
    });
    setTimeout(() => setShowSuccess(false), 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contacto" className="py-16 md:py-24 bg-neutral-lighter">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Contacto
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Atendemos clientes de menudeo y mayoreo. Déjanos tus datos y con
            gusto te contactamos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left: Form */}
          <div>
            {showSuccess && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-800 font-medium">
                  Tu mensaje se envió correctamente.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="nombre" className="text-gray-700">
                  Nombre completo
                </Label>
                <Input
                  id="nombre"
                  name="nombre"
                  type="text"
                  required
                  value={formData.nombre}
                  onChange={handleChange}
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-gray-700">
                  Correo electrónico
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="telefono" className="text-gray-700">
                  Teléfono
                </Label>
                <Input
                  id="telefono"
                  name="telefono"
                  type="tel"
                  required
                  value={formData.telefono}
                  onChange={handleChange}
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="tipoCliente" className="text-gray-700">
                  Tipo de cliente
                </Label>
                <Select
                  value={formData.tipoCliente}
                  onValueChange={(value) =>
                    setFormData({ ...formData, tipoCliente: value })
                  }
                  required
                >
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Selecciona una opción" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="menudeo">Menudeo</SelectItem>
                    <SelectItem value="mayoreo">Mayoreo</SelectItem>
                    <SelectItem value="otro">Otro</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="mensaje" className="text-gray-700">
                  Mensaje
                </Label>
                <Textarea
                  id="mensaje"
                  name="mensaje"
                  rows={5}
                  value={formData.mensaje}
                  onChange={handleChange}
                  className="mt-2"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary-dark text-white text-base py-6"
              >
                Enviar mensaje
              </Button>
            </form>
          </div>

          {/* Right: Contact Info Card */}
          <div>
            <Card className="border-neutral-200 shadow-sm">
              <CardHeader>
                <CardTitle className="text-primary">Información de contacto</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-700 mb-1">Correo</p>
                    <a
                      href="mailto:contacto@cremerialosaltos.com"
                      className="text-primary hover:underline"
                    >
                      contacto@cremerialosaltos.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-700 mb-1">Teléfono</p>
                    <a href="tel:+523312345678" className="text-primary hover:underline">
                      (33) 1234-5678
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-700 mb-1">
                      Horario de atención
                    </p>
                    <p className="text-gray-600">
                      Lunes a Sábado: 8:00 AM - 8:00 PM
                      <br />
                      Domingo: 9:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

