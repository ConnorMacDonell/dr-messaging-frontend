import APIClient from "./api-client";
import { UserCredentials } from "../entities/User";

export default new APIClient<UserCredentials>('/auth');