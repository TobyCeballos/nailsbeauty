"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const handleScrollToContact = () => {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen flex items-center justify-center text-center text-white">
      <Image
        src="https://images.unsplash.com/photo-1610992015732-2449b76344bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
        alt="Manicura y Pedicura"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-3xl mx-auto px-4"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-6">Belleza en tus manos y pies</h1>
        <p className="text-xl md:text-2xl mb-8">Descubre el arte de la manicura y pedicura con nuestros servicios de alta calidad</p>
        <Button
          size="lg"
          className="bg-gradient-to-r from-pink-500 to-red-500 text-white font-bold py-3 px-8 rounded-full text-lg hover:from-pink-600 hover:to-red-600 transition duration-300"
          onClick={handleScrollToContact}
        >
          Reserva tu turno ahora
        </Button>
      </motion.div>
    </section>
  );
};

export default HeroSection;