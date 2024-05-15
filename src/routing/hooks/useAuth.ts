import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const useAuth = () => {

  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error("useAuth must be used within <AuthContext.PRovider>");
  }

  return authContext;
}

export default useAuth;