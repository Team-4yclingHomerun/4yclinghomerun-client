/* eslint-disable */
import { useCallback, useEffect, useState } from 'react';

import { Outlet, useNavigate, useParams } from 'react-router-dom';

import DetailPageLayout from '@/components/common/layout/DetailPageLayout';
import WizNews from '@/components/wiz-news/WizNews';
import { useAxios } from '@/hooks/useAxios';
import topImg from '@/assets/wiz-news/top_sub_bg.png';

import {
  APINaverNewsItemList,
  APIWizNewsItemList,
  TNaverNewsItem,
  TWizNewsItem,
} from '@/types/wizNews';

const tabs = [
  {
    name: 'wiz소식',
    path: 'wiznews',
    subTitle: 'kt wiz의 새소식을 발빠르게 전해 드립니다.',
  },
  {
    name: 'wiz보도자료',
    path: 'wizpress',
    subTitle: 'kt wiz의 공식 보도자료를 통해 팀의 다양한 소식을 확인해 보세요.',
  },
  {
    name: 'wiz뉴스룸',
    path: 'navernews',
    subTitle: 'kt wiz의 최신 뉴스와 미디어 보도를 한눈에 만나보세요.',
  },
];

const NewsPage = () => {
  const { tab = '', id } = useParams();
  const [activeTab, setActiveTab] = useState(0);
  const [subTitle, setSubTitle] = useState(tabs[0].subTitle);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchWord, setSearchWord] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const currentTab = tabs.findIndex((t) => t.path === tab);

    if (currentTab !== -1) {
      setActiveTab(currentTab);
      setSubTitle(tabs[currentTab].subTitle);
      setCurrentPage(1);
      setSearchWord('');
    } else {
      navigate('/news/wiznews', { replace: true });
    }
  }, [tab, navigate]);

  const urls = [
    `/article/newslist?searchWord=${searchWord}`,
    `/article/wizpresslist?searchWord=${searchWord}`,
    `/article/navernewslist`,
  ];

  const { data, isLoading, isError, error, handleRequest } = useAxios<
    TNaverNewsItem[] | TWizNewsItem[]
  >({
    url: urls[activeTab],
    method: 'GET',
    initialData: [],
    shouldFetchOnMount: true,
    processData: (responseData): TNaverNewsItem[] | TWizNewsItem[] => {
      if (activeTab === 2) {
        const naverData = responseData as unknown as APINaverNewsItemList;
        return naverData.list || [];
      } else {
        const wizData = responseData as unknown as APIWizNewsItemList;
        return wizData.data?.list || [];
      }
    },
  });

  useEffect(() => {
    handleRequest();
    // eslint-disable-next-line prefer-const
  }, [searchWord, currentPage, activeTab]);

  const tabChangeHandler = useCallback(
    (index: number) => {
      navigate(`/news/${tabs[index].path}`);
      setActiveTab(index);
      setSubTitle(tabs[index].subTitle);
      setCurrentPage(1);
      searchHandler('');
    },
    [navigate],
  );

  const pageChangeHandler = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const searchHandler = (newSearchWord: string) => {
    setSearchWord(newSearchWord);
    setCurrentPage(1);
  };

  return (
    <DetailPageLayout
      topImg={topImg}
      title={tabs[activeTab].name}
      subTitle={subTitle}
      tabs={tabs}
      activeTab={activeTab}
      onTabChange={tabChangeHandler}
    >
      {id ? (
        // 상세 페이지 렌더링
        <Outlet />
      ) : (
        <WizNews
          newsList={data}
          isLoading={isLoading}
          isError={isError}
          error={error}
          currentPage={currentPage}
          totalPages={20}
          tab={tab}
          onPageChange={pageChangeHandler}
          onSearch={searchHandler}
        />
      )}
    </DetailPageLayout>
  );
};

export default NewsPage;
