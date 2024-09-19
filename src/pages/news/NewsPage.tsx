/* eslint-disable */

import { useCallback, useEffect, useState } from 'react';
import { Outlet, useNavigate, useParams } from 'react-router-dom';

import DetailPageLayout from '@/components/common/layout/DetailPageLayout';
import WizNews from '@/components/wiz-news/WizNews';
import { useAxios } from '@/hooks/useAxios';
import topImg from '@/assets/wiz-news/top_sub_bg.png';

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
  const { tab, id } = useParams();
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
    } else {
      navigate('/news/wiznews', { replace: true });
    }
  }, [tab, navigate]);

  const urls = [
    `/article/newslistpage?itemCount=100&pageNum=${currentPage}&searchWord=${searchWord}`,
    `/article/wizpresslistpage?itemCount=100&pageNum=${currentPage}&searchWord=${searchWord}`,
    `/article/navernewslist?date=20240918`,
  ];

  // eslint-disable-next-line prefer-const
  const processData = (responseData: any) => {
    if (activeTab === 2) {
      // navernewslist 데이터
      return responseData.list || [];
    } else {
      // newslistpage와 wizpresslist 데이터
      return responseData.data?.list || [];
    }
  };

  const { data, isLoading, isError, error, handleRequest } = useAxios({
    url: urls[activeTab],
    method: 'GET',
    initialData: [],
    shouldFetchOnMount: true,
    processData,
  });

  // 검색어 및 페이지 변경 시 API 요청
  useEffect(() => {
    handleRequest();
    // eslint-disable-next-line prefer-const
  }, [searchWord, currentPage, activeTab]);

  // 탭 변경 시 라우팅 처리 및 API 재요청
  const tabChangeHandler = useCallback(
    (index: number) => {
      navigate(`/news/${tabs[index].path}`);
      setActiveTab(index);
      setCurrentPage(1);
      setSearchWord(''); // 검색어 초기화
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

  // 데이터 확인용 로그
  useEffect(() => {
    if (data) {
      if (activeTab === 2 && data.list) {
        console.log('NaverNews List:', data.list);
      } else if (data.data?.list) {
        console.log('WizNews List:', data.data.list);
      }
    }
  }, [data, activeTab]);

  return (
    <DetailPageLayout
      topImg={topImg}
      title="Wiz 뉴스"
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
          onPageChange={pageChangeHandler}
          onSearch={searchHandler}
        />
      )}
    </DetailPageLayout>
  );
};

export default NewsPage;
