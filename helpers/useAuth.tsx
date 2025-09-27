import React, { ReactNode, createContext, useContext, useState } from "react";

type AuthState = { type: "authenticated"; user: { displayName: string } } | { type: "unauthenticated" };

const AuthContext = createContext<any>(null);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [authState] = useState<AuthState>({ type: "authenticated", user: { displayName: "Test User" } });
  const logout = () => {};
  return <AuthContext.Provider value={{ authState, logout }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
