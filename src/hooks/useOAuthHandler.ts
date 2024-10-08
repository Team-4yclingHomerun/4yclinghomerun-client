import { useCallback, useEffect, useRef } from 'react';

import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import { useAuthStore } from '@/stores/AuthStore';

type Provider = 'google' | 'kakao';

const useOAuthHandler = (provider: Provider) => {
  const navigate = useNavigate();
  const processedRef = useRef(false);
  const setAccessToken = useAuthStore((state) => state.setAccessToken);

  const sendAuthCodeToServer = useCallback(
    async (code: string) => {
      try {
        const response = await axios.post(
          `/api/auth/${provider}`, // endpoint 미정
          { code },
          {
            withCredentials: true,
          },
        );

        if (response.data.accessToken) {
          setAccessToken(response.data.accessToken, provider);
          navigate('/');
        }
      } catch (error) {
        console.error(`${provider} 로그인 실패:`, error);
        navigate('/login', { replace: true });
      }
    },
    [navigate, provider, setAccessToken],
  );

  useEffect(() => {
    if (processedRef.current) return;

    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get('code');

    if (code) {
      sendAuthCodeToServer(code);
    } else {
      navigate('/', { replace: true });
    }

    processedRef.current = true;
  }, [navigate, sendAuthCodeToServer]);

  return null;
};

export { useOAuthHandler };
