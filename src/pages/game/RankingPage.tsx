import { useEffect, useState } from 'react';

import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';

import { cn } from '@/utils/cn';
import { gameRankingTabs } from '@/data/GameRankingTabsData';
import { ROUTER_PATH } from '@/constants/constant';

const RankingPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [currentPath, setCurrentPath] = useState(location.pathname);

  useEffect(() => {
    if (location.pathname === ROUTER_PATH.GAME_RANKING) {
      navigate(ROUTER_PATH.GAME_RANKING_TEAM, { replace: true });
    } else {
      setCurrentPath(location.pathname);
    }
  }, [location, navigate]);

  return (
    <>
      <ul className="flex flex-wrap border-b-2 border-kt-gray-2 text-center text-kt-gray-2">
        {gameRankingTabs.map((item) => {
          return (
            <li key={item.name} className="me-1">
              <Link
                to={item.path}
                className={cn(
                  'inline-block px-4 py-2',
                  currentPath === item.path
                    ? 'bg-kt-red-3 text-kt-white'
                    : 'bg-kt-gray-2 text-kt-black-1 hover:opacity-80',
                )}
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
      <div className="pt-10">
        <Outlet />
      </div>
    </>
  );
};

export default RankingPage;
