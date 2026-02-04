"use client";

import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { BARBER_NAME } from "@/lib/constants";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-brand-blush">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="The Barber" subtitle="Est. 2024" />

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Image */}
          <ScrollReveal>
            <div className="relative">
              <div className="aspect-[4/5] bg-brand-navy/10 overflow-hidden">
                <Image
                  src="/images/profile.jpeg"
                  alt="Jan - Barber at Crossed Fingers Barbershop"
                  width={600}
                  height={750}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Decorative frame */}
              <div className="absolute -bottom-3 -right-3 w-full h-full border-2 border-brand-navy/20 -z-10" />
            </div>
          </ScrollReveal>

          {/* Text */}
          <ScrollReveal delay={0.2}>
            <div className="max-w-lg">
              <p className="font-body text-brand-navy/80 text-lg leading-relaxed mb-6">
                Welcome to Crossed Fingers Barbershop. Run by {BARBER_NAME}, where classic
                craftsmanship meets modern style. Located in the heart of Paphos, we
                bring the art of traditional barbering to life with precision cuts and
                attention to every detail.
              </p>
              <p className="font-body text-brand-navy/80 text-lg leading-relaxed mb-8">
                Every cut is a craft. Every visit is an experience. {BARBER_NAME} takes
                pride in creating looks that are as unique as the men who wear
                them &mdash; from clean fades to classic style cuts, finished with
                the care and expertise that only a true barber can deliver.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-[2px] bg-brand-navy/30" />
                <p className="font-accent text-brand-navy/60 uppercase tracking-[0.2em] text-sm">
                  Paphos, Cyprus
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
