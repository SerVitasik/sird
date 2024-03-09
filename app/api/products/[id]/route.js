import connectMongoDb from "@/database/database";
import Products from "@/models/products";
import { NextResponse } from "next/server";

export async function PUT(req, { params }) {
  const id = params.id;
  const updatedProducts = await req.json();
  await connectMongoDb();
  await Products.findByIdAndUpdate(id, updatedProducts);
  return NextResponse.json({ message: "Products updated" }, { status: 200 });
}

export async function GET(req, { params }) {
  const id = params.id;
  await connectMongoDb();
  const products = await Products.findOne({ _id: id });
  return NextResponse.json({ products }, { status: 200 });
}
