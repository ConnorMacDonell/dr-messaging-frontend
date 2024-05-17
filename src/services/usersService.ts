import {  UsersResponse } from "../entities/User";
import APIClient from "./api-client";

export default new APIClient<UsersResponse>('/users');