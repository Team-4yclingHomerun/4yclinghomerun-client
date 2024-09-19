import { cn } from '@/utils/cn';

type CustomArrowProps = {
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
};

const CustomNextArrow = ({ className, style, onClick }: CustomArrowProps) => {
  return (
    <div
      className={cn('custom-arrow custom-next-arrow', className)}
      style={style}
      onClick={onClick}
    />
  );
};

const CustomPrevArrow = ({ className, style, onClick }: CustomArrowProps) => {
  return (
    <div
      className={cn('custom-arrow custom-prev-arrow', className)}
      style={style}
      onClick={onClick}
    />
  );
};

export { CustomNextArrow, CustomPrevArrow };
