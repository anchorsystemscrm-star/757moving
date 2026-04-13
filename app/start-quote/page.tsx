import { ActionLink } from "@/components/action-link";
import { PageHero } from "@/components/page-hero";
import { StartQuoteIntakeForm } from "@/components/start-quote-intake-form";
import { buildMetadata, siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Start Your Quote",
  description:
    "Use the 757 Moving intake portal to submit contact details, move basics, access notes, and room-by-room photos or videos for a cleaner, more accurate moving quote.",
  path: "/start-quote",
  keywords: ["moving quote portal", "local movers 757", "same day movers Hampton Roads"]
});

const quickBenefits = [
  "Room-by-room uploads for better estimate accuracy",
  "Cleaner review process for apartments, homes, and short-notice moves",
  "Built for local moves across Virginia Beach, Norfolk, Chesapeake, Portsmouth, and Suffolk"
] as const;

export default function StartQuotePage() {
  return (
    <>
      <PageHero
        description="Answer a few quick questions and upload organized photos or videos so we can review your move faster and give a more accurate quote."
        eyebrow="Moving Intake Portal"
        primaryCta={{ label: "Jump to Intake", href: "#quote-intake-form" }}
        secondaryCta={{ label: `Call ${siteConfig.phoneDisplay}`, href: siteConfig.phoneHref }}
        title="Start Your Quote"
      />

      <section className="container-shell py-20">
        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <aside className="space-y-5">
            <div className="small-card p-7 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#2c74d8]">
                What This Portal Does
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">
                A cleaner quote process for real moving estimates
              </h2>
              <ul className="mt-6 space-y-4">
                {quickBenefits.map((benefit) => (
                  <li key={benefit} className="flex gap-3 text-sm leading-7 text-slate-600">
                    <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#0f4fae] text-xs font-semibold text-white">
                      ✓
                    </span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="small-card p-7 sm:p-8">
              <h3 className="text-xl font-semibold text-slate-950">Need help right away?</h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                If the move is urgent or you would rather walk through the details live,
                call now and we can guide the next step directly.
              </p>
              <div className="mt-6">
                <ActionLink href={siteConfig.phoneHref}>Call Now</ActionLink>
              </div>
            </div>
          </aside>

          <div>
            <StartQuoteIntakeForm />
          </div>
        </div>
      </section>
    </>
  );
}

