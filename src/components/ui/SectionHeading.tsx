import ScrollReveal from "./ScrollReveal";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  light?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  light = false,
}: SectionHeadingProps) {
  return (
    <ScrollReveal className="text-center mb-12 md:mb-16">
      <div className="flex items-center justify-center gap-4 mb-4">
        <span
          className={`block w-8 h-[2px] ${light ? "bg-white/40" : "bg-brand-black/30"}`}
        />
        <StarIcon light={light} />
        <span
          className={`block w-8 h-[2px] ${light ? "bg-white/40" : "bg-brand-black/30"}`}
        />
      </div>
      <h2
        className={`font-heading text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight ${light ? "text-white" : "text-brand-black"}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`font-accent text-lg md:text-xl uppercase tracking-[0.3em] mt-2 ${light ? "text-white/70" : "text-brand-black/60"}`}
        >
          {subtitle}
        </p>
      )}
    </ScrollReveal>
  );
}

function StarIcon({ light }: { light: boolean }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={light ? "text-white/60" : "text-brand-black/40"}
    >
      <path
        d="M8 0L9.79 6.21L16 8L9.79 9.79L8 16L6.21 9.79L0 8L6.21 6.21L8 0Z"
        fill="currentColor"
      />
    </svg>
  );
}
