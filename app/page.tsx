import Image from "next/image";

import { ActionLink } from "@/components/action-link";
import { FaqSchema } from "@/components/faq-schema";
import { HomeLeadForm } from "@/components/home-lead-form";
import { SectionHeading } from "@/components/section-heading";
import { buildMetadata, faqItems, services, siteConfig, testimonials } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Fast, Reliable Movers in the 757 Area",
  description:
    "Book trusted local movers for apartments, homes, and short-notice moves across Hampton Roads. Fast scheduling, premium communication, and quote requests built to convert.",
  path: "/"
});

const trustPoints = [
  "Same-Day & Next-Day Availability",
  "Fast Quote Turnaround",
  "Apartments, Homes & Short-Notice Moves",
  "Local 757 Crews",
  "Clear Communication",
  "Fast Scheduling"
] as const;

const whyChooseUs = [
  "Local crews that know Hampton Roads routes and pacing",
  "Clear communication from first call to final unload",
  "Flexible scheduling for urgent and short-notice moves",
  "Straightforward service built around speed and trust"
] as const;

const steps = [
  {
    title: "Tell us about the move",
    description:
      "Share the addresses, timeline, and move details. We keep the quote request fast and easy."
  },
  {
    title: "Get a clear plan",
    description:
      "We confirm logistics, callout items, and scheduling so you know exactly what to expect."
  },
  {
    title: "Move with confidence",
    description:
      "Your crew arrives ready, communicates clearly, and keeps the day moving without unnecessary delays."
  }
] as const;

