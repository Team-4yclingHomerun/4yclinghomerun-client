import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Layout from './Layout';
import HomePage from '@/pages/HomePage';
import IntroductionPage from '@/pages/IntroductionPage';
import WizParkPage from '@/pages/WizParkPage';
import DirectionPage from '@/pages/DirectionPage';
import GamePage from '@/pages/GamePage';
import PlayerPage from '@/pages/PlayerPage';
import NewsPage from '@/pages/NewsPage';
import LoginPage from '@/pages/LoginPage';
import SingupPage from '@/pages/SignupPage';

const Router = () => {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        { path: '/', element: <HomePage /> },
        { path: '/introduce', element: <IntroductionPage /> },
        { path: '/wiz-park', element: <WizParkPage /> },
        { path: '/direction', element: <DirectionPage /> },
        { path: '/game', element: <GamePage /> },
        { path: '/player', element: <PlayerPage /> },
        { path: '/news', element: <NewsPage /> },
        { path: '/login', element: <LoginPage /> },
        { path: '/signup', element: <SingupPage /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
