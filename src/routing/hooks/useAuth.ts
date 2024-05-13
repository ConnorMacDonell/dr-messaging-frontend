import { UserJwtPayload, jwtDecode } from "jwt-decode";

declare module 'jwt-decode'{
  export interface UserJwtPayload extends JwtPayload {
    userId: string;
    email: string;
    permissionFlags: number;
  }
}

const useAuth = () => {
  if (!localStorage['accessToken']) return { authorizedUser: null };

  const user = <UserJwtPayload>jwtDecode(localStorage['accessToken']);

  return { authorizedUser: user };
}

export default useAuth;