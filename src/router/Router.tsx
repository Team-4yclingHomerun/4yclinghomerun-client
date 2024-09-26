import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Layout from './Layout';
import HomePage from '@/pages/HomePage';
import IntroductionPage from '@/pages/Introduction/IntroductionPage';
import WizParkPage from '@/pages/WizParkPage';
import DirectionPage from '@/pages/DirectionPage';
import GamePage from '@/pages/Game/GamePage';
import PlayerPage from '@/pages/player/PlayerPage';
import NewsPage from '@/pages/news/NewsPage';
import LoginPage from '@/pages/LoginPage';
import SingupPage from '@/pages/SignupPage';
import { ROUTER_PATH } from '@/constants/constant';

import IntroductionClub from '@/pages/Introduction/IntroductionClub';
import IntroductionHistory from '@/pages/Introduction/IntroductionHistory';
import SchedulePage from '@/pages/Game/SchedulePage';
import BoxScorePage from '@/pages/Game/BoxScorePage';
import RankingPage from '@/pages/Game/RankingPage';
import WatchPointPage from '@/pages/Game/WatchPointPage';
import NewsDetailPage from '@/pages/news/NewsDetailPage';
import CoachPage from '@/pages/player/coach/CoachPage';
import CoachDetailPage from '@/pages/player/coach/CoachDetailPage';
import PitcherPage from '@/pages/player/pitcher/PitcherPage';
import PitcherDetailPage from '@/pages/player/pitcher/PitcherDetailPage';
import HitterPage from '@/pages/player/hitter/HitterPage';
import CheerPage from '@/pages/player/cheer/CheerPage';
import HitterDetailPage from '@/pages/player/hitter/HitterDetailPage';
import CheerDetailPage from '@/pages/player/cheer/CheerDetailPage';

const Router = () => {
  const {
    HOME,
    INTRODUCE,
    INTRODUCE_ABOUT,
    INTRODUCE_HISTORY,
    WIZ_PARK,
    DIRECTION,
    GAME,
    PLAYER,
    NEWS,
    LOGIN,
    SIGNUP,
  } = ROUTER_PATH;
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        { path: HOME, element: <HomePage /> },
        {
          path: INTRODUCE,
          element: <IntroductionPage />,
          children: [
            { path: INTRODUCE_ABOUT, element: <IntroductionClub /> },
            { path: INTRODUCE_HISTORY, element: <IntroductionHistory /> },
          ],
        },
        { path: WIZ_PARK, element: <WizParkPage /> },
        { path: DIRECTION, element: <DirectionPage /> },
        { path: GAME, element: <GamePage /> },
        {
          path: PLAYER,
          element: <PlayerPage />,
          children: [
            { path: 'coach', element: <CoachPage /> },
            { path: 'coach/detail/:id', element: <CoachDetailPage /> },
            { path: 'pitcher', element: <PitcherPage /> },
            { path: 'pitcher/detail/:id', element: <PitcherDetailPage /> },
            { path: 'hitter', element: <HitterPage /> },
            { path: 'hitter/detail/:id', element: <HitterDetailPage /> },
            { path: 'cheer', element: <CheerPage /> },
            { path: 'cheer/detail/:id', element: <CheerDetailPage /> },
          ],
        },
        { path: NEWS, element: <NewsPage /> },
        {
          path: GAME,
          element: <GamePage />,
          children: [
            { path: 'schedule', element: <SchedulePage /> },
            { path: 'boxscore', element: <BoxScorePage /> },
            { path: 'ranking', element: <RankingPage /> },
            { path: 'watchpoint', element: <WatchPointPage /> },
          ],
        },
        { path: PLAYER, element: <PlayerPage /> },
        {
          path: `${NEWS}/*`,
          element: <NewsPage />,
          children: [{ path: 'detail/:id', element: <NewsDetailPage /> }],
        },
        { path: LOGIN, element: <LoginPage /> },
        { path: SIGNUP, element: <SingupPage /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
