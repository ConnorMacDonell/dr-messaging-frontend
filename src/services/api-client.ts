import axios, { AxiosRequestConfig } from "axios";

const axiosInstance = axios.create({
  baseURL: 'localhost:3000'
})

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  get = (id: string | number) => {
    return axiosInstance.get<T>(`${this.endpoint}/${id}`).then((res) => res.data)
  }

  post = (data: T) => {
    return axiosInstance.post<T>(this.endpoint, data).then(res => res.data);
  }
}

export default APIClient;