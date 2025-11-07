import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    const [rows] = await db.query("SELECT * FROM users WHERE email = ?", [email]);
    const user = (rows as any[])[0];

    if (!user) {
      return NextResponse.json({ message: "존재하지 않는 이메일입니다." }, { status: 400 });
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return NextResponse.json({ message: "비밀번호가 일치하지 않습니다." }, { status: 400 });
    }

    // 간단한 로그인 시뮬레이션 (나중에 JWT로 변경 가능)
    return NextResponse.json({ message: "로그인 성공", userId: user.id }, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: "서버 에러" }, { status: 500 });
  }
}
