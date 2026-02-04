"use client";

import { services, BOOKING_URL } from "@/lib/constants";
import ServiceCard from "@/components/ui/ServiceCard";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-brand-cream">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <SectionHeading title="Services" subtitle="& Pricing" />

        <div className="flex flex-col gap-6">
          {services.map((service, i) => (
            <ServiceCard
              key={service.name}
              name={service.name}
              price={service.price}
              description={service.description}
              index={i}
            />
          ))}
        </div>

        <ScrollReveal delay={0.6} className="text-center mt-12">
          <Button href="/booking" variant="primary">
            Book Now
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
}
