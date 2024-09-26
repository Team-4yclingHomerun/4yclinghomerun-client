import { GetPlayerImg } from '@/api/GetPlayerImg';
import { WatchPointPlayerLineupType } from '@/types/WatchPointType';
import { cn } from '@/utils/cn';

type PlayerCardProps = {
  player: WatchPointPlayerLineupType;
  isKtwiz: boolean;
  isKeyPlayer: boolean;
};

const PlayerCard = ({ player, isKtwiz, isKeyPlayer }: PlayerCardProps) => {
  const { imageUrl, isLoading } = GetPlayerImg(player.pcode);

  return (
    <div
      className={cn(
        'rounded-md p-1',
        isKtwiz &&
          !isKeyPlayer &&
          'animate-gradient bg-gradient-to-tr from-gray-900 via-red-500 to-gray-700',
        isKeyPlayer &&
          'animate-gradient bg-gradient-to-tr from-yellow-600 via-yellow-200 to-orange-700',
      )}
    >
      <div
        className={cn(
          'flex items-stretch overflow-hidden rounded-md',
          isKtwiz ? 'bg-black' : 'bg-kt-black-4',
          isKeyPlayer && 'bg-yellow-700',
        )}
      >
        <div className="flex w-12 items-center justify-center bg-red-700 bg-opacity-80 font-bold text-white">
          {player.seq}
        </div>

        <div className="flex flex-1 items-center px-4 py-2">
          {isLoading ? (
            <div className="h-12 w-12 rounded-md bg-gray-700 object-cover"></div>
          ) : (
            <img
              src={imageUrl}
              alt={player.playerName}
              className="h-12 w-12 rounded-md object-cover"
            />
          )}
          <div className="ml-4 flex flex-1 items-center">
            <p className="flex-1 text-xl font-extrabold text-white">
              {player.playerName}
            </p>
            <p className="ml-2 whitespace-nowrap text-sm text-gray-300">
              {player.hittype}
            </p>
          </div>
        </div>

        <p
          className={cn(
            'flex w-14 items-center justify-center font-extrabold text-gray-300',
            isKeyPlayer ? 'bg-yellow-800' : 'bg-red-900 bg-opacity-70',
          )}
        >
          {player.posidName}
        </p>
      </div>
    </div>
  );
};

export default PlayerCard;
