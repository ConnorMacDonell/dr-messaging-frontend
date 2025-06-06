import axios from "axios";
import AuthToken from "../entities/AuthToken";

// Use environment variable for production, fallback to localhost for development
const baseURL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

const axiosInstance = axios.create({
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/json',
    Accept: "application/json",
    'authorization': ``
  }
})

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  setAuthHeader(token: AuthToken) {
    axiosInstance.defaults.headers['authorization'] = `Bearer ${token.accessToken}`;
  }

  get = (id: string, token: AuthToken) => {
    this.setAuthHeader(token);
    return axiosInstance.get<T>(`${this.endpoint}/${id}`).then((res) => res.data);
  }

  getList = (token: AuthToken) => {
    this.setAuthHeader(token);
    return axiosInstance.get<T[]>(this.endpoint).then((res) => res.data);
  }

  post = (data: any, token?: AuthToken) => {
    if (token) this.setAuthHeader(token);
    return axiosInstance.post<T>(this.endpoint, data).then(res => res.data);
  }

  postToMessage = (data: any, token: AuthToken) => {
    this.setAuthHeader(token);
    return axiosInstance.post<T>(`${this.endpoint}/${data.messageId}`, data).then(res => res.data);
  }

  patch = (id: string, data: any, token: AuthToken) => {
    this.setAuthHeader(token);
    return axiosInstance.patch<T>(`${this.endpoint}/${id}`, data).then((res) => res.data);
  }

  delete = (id: string, token: AuthToken) => {
    this.setAuthHeader(token);
    return axiosInstance.delete<T>(`${this.endpoint}/${id}`).then((res) => res.data);
  }
}

export default APIClient;