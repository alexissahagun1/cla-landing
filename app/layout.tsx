import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cremería Los Altos - Lácteos frescos en Guadalajara y Zapopan",
  description:
    "Abastecemos hogares y negocios en Guadalajara y Zapopan con productos frescos, confiables y a precios competitivos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

