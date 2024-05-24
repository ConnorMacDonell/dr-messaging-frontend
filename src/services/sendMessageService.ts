import {  SendMessageResponse } from "../entities/Message";
import APIClient from "./api-client";

export default new APIClient<SendMessageResponse>('/messages');