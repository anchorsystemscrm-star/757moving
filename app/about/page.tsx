import Image from "next/image";

import { ActionLink } from "@/components/action-link";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { buildMetadata, siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: "About 757 Moving",
  description:
    "Learn how 757 Moving helps Hampton Roads clients book reliable, professional local movers with clear communication and fast scheduling.",
  path: "/about",
  keywords: ["local movers 757", "professional movers Hampton Roads"]
});

const values = [
  {
    title: "Reliable arrival windows",
    text:
      "Clients need movers they can plan around. We focus on responsiveness before the move and dependable arrival communication on the day itself."
  },
  {
    title: "Professional communication",
    text:
      "From your first call to the final unload, the process should feel clear, calm, and easy to follow. That is part of the service."
  },
  {
    title: "Local knowledge",
    text:
      "We work across the 757 area, which means better route awareness, tighter scheduling, and crews that understand the pace of Hampton Roads moves."
  }
] as const;

export default function AboutPage() {
  return (
    <>
      <PageHero
        description="757 Moving is built for local clients who want a moving company that communicates clearly, works professionally, and keeps the process moving without unnecessary drama."
        eyebrow="About"
        primaryCta={{ label: "Request a Quote", href: "/quote-request" }}
        secondaryCta={{ label: "Call Now", href: siteConfig.phoneHref }}
        title="A local moving company built around trust, pace, and professionalism"
      />

      <section className="container-shell py-20">
        <div className="grid items-center gap-10 lg:grid-cols-[1.02fr_0.98fr]">
          <div>
            <SectionHeading
              eyebrow="Our Story"
              title="We keep local moves feeling organized, responsive, and easier to manage"
              description="757 Moving was built for people who need real help fast and do not want to gamble on poor communication or unreliable scheduling. We focus on the basics that matter most: show up prepared, communicate clearly, handle belongings with care, and keep the move flowing."
            />
            <p className="mt-6 text-base leading-8 text-slate-600">
              Whether it is an apartment across town, a family home moving day, or a
              short-notice local relocation, our job is to make the process feel
              tighter, cleaner, and more dependable than the average moving
              experience.
            </p>
          </div>
          <div className="relative overflow-hidden rounded-[28px] border border-slate-200 shadow-[0_30px_80px_rgba(15,23,42,0.12)]">
            <Image
              alt="Stylish apartment interior prepared for a move"
              className="h-full w-full object-cover"
              height={780}
              sizes="(min-width: 1024px) 42rem, 100vw"
              src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80"
              width={960}
            />
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-[#f8fbff] py-20">
        <div className="container-shell">
          <SectionHeading
            align="center"
            eyebrow="Why Clients Choose 757 Moving"
            title="The standards behind every local move"
            description="We are deliberate about the moving experience because small mistakes are what make a moving day feel stressful."
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {values.map((value) => (
              <article key={value.title} className="small-card p-6">
                <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
                  {value.title}
                </h2>
                <p className="mt-4 text-base leading-8 text-slate-600">{value.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container-shell py-20">
        <div className="small-card p-8 sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#2c74d8]">
            Local Promise
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Professional movers for Virginia Beach, Norfolk, Chesapeake, Portsmouth,
            Suffolk, and surrounding 757 neighborhoods.
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">
            We are here for homeowners, renters, apartment residents, and families
            who need a local team that responds quickly and moves with care. The
            mission is simple: make it easier to say yes, easier to get scheduled,
            and easier to feel confident about moving day.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ActionLink href="/quote-request">Start My Quote</ActionLink>
            <ActionLink href="/contact" variant="secondary">
              Contact 757 Moving
            </ActionLink>
          </div>
        </div>
      </section>
    </>
  );
}

