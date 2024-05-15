import { useToast } from "@chakra-ui/react";
import React, { createContext, useState } from "react";
import { UserJwtPayload } from "jwt-decode";

declare module "jwt-decode" {
  export interface UserJwtPayload extends JwtPayload {
    userId: string;
    email: string;
    permissionFlags: number;
  }
}

interface Props {
  children: React.ReactNode;
}

interface AuthContextType {
  token: UserJwtPayload | null;
  onLogin: () => Promise<void>;
  onLogout: () => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);

const AuthProvider = ({ children }: Props) => {
  const [token, setToken] = useState(null);
  const toast = useToast();
  const handleLogin = async () => {};

  const handleLogout = () => {
    setToken(null);
    toast({
      title: "Logged out",
      status: "info",
      duration: 3000,
      isClosable: true,
    });
  };

  const value = {
    token,
    onLogin: handleLogin,
    onLogout: handleLogout,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
