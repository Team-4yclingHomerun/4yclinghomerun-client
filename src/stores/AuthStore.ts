import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
// import axios from 'axios';

type Provider = 'google' | 'kakao' | 'general';

type AuthStoreType = {
  accessToken: string | null;
  provider: Provider | null;
  setAccessToken: (token: string, provider: Provider) => void;
  clearAccessToken: () => void;
  // refreshToken: () => Promise<string | null>;
};

const useAuthStore = create<AuthStoreType>()(
  persist(
    (set) => ({
      accessToken: null,
      provider: null,
      setAccessToken: (token: string, provider: Provider) =>
        set({ accessToken: token, provider }),
      clearAccessToken: () => set({ accessToken: null, provider: null }),
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export { useAuthStore };

// ((set, get) => ({
// accessToken: null,
// provider: null,
// setAccessToken: (token: string, provider: Provider) =>
//   set({ accessToken: token, provider }),
// clearAccessToken: () => set({ accessToken: null, provider: null }),
// refreshToken: async () => {
//   try {
//     const response = await axios.post<{ accessToken: string }>(
//       '/api/refresh-token',
//       {},
//       {
//         withCredentials: true, // 리프레시 토큰이 HttpOnly 쿠키에 있다고 가정
//       },
//     );
//     const newToken = response.data.accessToken;
//     set({ accessToken: newToken });
//     return newToken;
//   } catch (error) {
//     console.error('토큰 갱신 실패:', error);
//     get().clearAccessToken();
//     return null;
//   }
// },
// }));

// axios 인터셉터를 설정하여 401 에러가 발생하면 리프레시 토큰을 사용하여 토큰을 갱신하도록 함
// axios.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     if (error.response && error.response.status === 401) {
//       const newToken = await useAuthStore.getState().refreshToken();
//       if (newToken) {
//         error.config.headers['Authorization'] = `Bearer ${newToken}`;
//         return axios.request(error.config);
//       }
//     }
//     return Promise.reject(error);
//   },
// );
