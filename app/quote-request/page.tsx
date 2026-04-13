import { ActionLink } from "@/components/action-link";
import { PageHero } from "@/components/page-hero";
import { QuoteForm } from "@/components/quote-form";
import { buildMetadata, siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Request a Moving Quote",
  description:
    "Get a fast quote from 757 Moving for local, apartment, residential, and same-day moves across Hampton Roads.",
  path: "/quote-request",
  keywords: ["moving quote Virginia Beach", "same day movers Hampton Roads"]
});

const highlights = [
  "Fast response for same-day and next-day availability",
  "Clearer pricing with accurate move details",
  "Easy follow-up by phone or email after submission"
] as const;

export default function QuoteRequestPage() {
  return (
    <>
      <PageHero
        description="Share the details once and we will help you move quickly. This form is built to keep local quote requests simple, clear, and fast to review."
        eyebrow="Quote Request"
        primaryCta={{ label: `Call ${siteConfig.phoneDisplay}`, href: siteConfig.phoneHref }}
        secondaryCta={{ label: "Contact Us", href: "/contact" }}
        title="Request your free local moving quote"
      />

      <section className="container-shell py-20">
        <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr]">
          <div>
            <QuoteForm />
          </div>

          <aside className="space-y-5">
            <div className="small-card p-7 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#2c74d8]">
                What to Expect
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">
                A quote process designed to move quickly
              </h2>
              <ul className="mt-6 space-y-4">
                {highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3 text-sm leading-7 text-slate-600">
                    <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#123a72] text-xs font-semibold text-white">
                      ✓
                    </span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="small-card p-7 sm:p-8">
              <h3 className="text-xl font-semibold text-slate-950">Need a faster answer?</h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                Call us directly for short-notice moves, urgent schedule questions,
                or if you would rather walk through the move live.
              </p>
              <div className="mt-6">
                <ActionLink href={siteConfig.phoneHref}>Call Now</ActionLink>
              </div>
            </div>

            <div className="small-card p-7 sm:p-8">
              <h3 className="text-xl font-semibold text-slate-950">Service area</h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                We quote local moves across Virginia Beach, Norfolk, Chesapeake,
                Portsmouth, Suffolk, and surrounding Hampton Roads neighborhoods.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

