"use client";

import { useAuth } from "../context/AuthContext";

export default function MembersPage() {
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    return (
      <div className="text-center mt-40 text-lg text-gray-600">
        🚫 이 페이지는 멤버 전용입니다. <br />
        로그인 후 이용해주세요.
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto mt-20 text-center">
      <h1 className="text-2xl font-bold mb-4">멤버 전용 페이지 🎓</h1>
      <p>이곳은 로그인한 회원만 접근할 수 있습니다.</p>
    </div>
  );
}
