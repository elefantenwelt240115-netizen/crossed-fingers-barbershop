"use client";

import { motion } from "framer-motion";

interface ServiceCardProps {
  name: string;
  price: number;
  description: string;
  index: number;
}

export default function ServiceCard({
  name,
  price,
  description,
  index,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div className="flex items-end">
        <h3 className="font-heading text-xl md:text-2xl font-bold uppercase whitespace-nowrap">
          {name}
        </h3>
        <div className="dotted-leader" />
        <span className="font-heading text-xl md:text-2xl font-bold whitespace-nowrap">
          &euro;{price}
        </span>
      </div>
      <p className="text-sm text-brand-black/60 mt-1 font-body">
        {description}
      </p>
    </motion.div>
  );
}
