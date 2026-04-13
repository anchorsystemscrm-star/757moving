"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { ActionLink } from "@/components/action-link";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/70 bg-white/88 backdrop-blur-xl">
      <div className="container-shell flex h-[72px] items-center justify-between gap-4 py-4">
        <Link className="flex items-center gap-3" href="/" onClick={() => setMenuOpen(false)}>
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#123a72] text-sm font-bold text-white shadow-[0_12px_24px_rgba(18,58,114,0.2)]">
            757
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              Hampton Roads Movers
            </p>
            <p className="text-lg font-semibold tracking-tight text-slate-950">
              757 Moving
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {siteConfig.navLinks.map((link) => {
            const active =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));

            return (
              <Link
                key={link.href}
                className={cn(
                  "text-sm font-medium text-slate-600 transition-colors hover:text-slate-950",
                  active && "text-slate-950"
                )}
                href={link.href}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            className="text-sm font-semibold text-slate-950 transition-colors hover:text-[#123a72]"
            href={siteConfig.phoneHref}
          >
            {siteConfig.phoneDisplay}
          </a>
          <ActionLink href="/quote-request">Get Quote</ActionLink>
        </div>

        <button
          aria-expanded={menuOpen}
          aria-label="Toggle navigation menu"
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 text-slate-900 transition hover:border-slate-300 hover:bg-slate-50 lg:hidden"
          onClick={() => setMenuOpen((current) => !current)}
          type="button"
        >
          <span className="flex flex-col gap-1.5">
            <span className="block h-0.5 w-5 rounded-full bg-current" />
            <span className="block h-0.5 w-5 rounded-full bg-current" />
            <span className="block h-0.5 w-5 rounded-full bg-current" />
          </span>
        </button>
      </div>

      {menuOpen ? (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <div className="container-shell flex flex-col gap-2 py-5">
            {siteConfig.navLinks.map((link) => {
              const active =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href));

              return (
                <Link
                  key={link.href}
                  className={cn(
                    "rounded-lg px-3 py-3 text-base font-medium text-slate-700 transition hover:bg-slate-50 hover:text-slate-950",
                    active && "bg-slate-50 text-slate-950"
                  )}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="mt-2 flex flex-col gap-3 border-t border-slate-200 pt-4">
              <ActionLink fullWidth href={siteConfig.phoneHref} variant="secondary">
                Call {siteConfig.phoneDisplay}
              </ActionLink>
              <ActionLink
                fullWidth
                href="/quote-request"
                onClick={() => setMenuOpen(false)}
              >
                Get Quote
              </ActionLink>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}

