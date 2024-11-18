import { NavLink, useNavigate } from 'react-router-dom';

import { useAuthStore } from '@/stores/AuthStore';
import { cn } from '@/utils/cn';

const NavigationBarAuth = () => {
  const navigate = useNavigate();
  const { accessToken, clearAccessToken } = useAuthStore();

  const handleLogout = () => {
    clearAccessToken();
    navigate('/');
  };

  return (
    <div className="absolute right-6 top-6">
      {accessToken ? (
        <>
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              cn(
                'mr-2 rounded-md border border-white px-2 py-1.5 text-lg font-extrabold transition-colors duration-300',
                isActive
                  ? 'bg-white text-red-800 hover:border hover:border-white hover:bg-transparent hover:text-white'
                  : 'hover:border hover:border-white hover:bg-white hover:text-red-800',
              )
            }
          >
            내 정보
          </NavLink>
          <button
            onClick={handleLogout}
            className="rounded-md border border-white px-2 py-1.5 text-lg font-extrabold transition-colors duration-300 hover:border hover:border-white hover:bg-white hover:text-red-800"
          >
            LOGOUT
          </button>
        </>
      ) : (
        <NavLink
          to="/login"
          className={({ isActive }) =>
            cn(
              'rounded-md border border-white px-2 py-1.5 text-lg font-extrabold transition-colors duration-300',
              isActive
                ? 'bg-white text-red-800 hover:border hover:border-white hover:bg-transparent hover:text-white'
                : 'hover:border hover:border-white hover:bg-white hover:text-red-800',
            )
          }
        >
          LOGIN
        </NavLink>
      )}
    </div>
  );
};

export default NavigationBarAuth;
