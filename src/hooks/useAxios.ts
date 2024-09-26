/* eslint-disable */

import { useEffect, useState } from 'react';

import axios, { AxiosError, ResponseType } from 'axios';

import HttpClient from '@/api/HttpClient';

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

interface RequestParams<T, R> {
  url: string;
  method: HttpMethod;
  initialData: T;
  body?: BodyInit | null;
  shouldFetchOnMount?: boolean;
  processData?: (data: T) => R;
  responseType?: ResponseType;
}

const useAxios = <T, R = T>({
  url,
  method,
  initialData,
  body,
  shouldFetchOnMount,
  processData,
  responseType,
}: RequestParams<T, R>) => {
  const [data, setData] = useState<R | T>(initialData);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [delayLoading, setDelayLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const MINIMUM_LOADING_TIME = 500;

  const handleRequest = async () => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setDelayLoading(true);
    }, MINIMUM_LOADING_TIME);

    try {
      let response;
      const config = responseType ? { responseType } : {};
      switch (method) {
        case 'GET':
          response = await HttpClient.get(url, config);
          break;
        case 'POST':
          response = await HttpClient.post(url, body, config);
          break;
        case 'PUT':
          response = await HttpClient.put(url, body, config);
          break;
        case 'DELETE':
          response = await HttpClient.delete(url, config);
          break;
        default:
          throw new Error('지원하지 않는 메소드입니다.');
      }

      const responseData = response.data;

      if (processData) {
        setData(processData(responseData));
      } else {
        setData(responseData);
      }
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
      clearTimeout(timer);
      setIsLoading(false);
      setDelayLoading(false);
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
    delayLoading,
    isError,
    error,
    handleRequest,
  };
};

export { useAxios };
