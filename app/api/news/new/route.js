import connectMongoDb from "@/database/database";
import News from "@/models/news";
import { NextResponse } from "next/server";
export async function POST(req) {
    const data = await req.json()
    await connectMongoDb();
    await News.create(data);
    return NextResponse.json({ message: "News inserted" });
}
