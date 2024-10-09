import { Link, useLocation } from 'react-router-dom';

import vicddoryImg from '@/assets/auth/vicddory.png';

type AuthPageLayoutProps = {
  children: React.ReactNode;
  to: string;
};

const AuthPageLayout = ({ children, to }: AuthPageLayoutProps) => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  return (
    <div className="flex h-screen bg-kt-gray-2">
      {/* 왼쪽 */}
      <aside className="flex w-1/3 flex-col justify-center p-12">
        <h1 className="mb-4 text-3xl font-extrabold text-kt-black-4">
          We are KT Wiz!⚾️
        </h1>
        <section className="flex flex-col gap-2">
          <p className="text-xl font-extrabold text-kt-red-1">
            WINNING KT : WE ARE GREAT MAGIC
          </p>
          <p className="text-lg font-extrabold">
            안녕하세요! kt wiz 야구단입니다.
          </p>
        </section>
        <figure className="mt-8">
          <img src={vicddoryImg} alt="vicddory" className="w-full" />
        </figure>
      </aside>

      {/* 오른쪽 */}
      <main className="flex w-2/3 flex-col items-center justify-center bg-white pt-20">
        <section className="w-full max-w-xl">
          <h2 className="mb-8 text-center text-2xl font-bold text-gray-700">
            {isLoginPage ? '로그인' : '회원가입'}
          </h2>
          {children}
          <div className="mt-4 block text-center text-sm text-blue-500 hover:text-blue-700">
            <Link to={to}>
              {isLoginPage
                ? '아직 회원이 아니신가요? 회원가입하기'
                : '이미 회원이신가요? 로그인하기'}
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AuthPageLayout;
