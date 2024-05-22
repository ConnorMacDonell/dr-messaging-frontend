export interface SendMessageObject {
  recipients: string[];
  message_body: string;
}

export interface CreateMessageObject {
  owner_id: string;
  category: string;
  message_body: string;
}

export interface MessageResponse {
  status: string;
  message_body: string;
  error?: string;
}