import { useToast } from "@chakra-ui/react";
import React, { createContext } from "react";
import { UserJwtPayload, jwtDecode } from "jwt-decode";
import AuthToken from "../entities/AuthToken";
import authService from "../services/authService";
import { UserCredentials } from "../entities/User";
import usePersistState from "../hooks/usePersistState";

interface Props {
  children: React.ReactNode;
}

interface AuthContextType {
  token: string;
  userId: string;
  onLogin: (data: UserCredentials) => Promise<void>;
  onLogout: () => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);

const AuthProvider = ({ children }: Props) => {
  const [token, setToken] = usePersistState<AuthToken>("token", {
    accessToken: "",
    refreshToken: "",
  });
  const [userId, setCurrentUserId] = usePersistState("user", "");
  const toast = useToast();

  const handleLogin = async (data: UserCredentials) => {
    try {
      const response: AuthToken = await authService.post(data);
      setToken(response);

      const { userId } = jwtDecode(response.accessToken) as UserJwtPayload;
      setCurrentUserId(userId);

      toast({
        title: "Login successful",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: "Login failed",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const handleLogout = () => {
    setToken({ accessToken: "", refreshToken: "" });
    setCurrentUserId("");
    toast({
      title: "Logged out",
      status: "info",
      duration: 3000,
      isClosable: true,
    });
  };

  const value = {
    token,
    userId,
    onLogin: handleLogin,
    onLogout: handleLogout,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
