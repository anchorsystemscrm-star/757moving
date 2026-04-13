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
  "button-base";

const variantStyles: Record<NonNullable<ActionLinkProps["variant"]>, string> = {
  primary: "button-primary",
  secondary: "button-secondary",
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
