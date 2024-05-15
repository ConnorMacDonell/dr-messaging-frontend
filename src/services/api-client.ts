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

  get = (id: string, token: AuthToken) => {
    axiosInstance.defaults.headers['authorization'] = `Bearer ${token.accessToken}`;
    return axiosInstance.get<T>(`${this.endpoint}/${id}`).then((res) => res.data);
  }

  post = (data: any) => {
    return axiosInstance.post<T>(this.endpoint, data).then(res => res.data);
  }
}

export default APIClient;