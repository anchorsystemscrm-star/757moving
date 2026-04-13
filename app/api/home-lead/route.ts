import { NextResponse } from "next/server";

type HomeLeadPayload = {
  name?: string;
  phone?: string;
  moveDate?: string;
  message?: string;
};

export async function POST(request: Request) {
  const payload = (await request.json()) as HomeLeadPayload;

  if (!payload.name || !payload.phone || !payload.message) {
    return NextResponse.json(
      {
        ok: false,
        message: "Please enter your name, phone, and a quick note so we can follow up."
      },
      { status: 400 }
    );
  }

  console.info("New homepage lead", payload);

  return NextResponse.json({
    ok: true,
    message: "Thanks. We have your details and will reach out with next steps shortly."
  });
}

