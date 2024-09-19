import { LuCalendarDays } from 'react-icons/lu';
import { IoLocationOutline } from 'react-icons/io5';

import HoverOverlay from '@/common/HoverOverlay';
import { cn } from '@/utils/cn';
import { ScheduleData } from '@/types/ScheduleType';
import { Button } from '@/ui/button/button';

const ScheduleItem = ({
  place,
  date,
  time,
  homeTeamImage,
  awayTeamImage,
  homeTeamName,
  awayTeamName,
  isUpcoming,
}: ScheduleData & { isUpcoming: boolean }) => {
  return (
    <article
      className={cn(
        'relative w-full max-w-md overflow-hidden rounded-lg p-1 shadow-lg transition-all duration-300',
        isUpcoming
          ? 'animate-gradient bg-gradient-to-br from-yellow-400 via-red-700 to-yellow-300'
          : 'animate-gradient bg-gradient-to-br from-[#35383E] to-[#F53232]',
      )}
    >
      <div className="rounded-lg bg-black p-6">
        {isUpcoming && (
          <div className="absolute -left-1 -top-1 flex items-center justify-center rounded-br-lg bg-yellow-400 px-3 py-1 shadow-md">
            <span className="translate-y-1 text-sm font-extrabold text-black">
              NEXT GAME
            </span>
          </div>
        )}
        <header className="mb-10 flex items-center justify-between">
          <div className="flex items-center space-x-2 text-gray-300">
            <IoLocationOutline size={24} />
            <span className="text-lg font-medium">{place}</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-300">
            <LuCalendarDays size={24} />
            <time className="text-lg font-medium" dateTime={date}>
              {date} {time}
            </time>
          </div>
        </header>

        <main className="flex items-center justify-between">
          <section className="flex flex-col items-center space-y-2">
            <img
              src={homeTeamImage}
              alt={homeTeamName}
              className="h-32 w-auto object-contain"
            />
            <span className="text-lg font-semibold text-white">
              {homeTeamName}
            </span>
          </section>

          <div className="flex flex-col items-center">
            <span
              className={cn(
                'text-2xl font-bold',
                isUpcoming ? 'text-yellow-400' : 'text-red-500',
              )}
            >
              VS
            </span>
            <div
              className={cn(
                'mt-2 h-px w-16',
                isUpcoming
                  ? 'bg-gradient-to-r from-transparent via-yellow-400 to-transparent'
                  : 'bg-gradient-to-r from-transparent via-red-500 to-transparent',
              )}
            ></div>
          </div>

          <section className="flex flex-col items-center space-y-2">
            <img
              src={awayTeamImage}
              alt={awayTeamName}
              className="h-32 w-auto object-contain"
            />
            <span className="text-lg font-semibold text-white">
              {awayTeamName}
            </span>
          </section>
        </main>
      </div>

      <HoverOverlay>
        {isUpcoming ? (
          <Button variant="secondary" size="large" className="hover:scale-105">
            경기 정보
          </Button>
        ) : (
          <Button variant="primary" size="large" className="hover:scale-105">
            경기 정보
          </Button>
        )}
      </HoverOverlay>
    </article>
  );
};

export default ScheduleItem;
