// app/layout.tsx
import "./globals.css";
import Link from "next/link";
import { AuthProvider } from "./context/AuthContext";

export const metadata = {
  title: "학회 홈페이지",
  description: "AI와 사회 변화를 다루는 학회 공식 웹사이트",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body style={{ margin: 0, fontFamily: "sans-serif" }}>
        <AuthProvider>
          {/* 네비게이션 바 */}
          <nav
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "10px 30px",
              background: "#f7f7f7",
              borderBottom: "1px solid #ddd",
            }}
          >
            <h2>학회 사이트</h2>
            <div style={{ display: "flex", gap: "20px" }}>
              <Link href="/">홈</Link>
              <Link href="/articles">아티클</Link>
              <Link href="/members">멤버 전용</Link>
              <Link href="/admin">관리자</Link>
              <Link href="/auth/login">로그인</Link>
            </div>
          </nav>

          {/* 페이지 본문 */}
          <main style={{ padding: "40px", minHeight: "80vh" }}>{children}</main>

          {/* 푸터 */}
          <footer
            style={{
              textAlign: "center",
              padding: "20px",
              borderTop: "1px solid #ddd",
              color: "#777",
            }}
          >
            © 2025 AI & Society 학회
          </footer>
        </AuthProvider>
      </body>
    </html>
  );
}
