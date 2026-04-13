import { NextResponse } from "next/server";

const uploadFields = [
  "livingRoomFiles",
  "kitchenFiles",
  "bedroom1Files",
  "bedroom2Files",
  "bedroom3Files",
  "bathroomFiles",
  "garageStorageFiles",
  "largeItemsFiles",
  "extraNotesFiles"
] as const;

function valueOf(formData: FormData, key: string) {
  return String(formData.get(key) ?? "").trim();
}

export async function POST(request: Request) {
  const formData = await request.formData();

  const requiredFields = [
    valueOf(formData, "fullName"),
    valueOf(formData, "phone"),
    valueOf(formData, "email"),
    valueOf(formData, "preferredMoveDate"),
    valueOf(formData, "fromAddress"),
    valueOf(formData, "toAddress"),
    valueOf(formData, "propertyType"),
    valueOf(formData, "moveSize"),
    valueOf(formData, "stairs"),
    valueOf(formData, "elevator"),
    valueOf(formData, "longWalk")
  ];

  if (requiredFields.some((field) => !field)) {
    return NextResponse.json(
      {
        ok: false,
        message:
          "Please complete the required move basics, size, and access fields before submitting."
      },
      { status: 400 }
    );
  }

  const uploads = uploadFields.map((field) => ({
    field,
    files: formData
      .getAll(field)
      .filter((entry): entry is File => entry instanceof File && entry.size > 0)
      .map((file) => ({
        name: file.name,
        type: file.type,
        size: file.size
      }))
  }));

  console.info("New structured quote intake", {
    contact: {
      fullName: valueOf(formData, "fullName"),
      phone: valueOf(formData, "phone"),
      email: valueOf(formData, "email")
    },
    moveBasics: {
      preferredMoveDate: valueOf(formData, "preferredMoveDate"),
      fromAddress: valueOf(formData, "fromAddress"),
      toAddress: valueOf(formData, "toAddress"),
      propertyType: valueOf(formData, "propertyType"),
      moveSize: valueOf(formData, "moveSize")
    },
    access: {
      stairs: valueOf(formData, "stairs"),
      elevator: valueOf(formData, "elevator"),
      longWalk: valueOf(formData, "longWalk"),
      parkingNotes: valueOf(formData, "parkingNotes")
    },
    uploads
  });

  return NextResponse.json({
    ok: true,
    message: "Your quote request has been submitted."
  });
}
