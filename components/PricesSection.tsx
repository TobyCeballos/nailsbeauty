"use client";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

const pricingPlans = [
  {
    name: "Básico",
    price: "$50",
    features: ["Manicura clásica", "Pedicura simple", "Esmaltado básico"],
  },
  {
    name: "Premium",
    price: "$80",
    features: ["Manicura spa", "Pedicura spa", "Diseño de uñas simple", "Tratamiento de parafina"],
  },
  {
    name: "Lujo",
    price: "$120",
    features: ["Manicura de lujo", "Pedicura de lujo", "Diseño de uñas avanzado", "Tratamiento de parafina", "Masaje de manos y pies"],
  },
];

const PricesSection = () => {
  return (
    <section id="precios" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Nuestros Precios
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="overflow-x-auto"
        >
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Plan</TableHead>
                <TableHead>Precio</TableHead>
                <TableHead>Servicios Incluidos</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {pricingPlans.map((plan, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{plan.name}</TableCell>
                  <TableCell>{plan.price}</TableCell>
                  <TableCell>
                    <ul>
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center mb-2">
                          <Check className="h-4 w-4 text-green-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </motion.div>
      </div>
    </section>
  );
};

export default PricesSection;