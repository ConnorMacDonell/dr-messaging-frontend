export interface SendMessageObject {
  recipients: string[];
  message: string;
}

export interface CreateMessageObject {
  owner: string;
  category: string;
  message: string;
}

export interface MessageResponse {
  status: string;
  message: string;
  error?: string;
}