export default function HomePage() {
  return (
    <>
      <FaqSchema items={faqItems} />

      <section className="relative isolate overflow-hidden border-b border-slate-200">
        <div className="absolute inset-0">
          <Image
            alt="Bright modern home exterior in Hampton Roads"
            className="object-cover object-center"
            fill
            priority
            sizes="100vw"
            src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1800&q=80"
          />
          <div className="hero-shade absolute inset-0" />
        </div>

        <div className="container-shell relative z-10 flex min-h-[80svh] items-center py-16">
          <div className="max-w-3xl text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.26em] text-[#b8d2ff]">
              Local moving across Virginia Beach, Norfolk, and the 757
            </p>
            <h1 className="mt-5 text-5xl font-semibold tracking-tight sm:text-6xl">
              Fast, Reliable Movers in the 757 — Get a Quote in Minutes
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">
              Same-day and next-day moves available. Book trusted local movers for
              apartments, homes, and short-notice moves across Hampton Roads.
            </p>
            <div className="mt-6 inline-flex rounded-full border border-white/12 bg-white/8 px-4 py-2 text-sm font-medium text-slate-100 backdrop-blur-md">
              Limited same-day availability — call now to lock in your spot
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <ActionLink className="sm:min-w-[230px]" href="/quote-request">
                Get My Moving Quote
              </ActionLink>
              <ActionLink
                className="border-white/14 bg-white/7 px-5 text-white shadow-[0_12px_30px_rgba(8,18,35,0.18)] hover:border-white/24 hover:bg-white/12 hover:text-white sm:min-w-[220px]"
                href={siteConfig.phoneHref}
                variant="secondary"
              >
                Call Now (Fastest Response)
              </ActionLink>
            </div>
            <p className="mt-5 text-sm leading-7 text-slate-200">
              Or call now for fastest service:{" "}
              <a
                className="font-semibold text-white underline decoration-white/35 underline-offset-4 transition hover:decoration-white"
                href={siteConfig.phoneHref}
              >
                {siteConfig.phoneDisplay}
              </a>
            </p>
          </div>
        </div>
      </section>

      <section className="warm-section border-b border-slate-200 py-7">
        <div className="container-shell">
          <div className="small-card bg-[linear-gradient(180deg,_rgba(255,252,248,0.98)_0%,_rgba(245,237,227,0.98)_100%)] p-4 sm:p-5">
            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-6">
              {trustPoints.map((item) => (
                <div
                  key={item}
                  className="flex min-h-[76px] items-center gap-3 rounded-[18px] border border-slate-200/90 bg-white/80 px-4 py-4"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#1d5daf] text-sm font-semibold text-white shadow-[0_12px_24px_rgba(29,93,175,0.24)]">
                    ✓
                  </span>
                  <p className="text-sm font-semibold leading-6 text-slate-800">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="tint-section border-y border-slate-200 py-24">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Services"
            title="Local moving services built for busy households and short timelines"
            description="Every service is designed to remove friction, speed up scheduling, and keep your move feeling organized from the first call."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.name}
                className="small-card bg-[linear-gradient(180deg,_rgba(255,252,248,0.96)_0%,_rgba(249,244,236,0.96)_100%)] p-6"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2c74d8]">
                  {service.name}
                </p>
                <p className="mt-4 text-lg font-semibold tracking-tight text-slate-950">
                  {service.blurb}
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600">{service.details}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <ActionLink href="/quote-request">Get My Quote</ActionLink>
            <ActionLink href={siteConfig.phoneHref} variant="secondary">
              Call Now
            </ActionLink>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-950 py-24 text-white">
        <div className="container-shell">
          <SectionHeading
            align="center"
            eyebrow="How It Works"
            title="A simple three-step move process"
            description="We keep the booking flow quick, the communication clear, and the moving day steady."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {steps.map((step, index) => (
              <article
                key={step.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-6"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#2c74d8] text-lg font-semibold text-white">
                  {index + 1}
                </div>
                <h3 className="mt-6 text-2xl font-semibold tracking-tight">{step.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="warm-section border-y border-slate-200 py-24">
        <div className="container-shell">
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <SectionHeading
                eyebrow="Why Choose Us"
                title="A premium moving experience without the usual friction"
                description="757 Moving is built around the parts clients care about most: fast answers, dependable arrival windows, respectful crews, and a move that feels professionally managed."
              />
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {whyChooseUs.map((item) => (
                  <div key={item} className="small-card p-5">
                    <p className="text-base font-semibold text-slate-900">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative overflow-hidden rounded-[28px] border border-slate-200 shadow-[0_30px_80px_rgba(15,23,42,0.12)]">
              <Image
                alt="Packed boxes in a bright home ready for moving day"
                className="h-full w-full object-cover"
                height={820}
                sizes="(min-width: 1024px) 42rem, 100vw"
                src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80"
                width={960}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-[linear-gradient(180deg,_#fff8f1_0%,_#f2e9dd_100%)] py-24">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading
              eyebrow="Fast Quote Form"
              title="Get Your Moving Quote — We’ll Call You Within Minutes"
              description="Send the basics and we’ll follow up quickly to help you price your move, confirm availability, and get the next step handled."
            />
            <p className="mt-5 text-sm font-semibold text-[#184784]">
              Fast response — usually within 5-10 minutes during business hours.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="small-card bg-white/90 p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2c74d8]">
                  Local crews
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Movers who know the 757 area and show up ready to work.
                </p>
              </div>
              <div className="small-card bg-white/90 p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2c74d8]">
                  Clear communication
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Fast follow-up, realistic timing, and straightforward next steps.
                </p>
              </div>
              <div className="small-card bg-white/90 p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2c74d8]">
                  Flexible scheduling
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Built for homes, apartments, and urgent local moves.
                </p>
              </div>
            </div>
          </div>
          <div>
            <HomeLeadForm />
          </div>
        </div>
      </section>

      <section className="tint-section border-y border-slate-200 py-24">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Service Area"
            title="Serving the Hampton Roads and 757 area"
            description="We focus on local moves across the cities where fast scheduling and dependable crews matter most."
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
          <div className="mt-8">
            <ActionLink href="/service-area" variant="secondary">
              Explore Service Area
            </ActionLink>
          </div>
        </div>
      </section>

      <section className="warm-section border-y border-slate-200 py-24">
        <div className="container-shell">
          <SectionHeading
            align="center"
            eyebrow="Testimonials"
            title="Trusted by local clients who needed movers to show up and deliver"
            description="The work matters, but so does how the day feels. Clear communication and calm execution are part of the service."
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <article
                key={testimonial.name}
                className="small-card bg-[linear-gradient(180deg,_rgba(255,252,248,0.98)_0%,_rgba(247,241,233,0.96)_100%)] p-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="inline-flex rounded-full border border-slate-200 bg-white/80 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#2568c2]">
                    Hampton Roads move
                  </div>
                  <span className="text-4xl font-semibold leading-none text-[#b7cdef]">“</span>
                </div>
                <p className="mt-5 text-base leading-8 text-slate-700">{testimonial.quote}”</p>
                <div className="mt-6 border-t border-slate-200 pt-5">
                  <p className="text-base font-semibold text-slate-950">{testimonial.name}</p>
                  <p className="mt-1 text-sm font-medium text-slate-500">
                    Local move in {testimonial.location}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-[linear-gradient(180deg,_#fffdf8_0%,_#f4ede2_100%)] py-24">
        <div className="container-shell">
          <SectionHeading
            eyebrow="FAQ"
            title="Answers to common moving questions"
            description="Quick answers for scheduling, service areas, and how to speed up your estimate."
          />
          <div className="mt-10 space-y-4">
            {faqItems.map((item) => (
              <details key={item.question} className="small-card p-6">
                <summary className="cursor-pointer list-none text-lg font-semibold text-slate-950">
                  {item.question}
                </summary>
                <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="container-shell py-24">
        <div className="overflow-hidden rounded-[32px] bg-[linear-gradient(180deg,_#10233f_0%,_#0c1b33_100%)] px-6 py-10 text-white shadow-[0_32px_80px_rgba(15,23,42,0.18)] sm:px-10 sm:py-14">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#7fb0ff]">
            Ready when you are
          </p>
          <div className="mt-4 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Ready to book your move?
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-300">
                Call now for immediate scheduling help or send a quote request and
                get the process moving fast.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <ActionLink href="/quote-request">Get My Quote</ActionLink>
              <ActionLink href={siteConfig.phoneHref} variant="secondary">
                Call Now
              </ActionLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
