import { useCallback, useEffect, useState } from 'react';

import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import DetailPageLayout from '@/components/common/layout/DetailPageLayout';
import { ROUTER_PATH } from '@/constants/constant';
import topImg from '@/assets/game/top_img.webp';

const { WIZ_PARK_INTRO, WIZ_PARK_GUIDE } = ROUTER_PATH;

const tabs = [
  {
    name: '구장 소개',
    path: WIZ_PARK_INTRO,
    subTitle: 'suwon kt wiz park를 소개합니다.',
  },
  {
    name: '구장 안내도',
    path: WIZ_PARK_GUIDE,
    subTitle: 'suwon kt wiz park를 소개합니다.',
  },
];

const WizParkPage = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [subTitle, setSubTitle] = useState(tabs[0].subTitle);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const currentTab = tabs.findIndex((tab) =>
      location.pathname.startsWith(tab.path),
    );

    if (currentTab !== -1) {
      setActiveTab(currentTab);
      setSubTitle(tabs[currentTab].subTitle);
    } else {
      navigate(WIZ_PARK_INTRO, { replace: true });
    }
  }, [location.pathname, navigate]);

  const handleTabChange = useCallback(
    (index: number) => {
      navigate(tabs[index].path);
    },
    [navigate],
  );

  return (
    <DetailPageLayout
      topImg={topImg}
      title="Suwon kt wiz park"
      subTitle={subTitle}
      tabs={tabs}
      activeTab={activeTab}
      onTabChange={handleTabChange}
    >
      <Outlet />
    </DetailPageLayout>
  );
};

export default WizParkPage;
