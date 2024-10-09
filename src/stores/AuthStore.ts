import { create } from 'zustand';

type AuthStoreType = {
  accessToken: string | null;
  provider: 'google' | 'kakao' | null;
  setAccessToken: (token: string, provider: 'google' | 'kakao') => void;
  clearAccessToken: () => void;
};

const useAuthStore = create<AuthStoreType>((set) => ({
  accessToken: null,
  provider: null,
  setAccessToken: (token: string, provider: 'google' | 'kakao') =>
    set({ accessToken: token, provider }),
  clearAccessToken: () => set({ accessToken: null, provider: null }),
}));

export { useAuthStore };
