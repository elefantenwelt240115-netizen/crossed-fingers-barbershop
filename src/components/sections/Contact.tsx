"use client";

import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { ADDRESS, CONTACT, OPENING_HOURS, REVIEWS } from "@/lib/constants";

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-brand-black text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Find Us" light />

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {/* Info Column */}
          <ScrollReveal>
            <div className="space-y-8">
              {/* Address */}
              <div>
                <h3 className="font-accent text-sm uppercase tracking-[0.2em] text-white/50 mb-3">
                  Address
                </h3>
                <p className="font-body text-lg text-white/90 leading-relaxed">
                  {ADDRESS.street}
                  <br />
                  {ADDRESS.city}, {ADDRESS.postalCode}
                  <br />
                  {ADDRESS.country}
                </p>
              </div>

              {/* Phone */}
              <div>
                <h3 className="font-accent text-sm uppercase tracking-[0.2em] text-white/50 mb-3">
                  Phone
                </h3>
                <a
                  href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                  className="font-body text-lg text-white/90 hover:text-brand-gold transition-colors"
                >
                  {CONTACT.phone}
                </a>
              </div>

              {/* Opening Hours */}
              <div>
                <h3 className="font-accent text-sm uppercase tracking-[0.2em] text-white/50 mb-3">
                  Opening Hours
                </h3>
                <div className="space-y-1.5">
                  {OPENING_HOURS.map((item) => (
                    <div
                      key={item.day}
                      className="flex items-center justify-between max-w-xs"
                    >
                      <span
                        className={`font-body text-sm ${item.open ? "text-white/80" : "text-white/40"}`}
                      >
                        {item.day}
                      </span>
                      <span
                        className={`font-accent text-sm tracking-wider ${item.open ? "text-white/80" : "text-white/40"}`}
                      >
                        {item.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social */}
              <div>
                <h3 className="font-accent text-sm uppercase tracking-[0.2em] text-white/50 mb-4">
                  Connect
                </h3>
                <div className="flex items-center gap-6">
                  <a
                    href={`https://instagram.com/${CONTACT.instagram}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <circle cx="12" cy="12" r="5" />
                      <circle
                        cx="17.5"
                        cy="6.5"
                        r="1.5"
                        fill="currentColor"
                        stroke="none"
                      />
                    </svg>
                    <span className="font-accent text-sm uppercase tracking-wider">
                      @{CONTACT.instagram}
                    </span>
                  </a>
                  <a
                    href={`https://wa.me/${CONTACT.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    <span className="font-accent text-sm uppercase tracking-wider">
                      WhatsApp
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column: Map + Reviews */}
          <div className="space-y-8">
            {/* Map */}
            <ScrollReveal delay={0.2}>
              <div className="aspect-video w-full overflow-hidden border border-white/10">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.5!2d32.4236!3d34.7584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDQ1JzMwLjIiTiAzMsKwMjUnMjUuMCJF!5e0!3m2!1sen!2scy!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Crossed Fingers Barbershop Location"
                  className="map-grayscale w-full h-full"
                />
              </div>
            </ScrollReveal>

            {/* Reviews */}
            <ScrollReveal delay={0.3}>
              <div className="border border-brand-gold/20 bg-white/[0.03] p-8">
                {/* Rating header */}
                <div className="flex flex-col items-center text-center mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Image
                        key={i}
                        src="/images/cf-icon-white.svg"
                        alt=""
                        width={20}
                        height={12}
                        className="w-5 h-auto opacity-80"
                        style={{ filter: "brightness(0) saturate(100%) invert(72%) sepia(30%) saturate(700%) hue-rotate(6deg) brightness(92%) contrast(85%)" }}
                      />
                    ))}
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-heading text-3xl font-bold text-brand-gold">
                      {REVIEWS.rating}
                    </span>
                    <span className="font-accent text-sm text-white/40 uppercase tracking-[0.15em]">
                      / 5.0
                    </span>
                  </div>
                  <span className="font-accent text-xs text-white/40 uppercase tracking-[0.2em] mt-1">
                    {REVIEWS.count} Google Reviews
                  </span>
                </div>

                {/* Divider */}
                <div className="w-12 h-[1px] bg-brand-gold/30 mx-auto mb-6" />

                {/* Review quotes */}
                <div className="space-y-5">
                  {REVIEWS.highlights.map((review, i) => (
                    <blockquote key={i} className="border-l-2 border-brand-gold/30 pl-4">
                      <p className="font-body text-sm text-white/70 italic leading-relaxed">
                        &ldquo;{review.text}&rdquo;
                      </p>
                      <cite className="font-accent text-xs text-white/40 not-italic mt-2 block uppercase tracking-[0.15em]">
                        &mdash; {review.author}
                      </cite>
                    </blockquote>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
