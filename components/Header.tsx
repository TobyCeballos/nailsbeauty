"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { motion } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md"
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-pink-600">NailsBeauty</Link>
        
        <nav className="hidden md:flex space-x-6">
          <Link href="#servicios" className="text-gray-600 hover:text-pink-600">Servicios</Link>
          <Link href="#precios" className="text-gray-600 hover:text-pink-600">Precios</Link>
          <Link href="#testimonios" className="text-gray-600 hover:text-pink-600">Testimonios</Link>
          <Link href="#galeria" className="text-gray-600 hover:text-pink-600">Galería</Link>
          <Link href="#contacto" className="text-gray-600 hover:text-pink-600">Contacto</Link>
        </nav>
        
        <Button asChild className="hidden md:inline-flex bg-gradient-to-r from-pink-500 to-red-500 text-white font-bold py-2 px-4 rounded hover:from-pink-600 hover:to-red-600 transition duration-300">
          <Link href="/reservas">Reserva tu turno</Link>
        </Button>
        
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Menu className="h-6 w-6 text-gray-600" />
        </button>
      </div>
      
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white py-2"
        >
          <nav className="flex flex-col space-y-2 px-4">
            <Link href="#servicios" className="text-gray-600 hover:text-pink-600">Servicios</Link>
            <Link href="#precios" className="text-gray-600 hover:text-pink-600">Precios</Link>
            <Link href="#testimonios" className="text-gray-600 hover:text-pink-600">Testimonios</Link>
            <Link href="#galeria" className="text-gray-600 hover:text-pink-600">Galería</Link>
            <Link href="#contacto" className="text-gray-600 hover:text-pink-600">Contacto</Link>
            <Button asChild className="bg-gradient-to-r from-pink-500 to-red-500 text-white font-bold py-2 px-4 rounded hover:from-pink-600 hover:to-red-600 transition duration-300">
              <Link href="/reservas">Reserva tu turno</Link>
            </Button>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;