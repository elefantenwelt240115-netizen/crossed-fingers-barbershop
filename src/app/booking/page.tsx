import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import { BOOKING_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Book Now | Crossed Fingers Barbershop",
  description:
    "Book your appointment at Crossed Fingers Barbershop in Paphos, Cyprus. Fade cuts, style cuts, beard trims.",
};

export default function BookingPage() {
  return (
    <main className="min-h-screen bg-brand-cream flex flex-col items-center px-4 pt-24 pb-12">
      <Image
        src="/images/cf-logo-black.svg"
        alt="Crossed Fingers Barbershop"
        width={263}
        height={164}
        className="w-40 sm:w-48 h-auto"
        priority
      />

      <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-brand-black mt-8 text-center">
        Book Your Appointment
      </h1>

      <p className="font-body text-base text-brand-black/60 mt-3 text-center max-w-md">
        Select your service and pick a time that works for you.
      </p>

      {/* Setmore Booking Widget Embed */}
      <div className="w-full max-w-3xl mt-8 border-2 border-brand-black/10 bg-white">
        <iframe
          src={BOOKING_URL}
          scrolling="yes"
          width="100%"
          height="700"
          frameBorder="0"
          allow="web-share"
          title="Book an appointment at Crossed Fingers Barbershop"
          className="w-full"
        />
      </div>

      <Link
        href="/"
        className="mt-10 font-accent text-sm uppercase tracking-[0.15em] text-brand-black/50 hover:text-brand-black transition-colors flex items-center gap-2"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
        Back to Home
      </Link>
    </main>
  );
}
