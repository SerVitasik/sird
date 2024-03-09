import connectMongoDb from "@/database/database";
import Projects from "@/models/projects";
import { NextResponse } from "next/server";
export async function POST(req) {
  const data = await req.json();
  await connectMongoDb();
  await Projects.create(data);
  return NextResponse.json({ message: "Projects inserted" });
}
