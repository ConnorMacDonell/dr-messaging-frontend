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
  _id: string;
  messageBody: string;
  ownerId: string;
  category: string;
}

export interface MessagesListResponse {
  messages: MessageResponse[];
}