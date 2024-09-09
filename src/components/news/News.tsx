import useFetch from '@/hooks/useFetch';
import { TNews } from '@/types/news';
import { LOGO_URL } from '@/constants/constants';
import { MockNews } from '@/mocks/home/MockNews';
import { TestNewsUrl } from '@/api/jsonplaceholderdb';

import ErrorBoundary from '../error/ErrorBoundary';
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
          <NewsArea
            title="NEWS"
            isError={isNewsError}
            logoUrl={LOGO_URL}
            link="/news"
          >
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
