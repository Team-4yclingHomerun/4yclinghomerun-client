import useFetch from '@/hooks/useFetch';

import { TestNewsUrl } from '@/api/jsonplaceholderdb';
import { LOGO_URL } from '@/constants/constants';
import { TNewsTest } from '@/types/news';

import ErrorBoundary from '@/components/error/ErrorBoundary';
import NewsArea from '@/components/news/NewsArea';
import NewsError from '@/components/news/NewsError';
import NewsSkeleton from '@/components/news/NewsSkeleton';
import NewsItem from '@/components/news/NewsItem';

const HomePage = () => {
  const {
    data: news,
    isLoading: isNewsLoading,
    isError: isnewsError,
  } = useFetch<TNewsTest[]>(TestNewsUrl, []);
  // api 요청값을 4개만 출력되도록 임의로 설정
  const newsTest = news.slice(0, 4);

  return (
    <>
      {isNewsLoading ? (
        <NewsSkeleton />
      ) : (
        <ErrorBoundary fallback={<NewsError />}>
          <NewsArea
            title="NEWS"
            isError={isnewsError}
            logoUrl={LOGO_URL}
            link="/news"
          >
            {newsTest.map((item) => (
              <NewsItem key={item.id} items={item} />
            ))}
          </NewsArea>
        </ErrorBoundary>
      )}
    </>
  );
};

export default HomePage;
