import AuthToken from "../entities/AuthToken";

export function authTokenGuard(obj: any): obj is AuthToken {
  return "accessToken" in obj && "refreshToken" in obj
}