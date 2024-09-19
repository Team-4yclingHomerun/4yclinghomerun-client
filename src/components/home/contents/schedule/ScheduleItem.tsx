import { Link } from 'react-router-dom';
import { LuCalendarDays } from 'react-icons/lu';
import { IoLocationOutline } from 'react-icons/io5';

import HoverOverlay from '@/components/common/HoverOverlay';
import { cn } from '@/utils/cn';
import { KtWizMonthSchedule } from '@/types/ScheduleType';
import { Button } from '@/components/common/ui/button/button';

type ScheduleItemProps = {
  game: KtWizMonthSchedule;
  isFirstUpcoming: boolean;
};

const ScheduleItem = ({ game, isFirstUpcoming }: ScheduleItemProps) => {
  const gameDate = new Date(
    game.gameDate.toString().replace(/(\d{4})(\d{2})(\d{2})/, '$1-$2-$3'),
  );
  const year = gameDate.getFullYear();
  const month = gameDate.getMonth() + 1;
  const day = gameDate.getDate();
  const formattedDate = `${year}년 ${String(month).padStart(2, '0')}월 ${String(day).padStart(2, '0')}일`;

  const getGameStatus = () => {
    if (!game.status && isFirstUpcoming) return 'upcoming';
    if (game.status === '2') return 'playing';
    if (game.status === '3') return 'finished';
    return 'scheduled';
  };

  const status = getGameStatus();

  const isActive = status === 'upcoming' || status === 'playing';

  return (
    <article
      className={cn(
        'relative w-full max-w-md animate-gradient overflow-hidden rounded-lg bg-gradient-to-br p-1 shadow-lg transition-all duration-700',
        {
          'from-yellow-500 via-red-500 to-yellow-200': isActive,
          'from-gray-600 to-gray-800': status === 'finished',
          'from-[#35383E] to-[#e92222]': status === 'scheduled',
        },
      )}
    >
      <div className="rounded-lg bg-black p-6">
        {/* 테두리 */}
        {status !== 'scheduled' && (
          <div
            className={cn(
              'absolute -left-1 -top-1 flex items-center justify-center rounded-br-lg px-3 py-1 shadow-md',
              {
                'bg-yellow-500': status === 'upcoming',
                'bg-green-400': status === 'playing',
                'bg-gray-600': status === 'finished',
              },
            )}
          >
            <span
              className={cn(
                'translate-y-1 text-sm font-extrabold',
                status === 'finished' ? 'text-white' : 'text-black',
              )}
            >
              {status === 'upcoming' && 'NEXT GAME'}
              {status === 'playing' && 'PLAYING NOW'}
              {status === 'finished' && 'GAME OVER'}
            </span>
          </div>
        )}

        {/* 헤더 */}
        <header className="flex items-center justify-between">
          <div className="flex items-center space-x-2 text-gray-300">
            <IoLocationOutline size={24} />
            <span className="text-lg font-medium">{game.stadium}</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-300">
            <LuCalendarDays size={24} />
            <time className="text-lg font-medium" dateTime={formattedDate}>
              {formattedDate} {game.gtime}
            </time>
          </div>
        </header>

        {/* 메인 */}
        <main className="flex items-center justify-between">
          <section className="flex flex-col items-center space-y-2">
            <img
              src={game.homeLogo}
              alt={game.home}
              className="h-32 w-auto object-contain"
            />
            <span className="text-lg font-semibold text-white">
              {game.home}
            </span>
          </section>

          {/* vs 및 점수 */}
          <div className="flex flex-col items-center">
            <span
              className={cn('text-2xl font-bold', {
                'text-yellow-400': isActive,
                'text-red-500': status === 'scheduled',
                'text-gray-500': status === 'finished',
              })}
            >
              VS
            </span>
            <div
              className={cn(
                'mt-2 h-px w-16 bg-gradient-to-r from-transparent to-transparent',
                {
                  'via-yellow-400': isActive,
                  'via-red-500': status === 'scheduled',
                  'via-gray-500': status === 'finished',
                },
              )}
            ></div>
            {status === 'finished' && (
              <span className="text-xl font-bold text-gray-400">
                {game.homeScore} : {game.visitScore}
              </span>
            )}
          </div>

          {/* 로고 및 팀명 */}
          <section className="flex flex-col items-center space-y-2">
            <img
              src={game.visitLogo}
              alt={game.visit}
              className="h-32 w-auto object-contain"
            />
            <span className="text-lg font-semibold text-white">
              {game.visit}
            </span>
          </section>
        </main>
      </div>

      <HoverOverlay>
        <Link to={`/game/boxscore?${game.gameDate}&${game.gmkey}`}>
          <Button
            variant={isActive ? 'secondary' : 'primary'}
            size="large"
            className="hover:scale-105"
          >
            경기 정보
          </Button>
        </Link>
      </HoverOverlay>
    </article>
  );
};

export default ScheduleItem;
