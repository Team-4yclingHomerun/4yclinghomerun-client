import { TEvents } from '@/types/events';
import { cn } from '@/utils/cn';

const CarouselNavbar = ({ items }: { items: TEvents }) => {
  const { title, date, kategorie = 'default', description } = items;

  const kategorieBackgroundStyles = {
    default: 'bg-black',
    important: 'bg-kt-red-3',
    event: 'bg-kt-blue',
  };

  const kategorieName = {
    default: '공지사항',
    important: 'KT알림',
    event: '이벤트',
  };

  const kategorieBorderStyle = {
    default: 'border-black border-b-4',
    important: 'border-kt-red-3 border-b-4',
    event: 'border-kt-blue border-b-4',
  };

  return (
    <div
      className={cn(
        'container rounded-md bg-kt-white p-2.5 opacity-70 transition-opacity duration-300 hover:border-b-4 hover:opacity-100',
        kategorieBorderStyle[kategorie],
      )}
    >
      <div
        className={cn(
          'my-2.5 inline-block rounded-lg p-1 text-xs font-bold text-white',
          kategorieBackgroundStyles[kategorie],
        )}
      >
        {kategorieName[kategorie]}
      </div>
      <div className="mb-3.5 block">
        <div className="mb-3 block w-full overflow-hidden text-ellipsis whitespace-nowrap text-2xl leading-relaxed text-black">
          {title}
        </div>
        <div className="mb-3 line-clamp-2 h-10 max-h-12 text-xs leading-relaxed text-black opacity-50">
          {description}
        </div>
        <div className="text-xs text-black">{date}</div>
      </div>
    </div>
  );
};

export default CarouselNavbar;
