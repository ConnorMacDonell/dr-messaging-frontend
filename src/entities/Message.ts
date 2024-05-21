export interface Message {
  recipients: string[];
  message: string;
}

export interface MessageResponse {
  status: string;
  message: string;
  error?: string;
}