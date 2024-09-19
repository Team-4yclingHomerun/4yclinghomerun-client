import { useEffect, useState } from 'react';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import ScheduleItem from './ScheduleItem';
import { CustomNextArrow, CustomPrevArrow } from './ArrowButton';
import { ScheduleItems } from '@/types/ScheduleType';
import '@/styles/carousel/ScheduleCarousel.css';

const ScheduleCarousel = ({ schedules }: ScheduleItems) => {
  const [slidesToShow, setSlidesToShow] = useState(3);
  const [upcomingGameIndex, setUpcomingGameIndex] = useState(-1);

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

  // 디기오는 경기 찾기
  useEffect(() => {
    const now = new Date();
    let closestIndex = -1;
    let closestDiff = Infinity;

    schedules.forEach((schedule, index) => {
      const gameDateTime = new Date(`${schedule.date}T${schedule.time}`);

      if (gameDateTime > now) {
        const diff = gameDateTime.getTime() - now.getTime();
        if (diff < closestDiff) {
          closestDiff = diff;
          closestIndex = index;
        }
      }
    });

    setUpcomingGameIndex(closestIndex);
  }, [schedules]);

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

  return (
    <div className="max-w-full px-4">
      <Slider {...settings}>
        {schedules.map((schedule, index) => (
          <div key={index} className="px-4">
            <ScheduleItem
              {...schedule}
              isUpcoming={index === upcomingGameIndex}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ScheduleCarousel;
