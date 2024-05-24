import {  UserResponse } from "../entities/User";
import APIClient from "./apiClient";

export default new APIClient<UserResponse>('/users');