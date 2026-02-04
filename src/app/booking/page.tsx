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
    <main className="min-h-screen bg-brand-cream flex flex-col items-center justify-center px-4 py-20">
      <Image
        src="/images/cf-logo-black.svg"
        alt="Crossed Fingers Barbershop"
        width={263}
        height={164}
        className="w-48 sm:w-56 h-auto"
        priority
      />

      <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-brand-black mt-10 text-center">
        Book Your Appointment
      </h1>

      <p className="font-body text-lg text-brand-black/60 mt-4 text-center max-w-md">
        Select your service and pick a time that works for you.
      </p>

      <a
        href={BOOKING_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-10 inline-block bg-brand-black text-white font-accent uppercase tracking-[0.2em] text-sm font-semibold px-10 py-4 hover:bg-brand-navy transition-colors border-2 border-brand-black hover:border-brand-navy"
      >
        Open Booking
      </a>

      <p className="font-body text-sm text-brand-black/40 mt-4">
        You&apos;ll be redirected to our booking platform
      </p>

      <Link
        href="/"
        className="mt-12 font-accent text-sm uppercase tracking-[0.15em] text-brand-black/50 hover:text-brand-black transition-colors flex items-center gap-2"
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
