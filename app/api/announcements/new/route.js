import connectMongoDb from "@/database/database";
import Announcements from "@/models/announcements";
import { NextResponse } from "next/server";
export async function POST(req) {
    const data = await req.json()
    await connectMongoDb();
    await Announcements.create(data);
    return NextResponse.json({ message: "Announcements inserted" });
}
