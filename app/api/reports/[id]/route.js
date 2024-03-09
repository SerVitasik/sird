import connectMongoDb from "@/database/database";
import Reports from "@/models/announcements";
import { NextResponse } from "next/server";

export async function PUT(req, { params }) {
  const id = params.id;
  const updatedReports = await req.json();
  await connectMongoDb();
  await Reports.findByIdAndUpdate(id, updatedReports);
  return NextResponse.json({ message: "Report updated" }, { status: 200 });
}

export async function GET(req, { params }) {
  const id = params.id;
  await connectMongoDb();
  const reports = await Reports.findOne({ _id: id });
  return NextResponse.json({ reports }, { status: 200 });
}
