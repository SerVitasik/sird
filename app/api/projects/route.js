import connectMongoDb from "@/database/database";
import Projects from "@/models/projects";
import { NextResponse } from "next/server";

export async function POST(req) {
    const data = await req.json()
    await connectMongoDb();
    await Projects.create(data);
    return NextResponse.json({ message: "Projects inserted" }, {status: 201});
}


export async function GET() {
    await connectMongoDb();
    const projects = await Projects.find();
    return NextResponse.json({projects});
}

export async function DELETE(req) {
    const id = req.nextUrl.searchParams.get('id');

    await connectMongoDb();
    await Projects.findByIdAndDelete(id);
    return NextResponse.json({message: "Projects was deleted"}, {status: 200})
}