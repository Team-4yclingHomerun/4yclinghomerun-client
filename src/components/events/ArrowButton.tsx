import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';

import { cn } from '@/utils/cn';

type TArrowProps = {
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
};

const NextArrow = ({ className, style, onClick }: TArrowProps) => {
  return (
    <div className={cn('', className)} style={style} onClick={onClick}>
      <MdArrowForwardIos />
    </div>
  );
};

const PrevArrow = ({ className, style, onClick }: TArrowProps) => {
  return (
    <div className={cn('', className)} style={style} onClick={onClick}>
      <MdArrowBackIos />
    </div>
  );
};

export { NextArrow, PrevArrow };
