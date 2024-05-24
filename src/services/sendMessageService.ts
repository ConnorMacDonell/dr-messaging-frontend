import {  SendMessageResponse } from "../entities/Message";
import APIClient from "./apiClient";

export default new APIClient<SendMessageResponse>('/messages');