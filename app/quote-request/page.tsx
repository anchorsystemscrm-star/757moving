import { ActionLink } from "@/components/action-link";
import { PageHero } from "@/components/page-hero";
import { buildMetadata, siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Request a Moving Quote",
  description:
    "Get a fast quote from 757 Moving for local, apartment, residential, and same-day moves across Hampton Roads.",
  path: "/quote-request",
  keywords: ["moving quote Virginia Beach", "same day movers Hampton Roads"]
});

const highlights = [
  "Fast quote turnaround",
  "Better accuracy with photos and videos",
  "Built for local moves across Hampton Roads"
] as const;

export default function QuoteRequestPage() {
  return (
    <>
      <PageHero
        description="Answer a few quick questions and upload organized photos or videos so we can review your move faster and give a more accurate quote."
        eyebrow="Quote Request"
        primaryCta={{ label: "Start Your Quote", href: "/start-quote" }}
        secondaryCta={{ label: `Call ${siteConfig.phoneDisplay}`, href: siteConfig.phoneHref }}
        title="Start Your Moving Quote"
      />

      <section className="container-shell py-20">
        <div className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="small-card p-8 sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#2c74d8]">
              How It Works
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              A cleaner moving quote flow built for faster review
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
              The new intake portal keeps your quote organized from the start. Add
              move basics, access details, and room-by-room photos or videos so our
              team can review the job quickly and respond with better accuracy.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ActionLink href="/start-quote">Start Your Quote</ActionLink>
              <ActionLink href={siteConfig.phoneHref} variant="secondary">
                Call Now
              </ActionLink>
            </div>
          </div>

          <aside className="space-y-5">
            <div className="small-card p-7 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#2c74d8]">
                Trust Points
              </p>
              <ul className="mt-4 space-y-4">
                {highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3 text-sm leading-7 text-slate-600">
                    <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#0f4fae] text-xs font-semibold text-white">
                      ✓
                    </span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="small-card p-7 sm:p-8">
              <h3 className="text-xl font-semibold text-slate-950">Best for a more accurate estimate</h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                Organized uploads help us review furniture, box count, stairs,
                elevators, and access details without turning the page into a giant
                generic form.
              </p>
            </div>

            <div className="small-card p-7 sm:p-8">
              <h3 className="text-xl font-semibold text-slate-950">Serving the 757</h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                Built for local apartment moves, home moves, and short-notice
                scheduling across Virginia Beach, Norfolk, Chesapeake, Portsmouth,
                Suffolk, and surrounding Hampton Roads neighborhoods.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
