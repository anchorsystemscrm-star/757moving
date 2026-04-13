import { ActionLink } from "@/components/action-link";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { buildMetadata, faqItems, services, siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Moving Services in Hampton Roads",
  description:
    "Explore premium local moving services from 757 Moving, including apartment moves, same-day moves, loading help, and packing assistance across the 757 area.",
  path: "/services",
  keywords: ["apartment movers Virginia Beach", "loading and unloading movers", "packing help Norfolk"]
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        description="From apartment moves to same-day local relocations, every service is designed to keep your move organized, fast, and easy to book."
        eyebrow="Services"
        primaryCta={{ label: "Request a Quote", href: "/quote-request" }}
        secondaryCta={{ label: `Call ${siteConfig.phoneDisplay}`, href: siteConfig.phoneHref }}
        title="Local moving services that feel polished from start to finish"
      />

      <section className="warm-section border-y border-slate-200 py-20">
        <div className="container-shell grid gap-5 lg:grid-cols-2">
          {services.map((service) => (
            <article key={service.name} className="small-card p-7 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2c74d8]">
                {service.name}
              </p>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight text-slate-950">
                {service.blurb}
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-600">{service.details}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="tint-section border-y border-slate-200 py-20">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <SectionHeading
              eyebrow="Built For Real Life"
              title="Flexible help for local moves that change fast"
              description="Moving days rarely stay perfectly tidy. We keep space for same-day requests, apartment logistics, and loading support when you need professional movers on short notice."
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="small-card p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2c74d8]">
                Same-Day Openings
              </p>
              <p className="mt-3 text-base leading-7 text-slate-700">
                Short-notice moves are easier when you can reach a responsive local
                team that already knows the 757 area.
              </p>
            </div>
            <div className="small-card p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2c74d8]">
                Apartment Expertise
              </p>
              <p className="mt-3 text-base leading-7 text-slate-700">
                Elevators, stairs, move windows, and loading zones are already part
                of our planning routine.
              </p>
            </div>
            <div className="small-card p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2c74d8]">
                Careful Handling
              </p>
              <p className="mt-3 text-base leading-7 text-slate-700">
                Furniture protection, route planning, and steady communication keep
                the move feeling controlled instead of rushed.
              </p>
            </div>
            <div className="small-card p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2c74d8]">
                Quote Speed
              </p>
              <p className="mt-3 text-base leading-7 text-slate-700">
                Send your details once and we move quickly from estimate to booking.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="warm-section border-y border-slate-200 py-20">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Popular Questions"
            title="A few quick service answers"
            description="The most common things clients ask before booking."
          />
          <div className="mt-10 grid gap-4">
            {faqItems.slice(0, 3).map((item) => (
              <div key={item.question} className="small-card p-6">
                <h3 className="text-lg font-semibold text-slate-950">{item.question}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.answer}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <ActionLink href="/quote-request">Get My Quote</ActionLink>
            <ActionLink href="/contact" variant="secondary">
              Contact Us
            </ActionLink>
          </div>
        </div>
      </section>
    </>
  );
}
