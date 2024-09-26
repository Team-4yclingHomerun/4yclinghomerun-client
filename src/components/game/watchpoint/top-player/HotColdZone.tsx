import { TopPlayerHotColdZoneType } from '@/types/WatchPointType';
import { cn } from '@/utils/cn';

type HotColdZoneProps = {
  data: TopPlayerHotColdZoneType[];
};

const HotColdZone = ({ data }: HotColdZoneProps) => {
  // 타율에 따른 색깔 변경
  const getColorByStep = (hra: string) => {
    const hraNumber = parseFloat(hra);
    if (hraNumber >= 0.4) return 'bg-red-700';
    if (hraNumber >= 0.3) return 'bg-red-500';
    if (hraNumber >= 0.2) return 'bg-sky-500';
    if (hraNumber >= 0.1) return 'bg-sky-600';
    return 'bg-sky-800';
  };

  // 바깥쪽 포지션은 가운데가 아니도록 함
  const getTextPosition = (zone: number) => {
    switch (zone) {
      case 10:
        return 'top-2 left-2';
      case 11:
        return 'top-2 right-2';
      case 12:
        return 'bottom-2 left-2';
      case 13:
        return 'bottom-2 right-2';
      default:
        return 'inset-0';
    }
  };

  // zone에 해당하는 데이터 표시
  const renderZone = (zone: number, className: string = '') => {
    const zoneData = data.find((item) => item.zone === zone);
    if (!zoneData)
      return <div key={zone} className={cn('bg-gray-700', className)} />;

    const textPosition = getTextPosition(zone);

    return (
      <div
        key={zone}
        className={cn('relative', getColorByStep(zoneData.hra), className)}
        title={`타율: ${zoneData.hra}, 삼진: ${zoneData.kk}`}
      >
        <span
          className={cn(
            'absolute flex items-center justify-center p-2 text-xs font-bold text-white',
            textPosition,
            zone <= 9 && 'h-full w-full',
          )}
        >
          {zoneData.hra}
        </span>
      </div>
    );
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

export default HotColdZone;
