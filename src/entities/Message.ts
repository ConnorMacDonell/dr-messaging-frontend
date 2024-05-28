export interface CreateMessageObject {
  ownerId: string;
  category: string;
  messageBody: string;
}

export interface EditMessageObject {
  category: string;
  messageBody: string;
}

export interface SendMessageObject {
  recipients: string[];
  messageId: string;
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

export interface SendMessageResponse {
  recipients: string[];
}