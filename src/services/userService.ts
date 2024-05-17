import {  UserResponse } from "../entities/User";
import APIClient from "./api-client";

export default new APIClient<UserResponse>('/users');