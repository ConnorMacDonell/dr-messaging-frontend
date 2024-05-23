import {  MessagesListResponse } from "../entities/Message";
import APIClient from "./api-client";

export default new APIClient<MessagesListResponse>('/messages');