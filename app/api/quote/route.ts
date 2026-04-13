import { randomUUID } from "node:crypto";

import { NextResponse } from "next/server";

type QuotePayload = {
  name?: string;
  phone?: string;
  email?: string;
  moveDate?: string;
  fromAddress?: string;
  toAddress?: string;
  propertyType?: string;
  bedrooms?: string;
};

export async function POST(request: Request) {
  const payload = (await request.json()) as QuotePayload;

  const requiredFields = [
    payload.name,
    payload.phone,
    payload.email,
    payload.moveDate,
    payload.fromAddress,
    payload.toAddress,
    payload.propertyType,
    payload.bedrooms
  ];

  if (requiredFields.some((value) => !value)) {
    return NextResponse.json(
      {
        ok: false,
        message: "Please fill out the required quote fields so we can review the move."
      },
      { status: 400 }
    );
  }

  const referenceId = randomUUID().slice(0, 8).toUpperCase();

  console.info("New quote request", {
    referenceId,
    payload
  });

  return NextResponse.json({
    ok: true,
    message: "Thanks. Your quote request is in and we will follow up shortly.",
    referenceId
  });
}

