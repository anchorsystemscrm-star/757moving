"use client";

import type { FormEvent } from "react";

import Link from "next/link";
import { useState } from "react";

import { ActionLink } from "@/components/action-link";
import { UploadRoomCard } from "@/components/upload-room-card";
import { siteConfig } from "@/lib/site";

type IntakeResponse = {
  ok: boolean;
  message: string;
};

const progressSteps = [
  "Contact + Move Basics",
  "Move Size",
  "Access Details",
  "Room-by-Room Uploads",
  "Confirmation"
] as const;

const uploadSections = [
  {
    title: "Living Room",
    description: "Sofas, accent chairs, coffee tables, media units, lamps, and packed decor.",
    fileField: "livingRoomFiles",
    notesField: "livingRoomNotes"
  },
  {
    title: "Kitchen",
    description: "Cabinets, pantry, small appliances, packed dishes, and dining furniture.",
    fileField: "kitchenFiles",
    notesField: "kitchenNotes"
  },
  {
    title: "Bedroom 1",
    description: "Beds, dressers, nightstands, mirrors, and closet or boxed items.",
    fileField: "bedroom1Files",
    notesField: "bedroom1Notes"
  },
  {
    title: "Bedroom 2",
    description: "Guest rooms, kids rooms, office-bedroom combos, or any overflow furniture.",
    fileField: "bedroom2Files",
    notesField: "bedroom2Notes"
  },
  {
    title: "Bedroom 3",
    description: "Third bedrooms, flex rooms, nursery items, or any remaining sleeping area.",
    fileField: "bedroom3Files",
    notesField: "bedroom3Notes"
  },
  {
    title: "Bathroom",
    description: "Linen storage, vanities, shelving, and anything bulky beyond normal toiletries.",
    fileField: "bathroomFiles",
    notesField: "bathroomNotes"
  },
  {
    title: "Garage / Storage",
    description: "Bins, tools, yard gear, shelving, overflow boxes, and storage items.",
    fileField: "garageStorageFiles",
    notesField: "garageStorageNotes"
  },
  {
    title: "Large Furniture / Appliances",
    description: "Refrigerators, washers, safes, sectionals, treadmills, and oversized pieces.",
    fileField: "largeItemsFiles",
    notesField: "largeItemsNotes"
  },
  {
    title: "Extra Notes",
    description: "Use this final section for anything not covered above or special handling requests.",
    fileField: "extraNotesFiles",
    notesField: "extraNotesText"
  }
] as const;

