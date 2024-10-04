import SignupForm from '@/components/auth/form/SignupForm';

const SingupPage = () => {
  return (
    <main className="flex h-full flex-col items-center justify-center pt-32">
      <h1 className="text-xl font-semibold text-white">회원가입</h1>
      <SignupForm />
    </main>
  );
};

export default SingupPage;
