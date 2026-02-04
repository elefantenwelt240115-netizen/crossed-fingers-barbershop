"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-brand-black">
      {/* Pinstripe overlay */}
      <div className="absolute inset-0 pinstripe-bg opacity-30" />

      {/* Subtle radial gradient for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(20,0,10,0)_0%,rgba(20,0,10,0.6)_100%)]" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Image
            src="/images/cf-white.svg"
            alt="Crossed Fingers Barbershop - EST. 24"
            width={395}
            height={245}
            priority
            className="w-64 sm:w-80 md:w-96 h-auto"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="font-accent text-white/70 text-sm sm:text-base uppercase tracking-[0.3em] mt-6"
        >
          Premium Men&apos;s Barbershop
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="font-accent text-white/50 text-xs sm:text-sm uppercase tracking-[0.25em] mt-2"
        >
          Paphos, Cyprus
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mt-10"
        >
          <Button href="/booking" variant="outline">
            Book Your Cut
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-10 bg-gradient-to-b from-transparent via-white/40 to-white/60"
        />
      </motion.div>
    </section>
  );
}
