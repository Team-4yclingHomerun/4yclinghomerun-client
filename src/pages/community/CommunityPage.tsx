import { useCallback, useEffect, useState } from 'react';

import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import topImg from '@/assets/community/top_img.jpg';
import DetailPageLayout from '@/components/common/layout/DetailPageLayout';
import { ROUTER_PATH } from '@/constants/constant';

const { CHAT } = ROUTER_PATH;

const tabs = [
  {
    name: 'WIZ TALK',
    path: CHAT,
    subTitle: 'kt wiz 팬들과 함께하는 커뮤니티에요.',
  },
];

const CommunityPage = () => {
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
      navigate(CHAT, { replace: true });
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
      tabs={tabs}
      title="KT Wiz 커뮤니티"
      subTitle={subTitle}
      activeTab={activeTab}
      onTabChange={handleTabChange}
    >
      <Outlet />
    </DetailPageLayout>
  );
};

export default CommunityPage;
