import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "학회 홈페이지",
  description: "학회 대표 공식 홈페이지",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <header style={{ padding: "20px", backgroundColor: "#f0f0f0" }}>
          <nav style={{ display: "flex", gap: "20px" }}>
            <Link href="/">홈</Link>
            <Link href="/articles">뉴스/아티클</Link>
            <Link href="/members">멤버 전용</Link>
            <Link href="/auth/login">로그인</Link>
            <Link href="/auth/register">회원가입</Link>
            <Link href="/admin">관리자</Link>
          </nav>
        </header>
        <main style={{ padding: "40px" }}>{children}</main>
      </body>
    </html>
  );
}
