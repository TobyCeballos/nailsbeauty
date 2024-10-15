"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Scissors, Droplet, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: Scissors,
    title: "Manicura",
    description: "Cuidado completo de tus uñas, incluyendo corte, limado y esmaltado.",
    price: "Desde $25"
  },
  {
    icon: Droplet,
    title: "Pedicura",
    description: "Tratamiento rejuvenecedor para tus pies, incluyendo exfoliación y masaje.",
    price: "Desde $35"
  },
  {
    icon: Sparkles,
    title: "Diseños de uñas",
    description: "Arte personalizado para tus uñas, desde diseños simples hasta elaborados.",
    price: "Desde $15"
  }
];

const ServicesSection = () => {
  return (
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Nuestros Servicios
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-pink-600" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{service.description}</CardDescription>
                  <p className="mt-4 font-semibold text-pink-600">{service.price}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;