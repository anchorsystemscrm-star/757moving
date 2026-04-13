import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  phone?: string;
  email?: string;
  message?: string;
};

export async function POST(request: Request) {
  const payload = (await request.json()) as ContactPayload;

  if (!payload.name || !payload.phone || !payload.email || !payload.message) {
    return NextResponse.json(
      {
        ok: false,
        message: "Please complete all required fields before sending your message."
      },
      { status: 400 }
    );
  }

  console.info("New contact lead", payload);

  return NextResponse.json({
    ok: true,
    message: "Thanks. Your message has been sent and our team will follow up shortly."
  });
}

