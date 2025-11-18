import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function GET(req: Request) {
  try {
    const cookieHeader = req.headers.get("cookie");
    const token = cookieHeader
      ?.split(";")
      .find((c) => c.trim().startsWith("token="))
      ?.split("=")[1];

    if (!token) return NextResponse.json({ loggedIn: false });

    jwt.verify(token, process.env.JWT_SECRET!);
    return NextResponse.json({ loggedIn: true });
  } catch (err) {
    return NextResponse.json({ loggedIn: false });
  }
}
