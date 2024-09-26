import { cn } from '@/utils/cn';

type PitchTypeBarSkeletonProps = {
  side: 'left' | 'right';
};

const PitchTypeBarSkeleton = ({ side }: PitchTypeBarSkeletonProps) => {
  return (
    <div
      className={cn(
        'flex w-32 flex-col',
        side === 'left' ? 'items-end' : 'items-start',
      )}
    >
      <div className="relative h-96 w-full">
        {Array.from({ length: 4 }, (_, i) => (
          <div
            key={i}
            className="absolute w-full bg-gray-700"
            style={{ height: '25%', top: `${i * 25}%` }}
          >
            <div
              className={cn(
                'absolute top-1/2 -translate-y-1/2 transform space-y-2 text-base',
                side === 'left'
                  ? 'right-full pr-4 text-right'
                  : 'left-full pl-4 text-left',
              )}
            >
              <div className="h-6 w-16 rounded bg-gray-700"></div>
              <div className="h-6 w-16 rounded bg-gray-700"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PitchTypeBarSkeleton;
