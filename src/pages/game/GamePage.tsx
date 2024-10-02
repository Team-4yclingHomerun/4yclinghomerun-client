import { useCallback, useEffect, useState } from 'react';

import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import topImg from '@/assets/game/top.webp';
import DetailPageLayout from '@/components/common/layout/DetailPageLayout';
import { gameTabs } from '@/mocks/game/GameTabs';

const GamePage = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [activeSubTab, setActiveSubTab] = useState(0);
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
      setActiveTab(index);
      setActiveSubTab(0); // 탭 변경 시 서브탭은 초기화
      if (Array.isArray(gameTabs[index].subTab)) {
        navigate(gameTabs[index].subTab[0].path); // 첫 번째 subTab으로 이동
      } else {
        navigate(gameTabs[index].path);
      }
    },
    [navigate],
  );

  // 서브탭 변경 시 페이지 이동
  const handleSubTabChange = useCallback(
    (subIndex: number) => {
      if (Array.isArray(gameTabs[activeTab].subTab)) {
        setActiveSubTab(subIndex);
        navigate(gameTabs[activeTab].subTab[subIndex].path); // subTab 경로로 이동
        console.log('test');
      }
    },
    [activeTab, navigate],
  );

  return (
    <DetailPageLayout
      topImg={topImg}
      title="정규 리그"
      subTitle={subTitle}
      tabs={gameTabs}
      activeTab={activeTab}
      activeSubTab={activeSubTab}
      onTabChange={handleTabChange}
      onSubTabChange={handleSubTabChange}
    >
      <Outlet />
    </DetailPageLayout>
  );
};

export default GamePage;
