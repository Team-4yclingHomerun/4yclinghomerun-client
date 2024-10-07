import { RiKakaoTalkFill } from 'react-icons/ri';

import { Button } from '@/components/common/ui/button/button';

const KakaoLoginButton = () => {
  const K_REST_API_KEY = import.meta.env.VITE_KAKAO_REST_API;
  const K_REDIRECT_URI = 'http://localhost:5173/auth';
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${K_REST_API_KEY}&redirect_uri=${K_REDIRECT_URI}&response_type=code`;

  const handleKakaoLogin = () => {
    window.location.href = kakaoURL;
  };

  return (
    <Button
      variant="secondary"
      className="flex w-full items-center justify-center gap-2 rounded-md bg-[#FEE500] text-sm font-medium text-gray-700 transition-colors duration-300 hover:border hover:border-yellow-300 hover:bg-[#FFEB3B]"
      onClick={handleKakaoLogin}
    >
      <RiKakaoTalkFill size={20} />
      카카오 계정으로 로그인
    </Button>
  );
};

export default KakaoLoginButton;
