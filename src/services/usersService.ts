import { CreateUserResponse } from "../entities/User";
import APIClient from "./api-client";

export default new APIClient<CreateUserResponse>('/users');