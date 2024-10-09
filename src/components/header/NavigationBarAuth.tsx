import { NavLink } from 'react-router-dom';

import { cn } from '@/utils/cn';

const NavigationBarAuth = () => {
  return (
    <div className="absolute right-6 top-6">
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
    </div>
  );
};

export default NavigationBarAuth;
