import connectMongoDb from "@/database/database";
import Catalog from "@/models/catalog";
import { NextResponse } from "next/server";

export async function POST(req) {
  const data = await req.json();
  await connectMongoDb();
  await Catalog.create(data);
  return NextResponse.json({ message: "Catalog inserted" }, { status: 201 });
}

export async function GET() {
  await connectMongoDb();
  const catalog = await Catalog.find();
  return NextResponse.json({ catalog });
}

export async function DELETE(req) {
  const id = req.nextUrl.searchParams.get("id");

  await connectMongoDb();
  await Catalog.findByIdAndDelete(id);
  return NextResponse.json({ message: "Catalog was deleted" }, { status: 200 });
}
