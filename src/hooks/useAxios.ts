/* eslint-disable */
import { useEffect, useState } from 'react';

import { AxiosError, AxiosInstance, ResponseType } from 'axios';

import {
  KtHttpClient,
  BackendHttpClient,
  AuthHttpClient,
  OauthHttpClient,
} from '@/api/HttpClient';
import { ServerType } from '@/types/ServerType';

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

interface RequestParams<T, R> {
  url: string;
  method: HttpMethod;
  initialData: T;
  body?: BodyInit | null;
  shouldFetchOnMount?: boolean;
  processData?: (data: T) => R;
  responseType?: ResponseType;
  serverType?: ServerType;
}

interface RequestOptions {
  body?: BodyInit | Record<string, any> | null;
}

const getHttpClient = (serverType: ServerType = 'kt'): AxiosInstance => {
  switch (serverType) {
    case 'backend':
      return BackendHttpClient;
    case 'auth':
      return AuthHttpClient;
    case 'oauth':
      return OauthHttpClient;
    default:
      return KtHttpClient;
  }
};

const useAxios = <T, R = T>({
  url,
  method,
  initialData,
  body,
  shouldFetchOnMount,
  processData,
  responseType,
  serverType = 'kt',
}: RequestParams<T, R>) => {
  const [data, setData] = useState<R | T>(initialData);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [delayLoading, setDelayLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const MINIMUM_LOADING_TIME = 500;

  const handleRequest = async (options?: RequestOptions) => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setDelayLoading(true);
    }, MINIMUM_LOADING_TIME);

    try {
      const HttpClient = getHttpClient(serverType);
      let response;
      const config = responseType ? { responseType } : {};
      const requestBody = options?.body || body;

      switch (method) {
        case 'GET':
          response = await HttpClient.get(url, config);
          break;
        case 'POST':
          response = await HttpClient.post(url, requestBody, config);
          break;
        case 'PUT':
          response = await HttpClient.put(url, requestBody, config);
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
      return responseData;
    } catch (error) {
      setIsError(true);
      if (error instanceof AxiosError) {
        if (error.response) {
          setError(error.response.data?.message || error.message);
        } else if (error.request) {
          setError('서버로부터 응답이 없습니다.');
        } else {
          setError(`요청 중 오류가 발생했습니다: ${error.message}`);
        }
      } else if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('알 수 없는 오류가 발생했습니다.');
      }
      throw error;
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
