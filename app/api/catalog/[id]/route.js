import connectMongoDb from "@/database/database";
import Catalog from "@/models/catalog";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const id = params.id;
  await connectMongoDb();
  const catalog = await Catalog.findOne({ _id: id });
  return NextResponse.json({ catalog }, { status: 200 });
}
