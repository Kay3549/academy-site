"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type AuthContextType = {
  isLoggedIn: boolean;
  isMember: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  grantMembership: () => void;
  revokeMembership: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMember, setIsMember] = useState(false);

  // ✅ 새로고침 시 쿠키 기반 로그인 복원
  useEffect(() => {
    const checkLogin = async () => {
      try {
        const res = await fetch("/api/auth/check", { credentials: "include" });
        const data = await res.json();
        if (data.loggedIn) setIsLoggedIn(true);
      } catch (err) {
        console.error("Login check failed:", err);
      }
    };
    checkLogin();
  }, []);

  // ✅ 로그인 요청
  const login = async (email: string, password: string) => {
    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
      credentials: "include", // 쿠키 허용
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || "Login failed");
    }

    setIsLoggedIn(true);
  };

  // ✅ 로그아웃 시 쿠키 삭제 요청도 함께
  const logout = async () => {
    try {
      await fetch("/api/auth/logout", {
        method: "POST",
        credentials: "include",
      });
    } catch (err) {
      console.error("Logout failed:", err);
    } finally {
      setIsLoggedIn(false);
      setIsMember(false);
    }
  };

  const grantMembership = () => setIsMember(true);
  const revokeMembership = () => setIsMember(false);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        isMember,
        login,
        logout,
        grantMembership,
        revokeMembership,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
}
