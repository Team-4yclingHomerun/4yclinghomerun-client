import { useCallback, useEffect, useRef } from 'react';

import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import { useAuthStore } from '@/stores/AuthStore';

type Provider = 'google' | 'kakao';

const useOAuthHandler = (provider: Provider) => {
  const navigate = useNavigate();
  const processedRef = useRef(false);
  const { accessToken, setAccessToken, clearAccessToken } = useAuthStore();

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
    const init = async () => {
      if (processedRef.current) return;

      const searchParams = new URLSearchParams(window.location.search);
      const code = searchParams.get('code');

      if (code) {
        sendAuthCodeToServer(code);
      } else if (accessToken) {
        // 액세스 토큰이 있지만 유효한지 검사
        try {
          await axios.get('/api/validate-token', {
            headers: { Authorization: `Bearer ${accessToken}` },
          });
          navigate('/');
        } catch (error) {
          // 토큰이 유효하지 않으면 리프레시 토큰을 사용하여 토큰을 갱신
          console.error('토큰 유효성 검사 실패:', error);
          clearAccessToken();
          navigate('/login', { replace: true });
        }
      } else {
        navigate('/login', { replace: true });
      }

      processedRef.current = true;
    };

    init();
  }, [navigate, sendAuthCodeToServer, accessToken, clearAccessToken]);

  return null;
};

export { useOAuthHandler };
