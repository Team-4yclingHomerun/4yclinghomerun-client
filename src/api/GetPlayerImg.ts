import { useState, useEffect } from 'react';

import { useAxios } from '@/hooks/useAxios';

const GetPlayerImg = (pCode: string) => {
  const [imageUrl, setImageUrl] = useState<string | undefined>(undefined);

  const { data, isError, error, isLoading } = useAxios({
    method: 'GET',
    url: `/game/navergameplayerimg?playerCode=${pCode}`,
    initialData: null,
    shouldFetchOnMount: !!pCode,
    responseType: 'blob',
  });

  useEffect(() => {
    if (data && !isError) {
      const imageUrl = URL.createObjectURL(data as Blob);
      setImageUrl(imageUrl);
    } else if (isError) {
      console.error(error);
    }
  }, [data, isError, error]);

  // 언마운트 시 호출하여 메모리 누수 방지
  useEffect(() => {
    return () => {
      if (imageUrl) {
        URL.revokeObjectURL(imageUrl);
      }
    };
  }, [imageUrl]);

  return { imageUrl, isError, error, isLoading };
};

export { GetPlayerImg };
