import { FcGoogle } from 'react-icons/fc';

import { Button } from '@/components/common/ui/button/button';

const GoogleCustomButton = () => {
  const GOOGLE_SERVER_REDIRECT_URI = import.meta.env
    .VITE_GOOGLE_SERVER_REDIRECT_URI;

  const handleGoogleLogin = () => {
    window.location.href = GOOGLE_SERVER_REDIRECT_URI;
  };

  return (
    <Button
      variant="danger"
      className="flex w-full items-center justify-center gap-2 rounded-md border border-gray-300 bg-white text-sm font-medium text-gray-700 transition-colors duration-300 hover:bg-gray-100"
      onClick={handleGoogleLogin}
    >
      <FcGoogle size={20} />
      구글 계정으로 로그인
    </Button>
  );
};

export default GoogleCustomButton;
