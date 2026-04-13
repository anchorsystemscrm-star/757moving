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
            className="h-12 w-full rounded-lg border border-slate-200 px-4 text-sm text-slate-900 outline-none transition focus:border-[#2c74d8]"
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
            className="h-12 w-full rounded-lg border border-slate-200 px-4 text-sm text-slate-900 outline-none transition focus:border-[#2c74d8]"
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
            className="h-12 w-full rounded-lg border border-slate-200 px-4 text-sm text-slate-900 outline-none transition focus:border-[#2c74d8]"
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
            className="min-h-32 w-full rounded-lg border border-slate-200 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#2c74d8]"
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
        className="mt-6 inline-flex h-12 w-full items-center justify-center rounded-lg bg-[#123a72] px-5 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(18,58,114,0.18)] transition hover:bg-[#0f315f] disabled:cursor-not-allowed disabled:opacity-70"
        disabled={isSubmitting}
        type="submit"
      >
        {isSubmitting ? "Sending your message..." : "Send Message"}
      </button>
    </form>
  );
}

