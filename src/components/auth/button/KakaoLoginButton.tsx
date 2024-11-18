import { RiKakaoTalkFill } from 'react-icons/ri';

import { Button } from '@/components/common/ui/button/button';

const KakaoLoginButton = () => {
  const KAKAO_SERVER_REDIRECT_URI = import.meta.env
    .VITE_KAKAO_SERVER_REDIRECT_URI;

  const handleKakaoLogin = () => {
    window.location.href = KAKAO_SERVER_REDIRECT_URI;
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
