import { Link } from 'react-router-dom';

import LoginForm from '@/components/auth/form/LoginForm';

const LoginPage = () => {
  return (
    <main className="flex h-full flex-col items-center justify-center pt-32">
      <h1 className="text-xl font-semibold text-white">
        Kt Wiz에 오신 것을 환영해요!
      </h1>
      <LoginForm />
      <Link
        to="/signup"
        className="mt-4 flex justify-end text-sm text-blue-500 transition-all duration-200 hover:text-blue-800"
      >
        아직 회원이 아니신가요?
      </Link>
    </main>
  );
};

export default LoginPage;
