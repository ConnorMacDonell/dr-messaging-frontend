export interface CreateUserResponse {
  id: string;
}

export interface UserCredentials {
  email: string;
  password: string;
}

export interface User {
  id: string;
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
  permissionFlags: number;
}

export interface UserResponse {
  _id: string;
  email: string;
  firstName?: string;
  lastName?: string;
  permissionFlags: number;
}

export interface UsersResponse {
  users: UserResponse[];
}