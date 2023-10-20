import connectMongoDb from "@/database/database";
import News from "@/models/news";
import { NextResponse } from "next/server";

export async function POST(req) {
    const data = await req.json()
    await connectMongoDb();
    await News.create(data);
    return NextResponse.json({ message: "News inserted" }, {status: 201});
}


export async function GET() {
    await connectMongoDb();
    const news = await News.find();
    return NextResponse.json({news});
}

export async function DELETE(req) {
    const id = req.nextUrl.searchParams.get('id');

    await connectMongoDb();
    await News.findByIdAndDelete(id);
    return NextResponse.json({message: "News was deleted"}, {status: 200})
}