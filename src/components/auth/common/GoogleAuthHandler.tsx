import { useOAuthHandler } from '@/hooks/useOAuthHandler';

const GoogleOAuthHandler = () => {
  useOAuthHandler('google');

  return (
    <div className="text-8xl font-extrabold">Google 로그인 처리 중...</div>
  );
};

export default GoogleOAuthHandler;
