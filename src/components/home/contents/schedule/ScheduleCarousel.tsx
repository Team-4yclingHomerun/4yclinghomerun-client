import { useEffect, useState } from 'react';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import ScheduleItem from './ScheduleItem';
import { CustomNextArrow, CustomPrevArrow } from './ArrowButton';
import { GetWeekSchedule } from '@/api/GetWeekSchedule';
import '@/styles/carousel/ScheduleCarousel.css';

const ScheduleCarousel = () => {
  const [slidesToShow, setSlidesToShow] = useState(3);
  const { data, isLoading, isError, error } = GetWeekSchedule();

  // 반응형 슬라이드 개수 설정
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error}</p>;

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow slidesToShow={slidesToShow} />,
    prevArrow: <CustomPrevArrow />,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const firstUpcomingGame = data.data.list.findIndex((game) => !game.status);

  return (
    <div className="max-w-full">
      <Slider {...settings}>
        {data.data.list.map((game, index) => (
          <div key={game.gmkey} className="px-0.5">
            <ScheduleItem
              game={game}
              isFirstUpcoming={index === firstUpcomingGame}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ScheduleCarousel;
