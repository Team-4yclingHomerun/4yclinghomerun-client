import { useOAuthHandler } from '@/hooks/useOAuthHandler';

const KakaoOAuthHandler = () => {
  useOAuthHandler('kakao');

  return <div className="text-8xl font-extrabold">Kakao 로그인 처리 중...</div>;
};

export default KakaoOAuthHandler;
