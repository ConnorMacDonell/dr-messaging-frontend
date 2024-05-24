import APIClient from "./apiClient";
import AuthToken from "../entities/AuthToken";

export default new APIClient<AuthToken>('/auth');