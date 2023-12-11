import connectMongoDb from "@/database/database";
import User from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req) {
    try {
         const {username, password} = await req.json();
         const existingUser = await User.findOne({ username });
         const passwordRegex = /^(?=.*\d)(?=.*[A-Z]).{8,}$/;
         if (!passwordRegex.test(password)) {
             return NextResponse.json({ message: "Invalid password" }, { status: 400 });
         }
         if (username.lenght < 3 || username.lenght > 20) {
            return NextResponse.json({ message: "Invalid username" }, { status: 400 });
        }
         if (existingUser) {
             return NextResponse.json({ message: "Username already exists" }, { status: 400 });
         }
         const hashedPassword = await bcrypt.hash(password, 10);
         await connectMongoDb();
         await User.create({username, password: hashedPassword})
         return NextResponse.json({message: "User added"}, {status: 201});
    } catch (error) {
        return NextResponse.json({message: "An error occured while creating user"}, {status: 500});
    }
}