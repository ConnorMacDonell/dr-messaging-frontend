import {  UsersResponse } from "../entities/User";
import APIClient from "./apiClient";

export default new APIClient<UsersResponse>('/users');