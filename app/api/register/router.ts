import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    const [rows] = await db.query("SELECT id FROM users WHERE email = ?", [email]);
    if ((rows as any[]).length > 0) {
      return NextResponse.json({ message: "이미 가입된 이메일입니다." }, { status: 400 });
    }

    const hashed = await bcrypt.hash(password, 10);
    await db.query("INSERT INTO users (email, password) VALUES (?, ?)", [email, hashed]);

    return NextResponse.json({ message: "회원가입 성공" }, { status: 201 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: "서버 에러" }, { status: 500 });
  }
}
