import connectMongoDb from "@/database/database";
import Projects from "@/models/projects";
import { NextResponse } from "next/server";

export async function PUT(req, {params}) {
    const id = params.id;
    const updatedNews = await req.json();
    await connectMongoDb();
    await Projects.findByIdAndUpdate(id, updatedNews);
    return NextResponse.json({ message: "Projects updated" }, {status: 200});
}

export async function GET(req, {params}) {
    const id = params.id;
    await connectMongoDb();
    const projects = await Projects.findOne({_id: id});
    return NextResponse.json({projects}, {status: 200});
}