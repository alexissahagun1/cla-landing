import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-dark text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="relative h-24 w-24 mb-4 flex-shrink-0" style={{ position: 'relative' }}>
              <Image
                src="/logo.png"
                alt="Cremería Los Altos"
                fill
                className="object-cover"
                unoptimized
                sizes="128px"
              />
            </div>
            <p className="text-gray-300 text-sm">
              Cremería Los Altos · Guadalajara y Zapopan, Jalisco, México
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-4">Enlaces</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#quienes-somos"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Quiénes Somos
                </Link>
              </li>
              <li>
                <Link
                  href="#sucursales"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Sucursales
                </Link>
              </li>
              <li>
                <Link
                  href="#mayoristas"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Mayoristas
                </Link>
              </li>
              <li>
                <Link
                  href="#contacto"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Aviso de privacidad
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Términos
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary pt-8 text-center text-sm text-gray-300">
          <p>© {currentYear} Cremería Los Altos. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

