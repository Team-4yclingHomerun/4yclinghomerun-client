import { useCallback, useEffect, useRef } from 'react';

import { useNavigate } from 'react-router-dom';

import { useAxios } from './useAxios';
import { useAuthStore } from '@/stores/AuthStore';

type Provider = 'google' | 'kakao';

interface OAuthResponse {
  access_token: string;
}

const useOAuthHandler = (provider: Provider) => {
  const navigate = useNavigate();
  const processedRef = useRef(false);
  const setAccessToken = useAuthStore((state) => state.setAccessToken);

  const { handleRequest: sendAuthRequest } = useAxios<OAuthResponse>({
    url: `/oauth/login/${provider}`,
    method: 'POST',
    initialData: { access_token: '' },
  });

  const sendAuthCodeToServer = useCallback(
    async (code: string) => {
      try {
        const response = await sendAuthRequest({ body: { code } });

        if (response.access_token) {
          setAccessToken(response.access_token, provider);
          navigate('/');
        }
      } catch (error) {
        navigate('/login', { replace: true });
        console.error(`${provider} 로그인 에러:`, error);
      }
    },
    [navigate, provider, setAccessToken, sendAuthRequest],
  );

  useEffect(() => {
    if (processedRef.current) return;

    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get('code');

    if (code) {
      sendAuthCodeToServer(code);
    } else {
      navigate('/login', { replace: true });
    }

    processedRef.current = true;
  }, [navigate, sendAuthCodeToServer]);

  return null;
};

export { useOAuthHandler };
