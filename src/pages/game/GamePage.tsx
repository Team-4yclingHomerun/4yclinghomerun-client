import { useCallback, useEffect, useState } from 'react';

import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import topImg from '@/assets/game/top.webp';
import DetailPageLayout from '@/components/common/layout/DetailPageLayout';
import { gameTabs } from '@/mocks/game/GameTabs';

const GamePage = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [subTitle, setSubTitle] = useState(gameTabs[0].subTitle);
  const navigate = useNavigate();
  const location = useLocation();

  // 현재 페이지가 어떤 탭에 속하는지 확인
  useEffect(() => {
    const currentTab = gameTabs.findIndex((tab) =>
      location.pathname.startsWith(tab.path),
    );

    if (currentTab !== -1) {
      setActiveTab(currentTab);
      setSubTitle(gameTabs[currentTab].subTitle);
    } else {
      navigate('/game/schedule', { replace: true });
    }
  }, [location.pathname, navigate]);

  // 탭 변경 시 페이지 이동
  const handleTabChange = useCallback(
    (index: number) => {
      navigate(gameTabs[index].path);
    },
    [navigate],
  );

  return (
    <DetailPageLayout
      topImg={topImg}
      title="정규 리그"
      subTitle={subTitle}
      tabs={gameTabs}
      activeTab={activeTab}
      onTabChange={handleTabChange}
    >
      <Outlet />
    </DetailPageLayout>
  );
};

export default GamePage;
