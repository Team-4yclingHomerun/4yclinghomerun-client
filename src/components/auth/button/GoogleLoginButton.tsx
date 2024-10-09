import { GoogleOAuthProvider } from '@react-oauth/google';

import GoogleCustomButton from './GoogleCustomButton';

const GoogleLoginButton = () => {
  const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;

  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <GoogleCustomButton />
    </GoogleOAuthProvider>
  );
};

export default GoogleLoginButton;
