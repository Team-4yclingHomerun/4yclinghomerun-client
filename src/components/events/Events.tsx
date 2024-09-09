import useFetch from '@/hooks/useFetch';
import { TestEventsUrl } from '@/api/jsonplaceholderdb';
import { LOGO_URL } from '@/constants/constants';
import { TEvents } from '@/types/events';
import { MockEvents } from '@/mocks/home/MockEvents';

import { CustomNextArrow, CustomPrevArrow } from './ArrowButton';
import ErrorBoundary from '../error/ErrorBoundary';
import EventArea from './EventArea';
import EventCarousel from './EventCarousel';
import EventError from './EventError';
import EventItem from './EventItem';
import EventSkeleton from './EventSkeleton';

import CarouselNavbar from './CarouselNavbar';

const Events = () => {
  /*실제 api 요청시 사용할 코드*/
  const { isLoading: isEventLoading, isError: isEventError } = useFetch<
    TEvents[]
  >(TestEventsUrl, []);

  const defaultSettings = {
    customPaging: function (i: number) {
      return (
        <a>
          <CarouselNavbar items={MockEvents[i]} />
        </a>
      );
    },
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    focusOnSelect: true,
    pauseOnFocue: true,
    arrows: true,
    dotsClass: 'custom-dots',
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  return (
    <>
      {isEventLoading ? (
        <EventSkeleton />
      ) : (
        <ErrorBoundary fallback={<EventError />}>
          <EventArea title="EVENTS" isError={isEventError} logoUrl={LOGO_URL}>
            <EventCarousel settings={defaultSettings}>
              {MockEvents.map((item) => (
                <EventItem key={item.id} items={item} />
              ))}
            </EventCarousel>
          </EventArea>
        </ErrorBoundary>
      )}
    </>
  );
};
export default Events;
