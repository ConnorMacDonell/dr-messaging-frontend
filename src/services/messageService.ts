import {  MessageResponse } from "../entities/Message";
import APIClient from "./apiClient";

export default new APIClient<MessageResponse>('/messages');