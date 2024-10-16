import axios, { AxiosError, AxiosInstance } from 'axios';

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
    if (error.message.includes('Network Error')) {
      return Promise.reject(new Error('네트워크 오류가 발생했습니다'));
    } else if (error.message.includes('timeout')) {
      return Promise.reject(new Error('요청 시간이 초과되었습니다'));
    } else {
      return Promise.reject(
        new Error(`요청 중 오류가 발생했습니다:${error.message}`),
      );
    }
  },
);

HttpClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: AxiosError) => {
    if (error.response) {
      switch (error.response.status) {
        case 500:
          return Promise.reject(new Error('서버에 오류가 발생했습니다'));
        case 404:
          return Promise.reject(new Error('요청한 페이지를 찾을 수 없습니다'));
        case 400:
          return Promise.reject(new Error('잘못된 요청입니다'));
        case 401:
          return Promise.reject(new Error('인증에 실패했습니다'));
        case 403:
          return Promise.reject(new Error('접근 권한이 없습니다'));
        default:
          return Promise.reject(
            new Error(`오류가 발생했습니다: ${error.response.status}`),
          );
      }
    } else if (error.request) {
      return Promise.reject(new Error('서버로부터 응답이 없습니다'));
    } else {
      return Promise.reject(
        new Error(`요청 중 오류가 발생했습니다: ${error.message}`),
      );
    }
  },
);

export default HttpClient;
