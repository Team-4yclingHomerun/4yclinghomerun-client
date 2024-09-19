import React from 'react';

import { cn } from '@/utils/cn';

type CustomArrowProps = {
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  currentSlide?: number;
  slideCount?: number;
  slidesToShow?: number;
};

const CustomNextArrow = ({
  className,
  style,
  onClick,
  currentSlide,
  slideCount,
  slidesToShow,
}: CustomArrowProps) => {
  const isLastSlide = currentSlide === slideCount! - slidesToShow!;

  return (
    <div
      className={cn(
        'custom-arrow custom-next-arrow',
        isLastSlide ? 'arrow-disabled' : '',
        className,
      )}
      style={style}
      onClick={isLastSlide ? undefined : onClick}
    />
  );
};

const CustomPrevArrow = ({
  className,
  style,
  onClick,
  currentSlide,
}: CustomArrowProps) => {
  const isFirstSlide = currentSlide === 0;

  return (
    <div
      className={cn(
        'custom-arrow custom-prev-arrow',
        isFirstSlide ? 'arrow-disabled' : '',
        className,
      )}
      style={style}
      onClick={isFirstSlide ? undefined : onClick}
    />
  );
};

export { CustomNextArrow, CustomPrevArrow };
