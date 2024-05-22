export interface SendMessageObject {
  recipients: string[];
  messageCategory: string;
}

export interface CreateMessageObject {
  ownerId: string;
  category: string;
  messageBody: string;
}

export interface MessageResponse {
  status: string;
  messageBody: string;
  error?: string;
}