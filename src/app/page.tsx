import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import CheckeredDivider from "@/components/ui/CheckeredDivider";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <CheckeredDivider />
      <Services />
      <CheckeredDivider />
      <About />
      <CheckeredDivider />
      <Contact />
    </main>
  );
}
