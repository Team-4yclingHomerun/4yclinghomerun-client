import { PitchKindStatType } from '@/types/WatchPointType';
import { cn } from '@/utils/cn';

type PitchTypeBarProps = {
  stats: PitchKindStatType[];
  side: 'left' | 'right';
};

const PitchTypeBar = ({ stats, side }: PitchTypeBarProps) => {
  const formattedPitchType = (
    type: string,
  ): { type: string; color: string } => {
    const pitchType: { [key: string]: { type: string; color: string } } = {
      FAST: { type: '직구', color: '#185680' },
      CHUP: { type: '체인지업', color: '#1d7040' },
      CURV: { type: '커브', color: '#643c1f' },
      SLID: { type: '슬라이더', color: '#7177f9' },
      CUTT: { type: '커터', color: '#9a9eed' },
      SINK: { type: '싱커', color: '#7d826d' },
      FORK: { type: '포크', color: '#566158' },
      KNUC: { type: '너클볼', color: '#7ED321' },
      FOSH: { type: '포심', color: '#dddbd4' },
      TWOS: { type: '투심', color: '#c2c1c1' },
    };
    return pitchType[type] || { type, color: '#808080' };
  };

  const roundedStats = stats.map((stat) => ({
    ...stat,
    pit_rt: Math.round(stat.pit_rt),
  }));
  const totalPercent = roundedStats.reduce((sum, stat) => sum + stat.pit_rt, 0);
  const otherPercent = Math.max(0, 100 - totalPercent);

  let accumulatedHeight = 0;

  return (
    <div
      className={cn(
        'flex w-32 flex-col',
        side === 'left' ? 'items-end' : 'items-start',
      )}
    >
      <div className="relative h-96 w-full">
        {roundedStats.map((stat, index) => {
          const { type, color } = formattedPitchType(stat.type);
          const height = `${stat.pit_rt}%`;
          const top = `${accumulatedHeight}%`;
          accumulatedHeight += stat.pit_rt;

          return (
            <div
              key={index}
              className="absolute w-full"
              style={{ height, top, background: color }}
            >
              <div
                className={cn(
                  'absolute top-1/2 -translate-y-1/2 transform text-base',
                  side === 'left'
                    ? 'right-full pr-4 text-right'
                    : 'left-full pl-4 text-left',
                )}
              >
                {type} {stat.speed}km/h
              </div>
              <div className="absolute inset-0 flex items-center justify-center text-xl font-bold text-white">
                {stat.pit_rt}%
              </div>
            </div>
          );
        })}

        {/* 그 외 */}
        {otherPercent > 5 && (
          <div
            className="absolute w-full bg-gray-500"
            style={{
              height: `${otherPercent}%`,
              top: `${accumulatedHeight}%`,
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center text-xl font-bold text-white">
              {Math.round(otherPercent)}%
            </div>
            <div
              className={cn(
                'absolute top-1/2 -translate-y-1/2 transform whitespace-nowrap text-base',
                side === 'left'
                  ? 'right-full pr-4 text-right'
                  : 'left-full pl-4 text-left',
              )}
            >
              그 외
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PitchTypeBar;
