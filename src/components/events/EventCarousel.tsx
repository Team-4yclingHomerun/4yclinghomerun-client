import Slider, { Settings } from 'react-slick';

import { CustomNextArrow, CustomPrevArrow } from './ArrowButton';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '@/styles/EventCarousel.css';

type TEventCarouselProps = {
  children: React.ReactNode;
  settings?: Settings;
};

const EventCarousel = ({ children, settings = {} }: TEventCarouselProps) => {
  const defaultSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  const selectedSettings =
    Object.keys(settings).length > 0 ? settings : defaultSettings;

  return (
    <>
      <Slider {...selectedSettings}>{children}</Slider>
    </>
  );
};

export default EventCarousel;
