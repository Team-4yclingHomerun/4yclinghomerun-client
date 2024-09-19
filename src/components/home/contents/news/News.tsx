import useFetch from '@/hooks/useFetch';
import { TNews } from '@/types/news';

import { MockNews } from '@/mocks/home/MockNews';
import { TestNewsUrl } from '@/api/jsonplaceholderdb';

import ErrorBoundary from '@/components/error/ErrorBoundary';
import NewsArea from './NewsArea';
import NewsError from './NewsError';
import NewsItem from './NewsItem';
import NewsSkeleton from './NewsSkeleton';

const News = () => {
  /*실제 api 요청시 사용할 코드*/
  const { isLoading: isNewsLoading, isError: isNewsError } = useFetch<TNews[]>(
    TestNewsUrl,
    [],
  );

  return (
    <>
      {isNewsLoading ? (
        <NewsSkeleton />
      ) : (
        <ErrorBoundary fallback={<NewsError />}>
          <NewsArea isError={isNewsError}>
            {MockNews.map((item) => (
              <NewsItem key={item.id} items={item} />
            ))}
          </NewsArea>
        </ErrorBoundary>
      )}
    </>
  );
};
export default News;
