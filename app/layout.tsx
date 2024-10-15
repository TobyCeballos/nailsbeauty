import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Belleza en tus Manos y Pies | Manicura y Pedicura',
  description: 'Descubre nuestros servicios de manicura y pedicura de alta calidad. Reserva tu cita hoy y déjanos cuidar de tus manos y pies.',
  keywords: 'manicura, pedicura, uñas, belleza, spa, tratamientos de belleza',
  openGraph: {
    title: 'Belleza en tus Manos y Pies | Manicura y Pedicura',
    description: 'Servicios de manicura y pedicura de alta calidad',
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}