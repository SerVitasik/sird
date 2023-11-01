import connectMongoDb from "@/database/database";
import Announcements from "@/models/announcements";
import { NextResponse } from "next/server";

export async function PUT(req, {params}) {
    const id = params.id;
    const updatedAnnouncements = await req.json();
    await connectMongoDb();
    await Announcements.findByIdAndUpdate(id, updatedAnnouncements);
    return NextResponse.json({ message: "Announcements updated" }, {status: 200});
}

export async function GET(req, {params}) {
    const id = params.id;
    await connectMongoDb();
    const announcements = await Announcements.findOne({_id: id});
    return NextResponse.json({announcements}, {status: 200});
}