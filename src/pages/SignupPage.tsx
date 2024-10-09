import AuthPageLayout from '@/components/auth/common/AuthPageLayout';
import SignupForm from '@/components/auth/form/SignupForm';

const SingupPage = () => {
  return (
    <AuthPageLayout to="/login">
      <SignupForm />
    </AuthPageLayout>
  );
};

export default SingupPage;
