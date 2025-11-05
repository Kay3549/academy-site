"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type AuthContextType = {
  isLoggedIn: boolean;
  isMember: boolean;
  login: () => void;
  logout: () => void;
  grantMembership: () => void;
  revokeMembership: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMember, setIsMember] = useState(false);

  const login = () => setIsLoggedIn(true);
  const logout = () => {
    setIsLoggedIn(false);
    setIsMember(false);
  };

  const grantMembership = () => setIsMember(true);
  const revokeMembership = () => setIsMember(false);

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, isMember, login, logout, grantMembership, revokeMembership }}
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
