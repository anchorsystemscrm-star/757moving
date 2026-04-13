import type { ReactNode } from "react";

import Link from "next/link";

import { cn } from "@/lib/utils";

type ActionLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  fullWidth?: boolean;
  onClick?: () => void;
};

const baseStyles =
  "inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold tracking-[0.01em] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2c74d8]/30";

const variantStyles: Record<NonNullable<ActionLinkProps["variant"]>, string> = {
  primary:
    "bg-[#0f4fae] text-white shadow-[0_20px_44px_rgba(15,79,174,0.28)] hover:-translate-y-0.5 hover:bg-[#0c428f]",
  secondary:
    "border border-white/70 bg-white text-slate-950 shadow-[0_12px_28px_rgba(15,23,42,0.12)] hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50",
  ghost: "text-slate-700 hover:text-slate-950"
};

export function ActionLink({
  href,
  children,
  variant = "primary",
  className,
  fullWidth = false,
  onClick
}: ActionLinkProps) {
  const classes = cn(
    baseStyles,
    variantStyles[variant],
    fullWidth && "w-full",
    className
  );

  if (href.startsWith("tel:") || href.startsWith("mailto:")) {
    return (
      <a className={classes} href={href} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <Link className={classes} href={href} onClick={onClick}>
      {children}
    </Link>
  );
}
