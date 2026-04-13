import Image from "next/image";
import Link from "next/link";

import { ActionLink } from "@/components/action-link";
import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-200">
      <div className="container-shell grid gap-12 py-14 lg:grid-cols-[1.3fr_0.8fr_0.9fr]">
        <div className="max-w-md">
          <Link className="inline-flex items-center" href="/">
            <Image
              src="/757moving-logo.png"
              alt="757 Moving logo"
              width={140}
              height={45}
              sizes="140px"
              className="mb-4 h-auto w-[132px] object-contain sm:w-[140px]"
            />
          </Link>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">
            Local movers built for speed, trust, and clean communication.
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-400">
            Serving Hampton Roads with premium local moving support for apartments,
            homes, same-day requests, and loading help that keeps the day on track.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <ActionLink href="/quote-request">Get Free Quote</ActionLink>
            <ActionLink href={siteConfig.phoneHref} variant="secondary">
              {siteConfig.phoneDisplay}
            </ActionLink>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-[#7fb0ff]">
            Explore
          </h3>
          <ul className="mt-5 space-y-3 text-sm text-slate-300">
            {siteConfig.navLinks.map((link) => (
              <li key={link.href}>
                <Link className="transition hover:text-white" href={link.href}>
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link className="transition hover:text-white" href="/quote-request">
                Quote Request
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-[#7fb0ff]">
            Service Area
          </h3>
          <ul className="mt-5 space-y-3 text-sm text-slate-300">
            {siteConfig.serviceAreas.map((city) => (
              <li key={city}>{city}</li>
            ))}
          </ul>
          <div className="mt-6 space-y-2 text-sm text-slate-400">
            <p>{siteConfig.email}</p>
            <p>{siteConfig.phoneDisplay}</p>
            <p>Daily scheduling across the 757 area.</p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5">
        <div className="container-shell flex flex-col gap-3 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <p>Built for local lead generation and fast quote requests.</p>
        </div>
      </div>
    </footer>
  );
}
