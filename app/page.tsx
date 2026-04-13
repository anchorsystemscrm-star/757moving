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

const stats = [
  { label: "Fast scheduling", value: "Same-day and next-day options" },
  { label: "Service area", value: "Virginia Beach to Suffolk" },
  { label: "Crew standard", value: "Professional local movers" }
] as const;

const trustPoints = [
  "Same-Day Availability",
  "Fast Quote Turnaround",
  "Apartments, Homes & Short-Notice Moves"
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

        <div className="container-shell relative z-10 flex min-h-[82svh] items-center py-16">
          <div className="max-w-3xl text-white">
            <div className="inline-flex rounded-2xl border border-white/15 bg-white/10 px-4 py-3 shadow-[0_20px_40px_rgba(15,23,42,0.18)] backdrop-blur-md">
              <Image
                src="/757moving-logo.png"
                alt="757 Moving logo"
                width={164}
                height={52}
                priority
                sizes="(max-width: 640px) 136px, 164px"
                className="h-auto w-[136px] object-contain sm:w-[164px]"
              />
            </div>
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.26em] text-[#b8d2ff]">
              Local moving across Virginia Beach, Norfolk, and the 757
            </p>
            <h1 className="mt-5 text-5xl font-semibold tracking-tight sm:text-6xl">
              Local Movers in Hampton Roads — Fast Quotes, Reliable Crews, Short-Notice Availability
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">
              Book trusted local movers for apartments, homes, and same-day moves
              across the 757.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ActionLink href="/quote-request">Get Free Quote</ActionLink>
              <ActionLink href={siteConfig.phoneHref} variant="secondary">
                Call Now
              </ActionLink>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/15 bg-white/8 px-4 py-4 backdrop-blur-md"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#b8d2ff]">
                    {stat.label}
                  </p>
                  <p className="mt-2 text-sm font-medium text-white">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="warm-section border-b border-slate-200 py-5">
        <div className="container-shell grid gap-4 sm:grid-cols-3">
          {trustPoints.map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-[rgba(255,250,243,0.86)] px-4 py-4"
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#0f4fae] text-sm font-semibold text-white">
                ✓
              </span>
              <p className="text-sm font-semibold text-slate-800">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="tint-section border-y border-slate-200 py-20">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Services"
            title="Local moving services built for busy households and short timelines"
            description="Every service is designed to remove friction, speed up scheduling, and keep your move feeling organized from the first call."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <article key={service.name} className="small-card p-6">
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
            <ActionLink href="/quote-request">Get Free Quote</ActionLink>
            <ActionLink href={siteConfig.phoneHref} variant="secondary">
              Call Now
            </ActionLink>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-950 py-20 text-white">
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

      <section className="warm-section border-y border-slate-200 py-20">
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

      <section className="border-y border-slate-200 bg-[linear-gradient(180deg,_#fffaf4_0%,_#f7f1e8_100%)] py-20">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading
              eyebrow="Fast Quote Form"
              title="Get pricing started without a long form"
              description="If you just want a quick callback, send the basics here and we will reach out fast. Great for same-day moves, local apartments, and short-notice scheduling."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="small-card p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2c74d8]">
                  Local crews
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Movers who know the 757 area and show up ready to work.
                </p>
              </div>
              <div className="small-card p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2c74d8]">
                  Clear communication
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Fast follow-up, realistic timing, and straightforward next steps.
                </p>
              </div>
              <div className="small-card p-5">
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

      <section className="tint-section border-y border-slate-200 py-20">
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

      <section className="warm-section border-y border-slate-200 py-20">
        <div className="container-shell">
          <SectionHeading
            align="center"
            eyebrow="Testimonials"
            title="Trusted by local clients who needed movers to show up and deliver"
            description="The work matters, but so does how the day feels. Clear communication and calm execution are part of the service."
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <article key={testimonial.name} className="small-card p-6">
                <p className="text-base leading-8 text-slate-700">“{testimonial.quote}”</p>
                <div className="mt-6 border-t border-slate-200 pt-5">
                  <p className="text-sm font-semibold text-slate-950">{testimonial.name}</p>
                  <p className="text-sm text-slate-500">{testimonial.location}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-[linear-gradient(180deg,_#fffdf8_0%,_#f7f2eb_100%)] py-20">
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

      <section className="container-shell py-20">
        <div className="overflow-hidden rounded-[32px] bg-slate-950 px-6 py-10 text-white shadow-[0_32px_80px_rgba(15,23,42,0.18)] sm:px-10 sm:py-14">
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
              <ActionLink href="/quote-request">Get Free Quote</ActionLink>
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
