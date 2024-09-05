import { useEffect, useState } from 'react';

type FetchOptions = {
  method?: string;
  headers?: HeadersInit;
  body?: BodyInit | null;
};

const useFetch = <T>(
  initialURL: string,
  initialData: T,
  initialOptions: FetchOptions = {
    method: 'GET',
  },
) => {
  const [data, setData] = useState<T>(<T>initialData);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchData = async () => {
      setIsLoading(true);
      setIsError(false);
      setError(null);

      try {
        const reponse = await fetch(initialURL, { ...initialOptions, signal });

        if (!reponse.ok) {
          throw new Error('서버 상태가 이상합니다.');
        }
        const data: T = await reponse.json();
        setData(data);
      } catch (e) {
        if (e instanceof Error && e.name === 'AbortError') return;
        setIsError(true);
        setError(e instanceof Error ? e.message : '알 수 없는 에러');
      } finally {
        if (!signal.aborted) {
          setIsLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, [initialURL]);

  return { data, isLoading, isError, error };
};

export default useFetch;
