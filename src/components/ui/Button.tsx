import Link from "next/link";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline";
  external?: boolean;
  className?: string;
}

export default function Button({
  href,
  children,
  variant = "primary",
  external = false,
  className = "",
}: ButtonProps) {
  const base =
    "inline-block font-accent uppercase tracking-[0.2em] text-sm font-semibold px-8 py-4 transition-all duration-300 text-center";

  const variants = {
    primary:
      "bg-brand-black text-white hover:bg-brand-navy border-2 border-brand-black hover:border-brand-navy",
    outline:
      "bg-transparent text-white border-2 border-white hover:bg-white hover:text-brand-black",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
