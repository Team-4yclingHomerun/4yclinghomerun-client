import { RiKakaoTalkFill } from 'react-icons/ri';

import AuthPageLayout from '@/components/auth/common/AuthPageLayout';
import LoginForm from '@/components/auth/form/LoginForm';

const LoginPage = () => {
  const K_REST_API_KEY = import.meta.env.VITE_KAKAO_REST_API;
  const K_REDIRECT_URI = 'http://localhost:5173/auth';
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${K_REST_API_KEY}&redirect_uri=${K_REDIRECT_URI}&response_type=code`;

  const handleKakaoLogin = () => {
    window.location.href = kakaoURL;
  };

  return (
    <AuthPageLayout to="/signup">
      <div className="mb-6 flex justify-between">
        <button
          className="flex w-full items-center justify-center gap-2 rounded-md bg-[#FEE500] px-4 py-2 text-sm font-medium text-gray-700 transition-colors duration-300 hover:bg-[#FEE500]"
          onClick={handleKakaoLogin}
        >
          <RiKakaoTalkFill size={20} />
          카카오 계정으로 로그인
        </button>
      </div>

      <div className="relative mb-6">
        <hr className="border-gray-300" />
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-2 text-sm text-gray-500">
          OR
        </span>
      </div>
      <LoginForm />
    </AuthPageLayout>
  );
};

export default LoginPage;
