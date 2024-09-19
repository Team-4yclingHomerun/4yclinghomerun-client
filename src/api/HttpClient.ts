import axios, { AxiosInstance } from 'axios';

const apiUrl = import.meta.env.VITE_API_URL;
const BASE_URL = apiUrl;

const HttpClient: AxiosInstance = axios.create({
  baseURL: BASE_URL,
});

HttpClient.interceptors.request.use(
  (config) => {
    if (config.headers) {
      // header를 설정하는 코드를 작성
    }
    return config;
  },
  (error) => {
    console.log(error);
  },
);

export default HttpClient;
