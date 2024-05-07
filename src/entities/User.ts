export interface CreateUserResponse {
  id: string;
}

export interface User {
  id: string;
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
  permissionFlags?: number;
}