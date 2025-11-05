"use client";

import { useAuth } from "@/app/context/AuthContext";

export default function AdminPage() {
  const { isLoggedIn, isMember, grantMembership, revokeMembership } = useAuth();

  if (!isLoggedIn) {
    return <p className="text-center mt-10 text-red-500">🚫 관리자 권한이 필요합니다.</p>;
  }

  return (
    <div className="max-w-lg mx-auto mt-16 bg-white shadow-md rounded-2xl p-8">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
        관리자 페이지 🛠️
      </h1>

      <p className="text-center text-gray-700 mb-4">
        현재 멤버 상태:{" "}
        <span className={`font-semibold ${isMember ? "text-green-600" : "text-gray-500"}`}>
          {isMember ? "✅ 멤버" : "❌ 비멤버"}
        </span>
      </p>

      <div className="flex justify-center gap-4">
        <button
          onClick={grantMembership}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          멤버십 부여
        </button>

        <button
          onClick={revokeMembership}
          className="bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-500 transition"
        >
          멤버십 해제
        </button>
      </div>
    </div>
  );
}
