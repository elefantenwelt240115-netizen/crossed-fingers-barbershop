import type { Metadata } from "next";
import { Oswald, Barlow, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { SITE_NAME, SITE_URL, ADDRESS } from "@/lib/constants";

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
});

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-barlow",
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-barlow-condensed",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${SITE_NAME} | Paphos, Cyprus`,
  description:
    "Premium men's barbershop in Paphos, Cyprus. Fade cuts, style cuts, beard trims. EST. 2024. Book your appointment today.",
  keywords: [
    "barbershop",
    "Paphos",
    "Cyprus",
    "fade cut",
    "beard trim",
    "men's barber",
    "Crossed Fingers",
    "barber Paphos",
  ],
  openGraph: {
    title: SITE_NAME,
    description: "Premium men's barbershop in Paphos, Cyprus",
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/images/cf-icon-black.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BarberShop",
  name: SITE_NAME,
  image: `${SITE_URL}/images/cf-black.svg`,
  address: {
    "@type": "PostalAddress",
    streetAddress: ADDRESS.street,
    addressLocality: ADDRESS.city,
    addressRegion: ADDRESS.region,
    postalCode: ADDRESS.postalCode,
    addressCountry: ADDRESS.countryCode,
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "54",
  },
  priceRange: "$$",
  url: SITE_URL,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${oswald.variable} ${barlow.variable} ${barlowCondensed.variable}`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
