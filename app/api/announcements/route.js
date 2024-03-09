import connectMongoDb from "@/database/database";
import Announcements from "@/models/announcements";
import { NextResponse } from "next/server";

export async function POST(req) {
  const data = await req.json();
  await connectMongoDb();
  await Announcements.create(data);
  return NextResponse.json(
    { message: "Announcement inserted" },
    { status: 201 }
  );
}

export async function GET() {
  await connectMongoDb();
  const announcements = await Announcements.find();
  return NextResponse.json({ announcements });
}

export async function DELETE(req) {
  const id = req.nextUrl.searchParams.get("id");

  await connectMongoDb();
  await Announcements.findByIdAndDelete(id);
  return NextResponse.json(
    { message: "Announcement was deleted" },
    { status: 200 }
  );
}
