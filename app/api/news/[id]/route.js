import connectMongoDb from "@/database/database";
import News from "@/models/news";
import { NextResponse } from "next/server";

export async function PUT(req, { params }) {
  const id = params.id;
  const updatedNews = await req.json();
  await connectMongoDb();
  await News.findByIdAndUpdate(id, updatedNews);
  return NextResponse.json({ message: "News updated" }, { status: 200 });
}

export async function GET(req, { params }) {
  const id = params.id;
  await connectMongoDb();
  const news = await News.findOne({ _id: id });
  return NextResponse.json({ news }, { status: 200 });
}
