"use client";

import Image from "next/image";
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
      <div className="container-shell flex h-[74px] items-center justify-between gap-4 py-4">
        <Link
          className="flex items-center"
          href="/"
          onClick={() => setMenuOpen(false)}
        >
          <Image
            src="/757moving-logo.png"
            alt="757 Moving logo"
            width={148}
            height={46}
            priority
            sizes="(max-width: 640px) 124px, (max-width: 1024px) 138px, 148px"
            className="h-auto w-[124px] object-contain sm:w-[138px] lg:w-[148px]"
          />
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
          <ActionLink href="/quote-request">Get My Quote</ActionLink>
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
                Get My Quote
              </ActionLink>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
