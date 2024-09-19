import { Outlet } from 'react-router-dom';

import NavigationBar from '@/components/header/NavigationBar';
import ScrollToTop from '@/components/common/ScrollToTop';

const Layout = () => {
  return (
    <div className="relative min-h-screen">
      <ScrollToTop />
      <NavigationBar />
      <main className="min-h-screen flex-grow">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
