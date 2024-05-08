import APIClient from "./api-client";
import AuthToken from "../entities/AuthToken";

export default new APIClient<AuthToken>('/auth');