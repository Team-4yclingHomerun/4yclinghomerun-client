import useFetch from '@/hooks/useFetch';

import { TestNewsUrl } from '@/api/jsonplaceholderdb';
import { LOGO_URL } from '@/constants/constants';
import { TNewsTest } from '@/types/news';

import ErrorBoundary from '@/components/error/ErrorBoundary';
import NewsArea from '@/components/news/NewsArea';
import NewsError from '@/components/news/NewsError';
import NewsSkeleton from '@/components/news/NewsSkeleton';
import NewsItem from '@/components/news/NewsItem';
import EventSkeleton from '@/components/events/EventSkeleton';
import EventError from '@/components/events/EventError';
import EventArea from '@/components/events/EventArea';
import EventCarousel from '@/components/events/EventCarousel';
import EventItem from '@/components/events/EventItem';

const HomePage = () => {
  const {
    data: events,
    isLoading: isEventLoading,
    isError: isEventError,
  } = useFetch<TNewsTest[]>(TestNewsUrl, []);
  // api 요청값을 4개만 출력되도록 임의로 설정
  const eventTest = events.slice(0, 4);

  const {
    data: news,
    isLoading: isNewsLoading,
    isError: isNewsError,
  } = useFetch<TNewsTest[]>(TestNewsUrl, []);
  // api 요청값을 4개만 출력되도록 임의로 설정
  const newsTest = news.slice(0, 4);

  return (
    <>
      {isEventLoading ? (
        <EventSkeleton />
      ) : (
        <ErrorBoundary fallback={<EventError />}>
          <EventArea title="EVENTS" isError={isEventError} logoUrl={LOGO_URL}>
            <EventCarousel>
              {eventTest.map((item) => (
                <EventItem key={item.id} items={item} />
              ))}
            </EventCarousel>
          </EventArea>
        </ErrorBoundary>
      )}

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
