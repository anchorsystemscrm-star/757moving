import { ActionLink } from "@/components/action-link";
import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { buildMetadata, siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Contact 757 Moving",
  description:
    "Call 757 Moving or send a quick message for fast scheduling, quote help, and local moving support across Hampton Roads.",
  path: "/contact",
  keywords: ["call movers near me", "moving quote Norfolk VA"]
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        description="Need movers fast? Call first for the quickest response, or send a short message and we will follow up as soon as possible."
        eyebrow="Contact"
        primaryCta={{ label: `Call ${siteConfig.phoneDisplay}`, href: siteConfig.phoneHref }}
        secondaryCta={{ label: "Request a Quote", href: "/quote-request" }}
        title="Phone-first moving help across the 757"
      />

      <section className="warm-section border-y border-slate-200 py-20">
        <div className="container-shell grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="space-y-5">
            <div className="small-card p-7 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#2c74d8]">
                Fastest way to reach us
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">
                Call {siteConfig.phoneDisplay}
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-600">
                Best for same-day openings, urgent scheduling questions, and quick
                quote follow-up.
              </p>
              <div className="mt-6">
                <ActionLink href={siteConfig.phoneHref}>Tap to Call</ActionLink>
              </div>
            </div>

            <div className="small-card bg-[linear-gradient(180deg,_#fff8f0_0%,_#fbf1e6_100%)] p-7 sm:p-8">
              <h3 className="text-xl font-semibold text-slate-950">Business hours</h3>
              <ul className="mt-5 space-y-3 text-sm text-slate-600">
                {siteConfig.hours.map((hour) => (
                  <li key={hour.day} className="flex items-center justify-between gap-4">
                    <span className="font-medium text-slate-900">{hour.day}</span>
                    <span>
                      {hour.opens} - {hour.closes}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="small-card p-7 sm:p-8">
              <h3 className="text-xl font-semibold text-slate-950">Service area</h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                Virginia Beach, Norfolk, Chesapeake, Portsmouth, Suffolk, Hampton,
                Newport News, and nearby Hampton Roads neighborhoods.
              </p>
            </div>
          </div>

          <div>
            <SectionHeading
              eyebrow="Send a Message"
              title="Tell us what you need and we will follow up quickly"
              description="For quote requests with move details, the dedicated quote form is the fastest route. For general questions, use the contact form below."
              />
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
