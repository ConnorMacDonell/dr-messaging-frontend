import { UserJwtPayload, jwtDecode } from "jwt-decode";

declare module 'jwt-decode'{
  export interface UserJwtPayload extends JwtPayload {
    userId: string;
    email: string;
    permissionFlags: number;
  }
}

const useAuth = () => {
  if (!localStorage['accessToken']) return { user: null };

  const user = <UserJwtPayload>jwtDecode(localStorage['accessToken']);

  return {user: user};
}

export default useAuth;