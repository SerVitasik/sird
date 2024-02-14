import connectMongoDb from "@/database/database";
import Products from "@/models/products";
import { NextResponse } from "next/server";
export async function POST(req) {
    const data = await req.json()
    await connectMongoDb();
    await Products.create(data);
    return NextResponse.json({ message: "Products inserted" });
}
