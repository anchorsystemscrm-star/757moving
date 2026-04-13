import { ActionLink } from "@/components/action-link";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { buildMetadata, citySections, siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Service Area",
  description:
    "Local moving service across Virginia Beach, Norfolk, Chesapeake, Portsmouth, Suffolk, and surrounding Hampton Roads neighborhoods.",
  path: "/service-area",
  keywords: [
    "moving company Virginia Beach",
    "movers Norfolk VA",
    "same day movers Hampton Roads"
  ]
});

export default function ServiceAreaPage() {
  return (
    <>
      <PageHero
        description="We focus on the Hampton Roads and 757 region so clients get faster scheduling, better route awareness, and local crews that understand the area."
        eyebrow="Service Area"
        primaryCta={{ label: "Get Free Quote", href: "/quote-request" }}
        secondaryCta={{ label: `Call ${siteConfig.phoneDisplay}`, href: siteConfig.phoneHref }}
        title="Professional movers across Virginia Beach, Norfolk, Chesapeake, Portsmouth, and Suffolk"
      />

      <section className="warm-section border-y border-slate-200 py-20">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Hampton Roads Coverage"
            title="Focused local service, written for real people instead of keyword stuffing"
            description="We stay local so we can stay responsive. That means tighter scheduling, easier communication, and fewer surprises on moving day."
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {citySections.map((section) => (
              <article key={section.city} className="small-card p-7 sm:p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2c74d8]">
                  {section.city}
                </p>
                <h2 className="mt-4 text-2xl font-semibold tracking-tight text-slate-950">
                  {section.title}
                </h2>
                <p className="mt-4 text-base leading-8 text-slate-600">{section.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="tint-section border-y border-slate-200 py-20">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Also Serving"
            title="The wider 757 area and surrounding local routes"
            description="If your move starts or ends nearby, reach out. We regularly support local moves around the core cities we serve."
          />
          <div className="mt-10 flex flex-wrap gap-3">
            {siteConfig.serviceAreas.map((city) => (
              <span
                key={city}
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm"
              >
                {city}
              </span>
            ))}
          </div>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <ActionLink href="/quote-request">Check Availability</ActionLink>
            <ActionLink href="/contact" variant="secondary">
              Contact Us
            </ActionLink>
          </div>
        </div>
      </section>
    </>
  );
}
