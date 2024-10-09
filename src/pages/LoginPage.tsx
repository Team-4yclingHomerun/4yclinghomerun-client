import GoogleLoginButton from '@/components/auth/button/GoogleLoginButton';
import KakaoLoginButton from '@/components/auth/button/KakaoLoginButton';
import AuthPageLayout from '@/components/auth/common/AuthPageLayout';
import LoginForm from '@/components/auth/form/LoginForm';

const LoginPage = () => {
  return (
    <AuthPageLayout to="/signup">
      <div className="mb-6 flex w-full justify-around gap-2">
        <KakaoLoginButton />
        <GoogleLoginButton />
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
