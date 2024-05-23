import axios from "axios";
import AuthToken from "../entities/AuthToken";

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000',
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
    return axiosInstance.get<T>(this.endpoint).then((res) => res.data);
  }

  post = (data: any, token?: AuthToken) => {
    if (token) this.setAuthHeader(token);
    return axiosInstance.post<T>(this.endpoint, data).then(res => res.data);
  }

  patch = (id: string, data: any, token: AuthToken) => {
    this.setAuthHeader(token);
    return axiosInstance.patch<T>(`${this.endpoint}/${id}`, data).then((res) => res.data);
  }
}

export default APIClient;