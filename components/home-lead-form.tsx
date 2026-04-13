"use client";

import type { FormEvent } from "react";

import { useState } from "react";

type LeadResponse = {
  ok: boolean;
  message: string;
};

export function HomeLeadForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<LeadResponse | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setFeedback(null);

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/home-lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(Object.fromEntries(formData.entries()))
      });

      const result = (await response.json()) as LeadResponse;
      setFeedback(result);

      if (response.ok) {
        form.reset();
      }
    } catch {
      setFeedback({
        ok: false,
        message: "Something interrupted the form. Call now and we can quote the move directly."
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form
      className="small-card bg-[linear-gradient(180deg,_rgba(255,255,255,0.97)_0%,_rgba(251,245,236,0.96)_100%)] p-6 sm:p-8"
      onSubmit={handleSubmit}
    >
      <div className="rounded-[20px] border border-slate-200/80 bg-white/80 p-5 shadow-[0_18px_40px_rgba(15,23,42,0.06)]">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#2568c2]">
          Quick callback request
        </p>
        <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
          Send the basics and we&apos;ll call you back fast
        </h3>
        <p className="mt-3 text-sm leading-7 text-slate-600">
          No long form here, just the details we need to help price the move,
          confirm availability, and get the next step handled.
        </p>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-900" htmlFor="lead-name">
            Name
          </label>
          <input
            className="field-control"
            id="lead-name"
            name="name"
            placeholder="Your name"
            required
            type="text"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-900" htmlFor="lead-phone">
            Phone
          </label>
          <input
            className="field-control"
            id="lead-phone"
            name="phone"
            placeholder="Best callback number"
            required
            type="tel"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-900" htmlFor="lead-date">
            Move Date
          </label>
          <input
            className="field-control"
            id="lead-date"
            name="moveDate"
            type="date"
          />
        </div>

        <div className="sm:col-span-2">
          <label className="mb-2 block text-sm font-semibold text-slate-900" htmlFor="lead-message">
            Short message
          </label>
          <textarea
            className="textarea-control min-h-28"
            id="lead-message"
            name="message"
            placeholder="Apartment, home, same-day move, service area, or anything we should know"
            required
          />
        </div>
      </div>

      {feedback ? (
        <div
          className={[
            "mt-5 rounded-2xl border px-4 py-3 text-sm",
            feedback.ok
              ? "border-emerald-200 bg-emerald-50 text-emerald-900"
              : "border-rose-200 bg-rose-50 text-rose-900"
          ].join(" ")}
        >
          {feedback.message}
        </div>
      ) : null}

      <button
        className="button-base button-primary mt-6 w-full"
        disabled={isSubmitting}
        type="submit"
      >
        {isSubmitting ? "Sending..." : "Get My Moving Quote"}
      </button>

      <p className="mt-4 text-center text-sm text-slate-500">
        Fast response - usually within 5-10 minutes during business hours.
      </p>
    </form>
  );
}
