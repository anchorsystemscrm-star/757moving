"use client";

import type { FormEvent } from "react";

import { useState } from "react";

import { siteConfig } from "@/lib/site";

type QuoteResponse = {
  ok: boolean;
  message: string;
  referenceId?: string;
};

export function QuoteForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<QuoteResponse | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setFeedback(null);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      const result = (await response.json()) as QuoteResponse;
      setFeedback(result);

      if (response.ok) {
        form.reset();
      }
    } catch {
      setFeedback({
        ok: false,
        message:
          "Something interrupted the request. Please call us directly and we will get you scheduled."
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="small-card p-6 sm:p-8" onSubmit={handleSubmit}>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label className="mb-2 block text-sm font-semibold text-slate-900" htmlFor="name">
            Name
          </label>
          <input
            className="h-12 w-full rounded-lg border border-slate-200 px-4 text-sm text-slate-900 outline-none transition focus:border-[#2c74d8]"
            id="name"
            name="name"
            placeholder="Your full name"
            required
            type="text"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-900" htmlFor="phone">
            Phone
          </label>
          <input
            className="h-12 w-full rounded-lg border border-slate-200 px-4 text-sm text-slate-900 outline-none transition focus:border-[#2c74d8]"
            id="phone"
            name="phone"
            placeholder="Best callback number"
            required
            type="tel"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-900" htmlFor="email">
            Email
          </label>
          <input
            className="h-12 w-full rounded-lg border border-slate-200 px-4 text-sm text-slate-900 outline-none transition focus:border-[#2c74d8]"
            id="email"
            name="email"
            placeholder="you@example.com"
            required
            type="email"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-900" htmlFor="moveDate">
            Move date
          </label>
          <input
            className="h-12 w-full rounded-lg border border-slate-200 px-4 text-sm text-slate-900 outline-none transition focus:border-[#2c74d8]"
            id="moveDate"
            name="moveDate"
            required
            type="date"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-900" htmlFor="propertyType">
            Property type
          </label>
          <select
            className="h-12 w-full rounded-lg border border-slate-200 px-4 text-sm text-slate-900 outline-none transition focus:border-[#2c74d8]"
            defaultValue=""
            id="propertyType"
            name="propertyType"
            required
          >
            <option disabled value="">
              Select property type
            </option>
            <option>Apartment</option>
            <option>House</option>
            <option>Townhome</option>
            <option>Condo</option>
            <option>Storage Unit</option>
            <option>Other</option>
          </select>
        </div>

        <div className="sm:col-span-2">
          <label className="mb-2 block text-sm font-semibold text-slate-900" htmlFor="fromAddress">
            From address
          </label>
          <input
            className="h-12 w-full rounded-lg border border-slate-200 px-4 text-sm text-slate-900 outline-none transition focus:border-[#2c74d8]"
            id="fromAddress"
            name="fromAddress"
            placeholder="Current pickup address"
            required
            type="text"
          />
        </div>

        <div className="sm:col-span-2">
          <label className="mb-2 block text-sm font-semibold text-slate-900" htmlFor="toAddress">
            To address
          </label>
          <input
            className="h-12 w-full rounded-lg border border-slate-200 px-4 text-sm text-slate-900 outline-none transition focus:border-[#2c74d8]"
            id="toAddress"
            name="toAddress"
            placeholder="Delivery address"
            required
            type="text"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-900" htmlFor="bedrooms">
            Bedrooms
          </label>
          <select
            className="h-12 w-full rounded-lg border border-slate-200 px-4 text-sm text-slate-900 outline-none transition focus:border-[#2c74d8]"
            defaultValue=""
            id="bedrooms"
            name="bedrooms"
            required
          >
            <option disabled value="">
              Select size
            </option>
            <option>Studio</option>
            <option>1 Bedroom</option>
            <option>2 Bedrooms</option>
            <option>3 Bedrooms</option>
            <option>4+ Bedrooms</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-900" htmlFor="largeItems">
            Large items
          </label>
          <input
            className="h-12 w-full rounded-lg border border-slate-200 px-4 text-sm text-slate-900 outline-none transition focus:border-[#2c74d8]"
            id="largeItems"
            name="largeItems"
            placeholder="Piano, safe, treadmill, etc."
            type="text"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-900" htmlFor="stairs">
            Stairs
          </label>
          <select
            className="h-12 w-full rounded-lg border border-slate-200 px-4 text-sm text-slate-900 outline-none transition focus:border-[#2c74d8]"
            defaultValue="No"
            id="stairs"
            name="stairs"
          >
            <option>No</option>
            <option>Yes</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-900" htmlFor="elevator">
            Elevator
          </label>
          <select
            className="h-12 w-full rounded-lg border border-slate-200 px-4 text-sm text-slate-900 outline-none transition focus:border-[#2c74d8]"
            defaultValue="No"
            id="elevator"
            name="elevator"
          >
            <option>No</option>
            <option>Yes</option>
          </select>
        </div>

        <div className="sm:col-span-2">
          <label className="mb-2 block text-sm font-semibold text-slate-900" htmlFor="notes">
            Notes
          </label>
          <textarea
            className="min-h-32 w-full rounded-lg border border-slate-200 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#2c74d8]"
            id="notes"
            name="notes"
            placeholder="Timing notes, access instructions, inventory highlights, or anything else we should know"
          />
        </div>
      </div>

      <div className="mt-6 rounded-2xl border border-[#2c74d8]/15 bg-[#f4f8ff] p-4 text-sm leading-6 text-slate-700">
        Upload photos/videos for faster, more accurate quotes. After you submit,
        send them to{" "}
        <a className="font-semibold text-[#123a72]" href={siteConfig.emailHref}>
          {siteConfig.email}
        </a>{" "}
        and include your name in the subject line.
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
          <p className="font-semibold">{feedback.message}</p>
          {feedback.referenceId ? (
            <p className="mt-1 text-xs uppercase tracking-[0.18em] text-current/75">
              Reference {feedback.referenceId}
            </p>
          ) : null}
        </div>
      ) : null}

      <button
        className="mt-6 inline-flex h-12 w-full items-center justify-center rounded-lg bg-[#123a72] px-5 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(18,58,114,0.18)] transition hover:bg-[#0f315f] disabled:cursor-not-allowed disabled:opacity-70"
        disabled={isSubmitting}
        type="submit"
      >
        {isSubmitting ? "Sending your request..." : "Request My Quote"}
      </button>
    </form>
  );
}

