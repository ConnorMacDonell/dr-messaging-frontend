import { useContext } from "react";
import { AuthContext } from "../../components/providers/AuthProvider";

const useAuth = () => {
  return useContext(AuthContext);
  // if (!localStorage['accessToken']) return { authorizedUser: null };

  // const user = <UserJwtPayload>jwtDecode(localStorage['accessToken']);

  // return { authorizedUser: user };
}

export default useAuth;