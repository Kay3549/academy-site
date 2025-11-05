"use client";

import { useAuth } from "@/app/context/AuthContext";

export default function MembersPage() {
  const { isLoggedIn, isMember } = useAuth();

  if (!isLoggedIn) {
    return <p className="text-center mt-10 text-red-500">🚫 로그인 후 이용 가능합니다.</p>;
  }

  if (!isMember) {
    return <p className="text-center mt-10 text-yellow-500">⚠️ 멤버십이 필요합니다.</p>;
  }

  return (
    <div className="max-w-2xl mx-auto mt-16 bg-white shadow-md rounded-2xl p-8">
      <h1 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
        🎓 멤버 전용 페이지
      </h1>
      <p className="text-center text-gray-600">
        이 페이지는 멤버십이 있는 사용자만 접근할 수 있습니다.
      </p>
    </div>
  );
}
