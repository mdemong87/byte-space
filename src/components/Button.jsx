import Link from "next/link";

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  className = "",
  ...props
}) {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 cursor-pointer select-none";

  const variants = {
    primary:
      "bg-accent text-navy hover:bg-accent-hover hover:shadow-lg hover:shadow-accent/20 active:scale-[0.98]",
    secondary:
      "bg-white text-navy hover:bg-gray-50 hover:shadow-lg active:scale-[0.98]",
    outline:
      "bg-transparent border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 active:scale-[0.98]",
    ghost:
      "bg-transparent text-white hover:bg-white/10 active:scale-[0.98]",
    dark:
      "bg-navy text-white hover:bg-navy-light hover:shadow-lg active:scale-[0.98]",
  };

  const sizes = {
    sm: "text-sm px-4 py-2 gap-1.5",
    md: "text-[15px] px-6 py-3 gap-2",
    lg: "text-base px-8 py-3.5 gap-2.5",
    xl: "text-lg px-10 py-4 gap-3",
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
