import {  MessageResponse } from "../entities/Message";
import APIClient from "./api-client";

export default new APIClient<MessageResponse[]>('/messages');