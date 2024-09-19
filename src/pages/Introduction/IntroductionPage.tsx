import { useCallback, useEffect, useState } from 'react';

import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import DetailPageLayout from '@/components/common/layout/DetailPageLayout';
import { ROUTER_PATH } from '@/constants/constant';

const { INTRODUCE_ABOUT, INTRODUCE_HISTORY } = ROUTER_PATH;

const tabs = [
  {
    name: '구단 소개',
    path: INTRODUCE_ABOUT,
    subTitle: '한국 프로야구의 ‘10번째 심장’ kt wiz를 소개합니다!',
  },
  {
    name: '구단 연혁',
    path: INTRODUCE_HISTORY,
    subTitle: '한국 프로야구의 ‘10번째 심장’ kt wiz를 소개합니다!',
  },
];

const IntroductionPage = () => {
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
      navigate(INTRODUCE_ABOUT, { replace: true });
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
      topImg="https://wizzap.ktwiz.co.kr/files//wallpaper//2024/08/29/20240829164441.211-b25ba5e7f6a0.jpg"
      title="kt wiz는?"
      subTitle={subTitle}
      tabs={tabs}
      activeTab={activeTab}
      onTabChange={handleTabChange}
    >
      <Outlet />
    </DetailPageLayout>
  );
};

export default IntroductionPage;