export function StartQuoteIntakeForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<IntakeResponse | null>(null);
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setFeedback(null);

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/start-quote", {
        method: "POST",
        body: formData
      });

      const result = (await response.json()) as IntakeResponse;

      if (!response.ok) {
        setFeedback(result);
        return;
      }

      setSubmitted(true);
      setFeedback(result);
      form.reset();
    } catch {
      setFeedback({
        ok: false,
        message:
          "Something interrupted the upload. Call now and we can keep the quote process moving."
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="small-card p-8 sm:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#2c74d8]">
          Quote Submitted
        </p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
          Your quote request has been submitted
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">
          We&apos;ll review your move details and reach out shortly. If your move is
          urgent, call now for the fastest response.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <ActionLink href={siteConfig.phoneHref}>Call Now</ActionLink>
          <ActionLink href="/" variant="secondary">
            Back to Homepage
          </ActionLink>
        </div>
      </div>
    );
  }

  return (
    <form
      className="space-y-8"
      encType="multipart/form-data"
      id="quote-intake-form"
      onSubmit={handleSubmit}
    >
      <div className="grid gap-3 md:grid-cols-5">
        {progressSteps.map((step, index) => (
          <div
            key={step}
            className="rounded-2xl border border-slate-200 bg-white px-4 py-4 shadow-sm"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2c74d8]">
              Step {index + 1}
            </p>
            <p className="mt-2 text-sm font-semibold leading-6 text-slate-900">{step}</p>
          </div>
        ))}
      </div>

      <section className="small-card p-6 sm:p-8">
        <div className="border-b border-slate-200 pb-5">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#2c74d8]">
            Step 1
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
            Contact + Move Basics
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Start with the essentials so we can understand both locations, review the route, and prepare a more accurate estimate.
          </p>
        </div>

        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-900" htmlFor="fullName">
              Full Name
            </label>
            <input
              className="field-control"
              id="fullName"
              name="fullName"
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
              className="field-control"
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
              className="field-control"
              id="email"
              name="email"
              placeholder="you@example.com"
              required
              type="email"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-900" htmlFor="preferredMoveDate">
              Preferred Move Date
            </label>
            <input
              className="field-control"
              id="preferredMoveDate"
              name="preferredMoveDate"
              required
              type="date"
            />
          </div>
          <div className="sm:col-span-2">
            <label className="mb-2 block text-sm font-semibold text-slate-900" htmlFor="fromAddress">
              From Address
            </label>
            <input
              className="field-control"
              id="fromAddress"
              name="fromAddress"
              placeholder="Current address"
              required
              type="text"
            />
          </div>
          <div className="sm:col-span-2">
            <label className="mb-2 block text-sm font-semibold text-slate-900" htmlFor="toAddress">
              To Address
            </label>
            <input
              className="field-control"
              id="toAddress"
              name="toAddress"
              placeholder="New address"
              required
              type="text"
            />
          </div>
          <div className="sm:col-span-2 rounded-2xl border border-slate-200 bg-[#fff8f0] p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2c74d8]">
              Property Types
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              Tell us what type of property you are moving out of and into so we can plan the estimate around both ends of the move.
            </p>
            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-900" htmlFor="fromPropertyType">
                  From Property Type
                </label>
                <select
                  className="select-control"
                  defaultValue=""
                  id="fromPropertyType"
                  name="fromPropertyType"
                  required
                >
                  <option disabled value="">
                    Select starting property type
                  </option>
                  <option>Apartment</option>
                  <option>House</option>
                  <option>Townhome</option>
                  <option>Condo</option>
                  <option>Storage Unit</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-900" htmlFor="toPropertyType">
                  To Property Type
                </label>
                <select
                  className="select-control"
                  defaultValue=""
                  id="toPropertyType"
                  name="toPropertyType"
                  required
                >
                  <option disabled value="">
                    Select destination property type
                  </option>
                  <option>Apartment</option>
                  <option>House</option>
                  <option>Townhome</option>
                  <option>Condo</option>
                  <option>Storage Unit</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="small-card p-6 sm:p-8">
        <div className="border-b border-slate-200 pb-5">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#2c74d8]">
            Step 2
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
            Move Size
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Choose the best fit so we can calibrate crew size and estimate pacing.
          </p>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-5">
          {["Studio", "1 Bedroom", "2 Bedroom", "3 Bedroom", "4+ Bedroom"].map((size) => (
            <label
              key={size}
              className="flex cursor-pointer items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-4 text-sm font-semibold text-slate-900 shadow-sm transition hover:border-[#0f4fae]"
            >
              <input className="h-4 w-4 accent-[#0f4fae]" name="moveSize" required type="radio" value={size} />
              <span>{size}</span>
            </label>
          ))}
        </div>
      </section>

      <section className="small-card p-6 sm:p-8">
        <div className="border-b border-slate-200 pb-5">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#2c74d8]">
            Step 3
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
            Access Details
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            These details help us plan time, parking, and equipment before the crew arrives.
          </p>
        </div>

        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          {[
            { label: "Stairs?", name: "stairs" },
            { label: "Elevator?", name: "elevator" },
            { label: "Long walk from parking?", name: "longWalk" }
          ].map((field) => (
            <div key={field.name}>
              <label className="mb-2 block text-sm font-semibold text-slate-900" htmlFor={field.name}>
                {field.label}
              </label>
              <select
                className="select-control"
                defaultValue=""
                id={field.name}
                name={field.name}
                required
              >
                <option disabled value="">
                  Select
                </option>
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>
          ))}

          <div className="sm:col-span-2">
            <label className="mb-2 block text-sm font-semibold text-slate-900" htmlFor="parkingNotes">
              Parking or access notes
            </label>
            <textarea
              className="textarea-control min-h-28"
              id="parkingNotes"
              name="parkingNotes"
              placeholder="Gate codes, loading dock notes, reserved elevator windows, parking distance, or building instructions"
            />
          </div>
        </div>
      </section>

      <section className="small-card p-6 sm:p-8">
        <div className="border-b border-slate-200 pb-5">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#2c74d8]">
            Step 4
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
            Room-by-Room Inventory Uploads
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Add photos, videos, and notes room by room so we can review the move faster and quote it more accurately.
          </p>
        </div>

        <div className="mt-6 grid gap-5 lg:grid-cols-2">
          {uploadSections.map((section) => (
            <UploadRoomCard
              key={section.title}
              description={section.description}
              fileField={section.fileField}
              notesField={section.notesField}
              title={section.title}
            />
          ))}
        </div>
      </section>

      <section className="small-card p-6 sm:p-8">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#2c74d8]">
              Step 5
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
              Submit Your Quote Request
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Once submitted, we review the move details, photos, and any access notes, then follow up with next steps.
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-500">
              Need a faster answer? Call{" "}
              <a className="font-semibold text-[#0f4fae]" href={siteConfig.phoneHref}>
                {siteConfig.phoneDisplay}
              </a>
              .
            </p>
          </div>
          <button
            className="button-base button-primary px-6"
            disabled={isSubmitting}
            type="submit"
          >
            {isSubmitting ? "Submitting quote..." : "Submit Quote Request"}
          </button>
        </div>

        {feedback && !feedback.ok ? (
          <div className="mt-5 rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-900">
            {feedback.message}
          </div>
        ) : null}

        <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm leading-7 text-slate-600">
          Uploads are organized room by room to make reviewing your move faster. If you prefer, you can also call now or email videos to{" "}
          <a className="font-semibold text-[#0f4fae]" href={siteConfig.emailHref}>
            {siteConfig.email}
          </a>
          .
        </div>

        <div className="mt-5 text-sm text-slate-500">
          <Link className="font-semibold text-[#0f4fae]" href="/">
            Back to homepage
          </Link>
        </div>
      </section>
    </form>
  );
}
