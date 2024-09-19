import { ROUTER_PATH } from '@/constants/constant';
import { NavLink } from 'react-router-dom';

const NavigationBarMenu = () => {
  const { INTRODUCE, WIZ_PARK, DIRECTION, GAME, PLAYER, NEWS } = ROUTER_PATH;

  const activeStyle = 'text-rose-500 duration-200 transition-all';

  return (
    <nav className="flex w-full justify-between text-2xl font-bold">
      <ul className="flex w-1/2 justify-between">
        <li>
          <NavLink
            to={INTRODUCE}
            className={({ isActive }) =>
              isActive
                ? activeStyle
                : 'transition-all duration-200 hover:text-rose-400'
            }
          >
            KT WIZ
          </NavLink>
        </li>
        <li>
          <NavLink
            to={WIZ_PARK}
            className={({ isActive }) =>
              isActive
                ? activeStyle
                : 'transition-all duration-200 hover:text-rose-400'
            }
          >
            WIZ PARK
          </NavLink>
        </li>
        <li>
          <NavLink
            to={DIRECTION}
            className={({ isActive }) =>
              isActive
                ? activeStyle
                : 'transition-all duration-200 hover:text-rose-400'
            }
          >
            DIRECTION
          </NavLink>
        </li>
      </ul>
      <div className="w-60" />
      <ul className="flex w-1/2 justify-between">
        <li>
          <NavLink
            to={GAME}
            className={({ isActive }) =>
              isActive
                ? activeStyle
                : 'transition-all duration-200 hover:text-rose-400'
            }
          >
            GAME
          </NavLink>
        </li>
        <li>
          <NavLink
            to={PLAYER}
            className={({ isActive }) =>
              isActive
                ? activeStyle
                : 'transition-all duration-200 hover:text-rose-400'
            }
          >
            PLAYER
          </NavLink>
        </li>
        <li>
          <NavLink
            to={NEWS}
            className={({ isActive }) =>
              isActive
                ? activeStyle
                : 'transition-all duration-200 hover:text-rose-400'
            }
          >
            NEWS
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBarMenu;
