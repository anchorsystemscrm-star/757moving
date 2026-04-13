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
    <form className="small-card p-6 sm:p-8" onSubmit={handleSubmit}>
      <div className="grid gap-4 sm:grid-cols-2">
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
        {isSubmitting ? "Sending..." : "Get My Quote"}
      </button>
    </form>
  );
}
