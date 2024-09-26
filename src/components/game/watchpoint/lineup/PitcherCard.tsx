import { GetPlayerImg } from '@/api/GetPlayerImg';
import { PitchInfoType } from '@/types/WatchPointType';
import { cn } from '@/utils/cn';

type PitcherCardProps = {
  pitcherInfo: PitchInfoType;
  isKtwiz: boolean;
};

const PitcherCard = ({ pitcherInfo, isKtwiz }: PitcherCardProps) => {
  const { imageUrl, isLoading } = GetPlayerImg(pitcherInfo.pCode);

  return (
    <div
      className={cn(
        'mt-2 rounded-md p-1',
        isKtwiz &&
          'animate-gradient bg-gradient-to-tr from-gray-900 via-red-500 to-gray-700',
      )}
    >
      <div
        className={cn(
          'flex items-stretch overflow-hidden rounded-md',
          isKtwiz ? 'bg-kt-black-4' : 'bg-gray-800',
        )}
      >
        <div className="flex w-12 items-center justify-center bg-orange-800 font-bold text-white">
          투수
        </div>

        <div className="flex flex-1 items-center px-4 py-2">
          {isLoading ? (
            <div className="h-12 w-12 rounded-md bg-gray-700 object-cover"></div>
          ) : (
            <img
              src={imageUrl}
              alt={pitcherInfo.name}
              className="h-12 w-12 rounded-md object-cover"
            />
          )}
          <div className="ml-4 flex flex-1 items-center">
            <p className="flex-1 truncate text-xl font-extrabold text-white">
              {pitcherInfo.name}
            </p>
            <p className="ml-2 whitespace-nowrap text-sm text-gray-300">
              {pitcherInfo.hitType}
            </p>
          </div>
        </div>

        <p className="flex w-14 items-center justify-center bg-red-900 bg-opacity-70 font-extrabold text-gray-300">
          SP
        </p>
      </div>
    </div>
  );
};

export default PitcherCard;
