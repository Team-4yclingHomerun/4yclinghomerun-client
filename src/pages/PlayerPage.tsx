import { useCallback, useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import topImg from '@/assets/player/Banner_player.webp';
import { playerTabs } from '@/mocks/player/playerTabs';
import { ROUTER_PATH } from '@/constants/constant';

import DetailPageLayout from '@/common/DetailPageLayout';

const { COACH } = ROUTER_PATH;

const PlayerPage = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [subTitle, setSubTitle] = useState(playerTabs[0].subTitle);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const currentTab = playerTabs.findIndex((tab) =>
      location.pathname.startsWith(tab.path),
    );

    if (currentTab !== -1) {
      setActiveTab(currentTab);
      setSubTitle(playerTabs[currentTab].subTitle);
    } else {
      navigate(COACH, { replace: true });
    }
  }, [location.pathname, navigate]);

  const handleTabChange = useCallback(
    (index: number) => {
      navigate(playerTabs[index].path);
    },
    [navigate],
  );

  return (
    <>
      <DetailPageLayout
        topImg={topImg}
        title="Player"
        subTitle={subTitle}
        tabs={playerTabs}
        activeTab={activeTab}
        onTabChange={handleTabChange}
      >
        <Outlet />
      </DetailPageLayout>
    </>
  );
};

export default PlayerPage;
