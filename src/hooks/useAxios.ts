import { useEffect, useState } from 'react';

import HttpClient from '@/api/HttpClient';
import axios, { AxiosError } from 'axios';

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

interface RequestParams<T> {
  url: string;
  method: HttpMethod;
  initialData: T;
  body?: BodyInit | null;
  shouldFetchOnMount?: boolean;
}

const useAxios = <T>({
  url,
  method,
  initialData,
  body,
  shouldFetchOnMount,
}: RequestParams<T>) => {
  const [data, setData] = useState(initialData);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleRequest = async () => {
    setIsLoading(true);
    try {
      let response;
      switch (method) {
        case 'GET':
          response = await HttpClient.get(url);
          break;
        case 'POST':
          response = await HttpClient.post(url, body);
          break;
        case 'PUT':
          response = await HttpClient.put(url, body);
          break;
        case 'DELETE':
          response = await HttpClient.delete(url);
          break;
        default:
          throw new Error('지원하지 않는 메소드입니다.');
      }
      setData(response.data);
      setIsError(false);
    } catch (error: unknown) {
      setIsError(true);
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError;
        if (axiosError.response) {
          switch (axiosError.response.status) {
            case 500:
              setError('서버에 오류가 발생했습니다');
              break;
            case 404:
              setError('요청한 페이지를 찾을 수 없습니다');
              break;
            case 400:
              setError('잘못된 요청입니다');
              break;
            case 401:
              setError('인증에 실패했습니다');
              break;
            case 403:
              setError('접근 권한이 없습니다');
              break;
            default:
              setError(`오류가 발생했습니다: ${axiosError.response.status}`);
          }
        } else if (error.request) {
          setError('서버로부터 응답이 없습니다');
        } else {
          setError(`요청 중 오류가 발생했습니다: ${error.message}`);
        }
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (method === 'GET' && shouldFetchOnMount) {
      handleRequest();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [method, url, shouldFetchOnMount]);

  return {
    data,
    isLoading,
    isError,
    error,
    handleRequest,
  };
};

export default useAxios;
