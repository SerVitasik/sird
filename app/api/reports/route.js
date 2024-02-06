import connectMongoDb from "@/database/database";
import Reports from "@/models/reports";
import { NextResponse } from "next/server";

export async function POST(req) {
    const data = await req.json()
    await connectMongoDb();
    await Reports.create(data);
    return NextResponse.json({ message: "Report inserted" }, {status: 201});
}


export async function GET() {
    await connectMongoDb();
    const reports = await Reports.find();
    return NextResponse.json({reports});
}

export async function DELETE(req) {
    const id = req.nextUrl.searchParams.get('id');

    await connectMongoDb();
    await Reports.findByIdAndDelete(id);
    return NextResponse.json({message: "Report was deleted"}, {status: 200})
}