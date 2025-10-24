import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mi Perfil Político Guerrero | Descubre Tu Posición en el Mapa",
  description: "Descubre tu perfil político único en Guerrero mediante 10 preguntas interactivas. Una experiencia viral tipo Spotify Wrapped para política. ¡Comparte tu resultado!",
  keywords: ["política", "Guerrero", "encuesta", "perfil político", "México", "quiz político"],
  authors: [{ name: "Mapa Político Guerrero" }],
  openGraph: {
    title: "Mi Perfil Político Guerrero",
    description: "¿Dónde estás en el mapa político de Guerrero? Descubre tu perfil en 2 minutos",
    url: "https://miperfilguerrero.com",
    siteName: "Mi Perfil Político Guerrero",
    type: "website",
    images: [
      {
        url: "/assets/guerrero-map.png",
        width: 1200,
        height: 630,
        alt: "Mapa Político de Guerrero"
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mi Perfil Político Guerrero",
    description: "Descubre tu perfil político único en Guerrero",
    images: ["/assets/guerrero-map.png"],
  },
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#10B981" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
