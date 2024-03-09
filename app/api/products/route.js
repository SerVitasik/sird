import connectMongoDb from "@/database/database";
import Products from "@/models/products";
import { NextResponse } from "next/server";

export async function POST(req) {
  const data = await req.json();
  await connectMongoDb();
  await Products.create(data);
  return NextResponse.json({ message: "Products inserted" }, { status: 201 });
}

export async function GET() {
  await connectMongoDb();
  const products = await Products.find();
  return NextResponse.json({ products });
}

export async function DELETE(req) {
  const id = req.nextUrl.searchParams.get("id");

  await connectMongoDb();
  await Products.findByIdAndDelete(id);
  return NextResponse.json(
    { message: "Products was deleted" },
    { status: 200 }
  );
}
