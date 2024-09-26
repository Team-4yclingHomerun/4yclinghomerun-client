import { cn } from '@/utils/cn';

const HotColdZoneSkeleton = () => {
  const renderZone = (zone: number, className: string = '') => {
    return <div key={zone} className={cn('rounded bg-gray-700', className)} />;
  };

  return (
    <div className="relative h-52 w-52">
      <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-0.5 bg-kt-gray-2 p-0.5">
        {renderZone(10, 'row-start-1 col-start-1')}
        {renderZone(11, 'row-start-1 col-start-2')}
        {renderZone(12, 'row-start-2 col-start-1')}
        {renderZone(13, 'row-start-2 col-start-2')}
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="grid h-3/5 w-3/5 grid-cols-3 grid-rows-3 gap-0.5 bg-kt-gray-2 p-0.5">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((zone) => renderZone(zone))}
        </div>
      </div>
    </div>
  );
};

export default HotColdZoneSkeleton;
