import axios from "axios";

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
    Accept: "application/json",
    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
  }
})

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  get = (id: string) => {
    return axiosInstance.get<T>(`${this.endpoint}/${id}`).then((res) => res.data)
  }

  post = (data: any) => {
    return axiosInstance.post<T>(this.endpoint, data).then(res => res.data);
  }
}

export default APIClient;