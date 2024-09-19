import { Outlet } from 'react-router-dom';

import NavigationBar from '@/components/header/NavigationBar';

const Layout = () => {
  return (
    <div className="relative min-h-screen">
      <NavigationBar />
      <main className="min-h-screen flex-grow">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
