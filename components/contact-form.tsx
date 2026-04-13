"use client";

import type { FormEvent } from "react";

import { useState } from "react";

type ContactResponse = {
  ok: boolean;
  message: string;
};

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<ContactResponse | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setFeedback(null);

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(Object.fromEntries(formData.entries()))
      });

      const result = (await response.json()) as ContactResponse;
      setFeedback(result);

      if (response.ok) {
        form.reset();
      }
    } catch {
      setFeedback({
        ok: false,
        message:
          "Something went wrong while sending your note. Please call us directly and we will help right away."
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="small-card p-6 sm:p-8" onSubmit={handleSubmit}>
      <div className="grid gap-5">
        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-900" htmlFor="contact-name">
            Name
          </label>
          <input
            className="field-control"
            id="contact-name"
            name="name"
            placeholder="Your name"
            required
            type="text"
          />
        </div>
        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-900" htmlFor="contact-phone">
            Phone
          </label>
          <input
            className="field-control"
            id="contact-phone"
            name="phone"
            placeholder="Best callback number"
            required
            type="tel"
          />
        </div>
        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-900" htmlFor="contact-email">
            Email
          </label>
          <input
            className="field-control"
            id="contact-email"
            name="email"
            placeholder="you@example.com"
            required
            type="email"
          />
        </div>
        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-900" htmlFor="contact-message">
            Message
          </label>
          <textarea
            className="textarea-control min-h-32"
            id="contact-message"
            name="message"
            placeholder="Tell us what you need help with"
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
        {isSubmitting ? "Sending your message..." : "Send Message"}
      </button>
    </form>
  );
}
