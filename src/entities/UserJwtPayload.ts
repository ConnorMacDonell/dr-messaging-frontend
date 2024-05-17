import {} from "jwt-decode";

declare module "jwt-decode" {
  export interface UserJwtPayload extends JwtPayload {
    userId: string;
    email: string;
    permissionFlags: number;
  }
}