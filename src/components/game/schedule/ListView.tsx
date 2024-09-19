import { useState, useEffect } from 'react';

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import ListSkeleton from './ListSkeleton';
import { useCalendarGenerate } from '@/hooks/useCalendarGenerate';
import { cn } from '@/utils/cn';
import { GetMonthSchedule } from '@/api/GetMonthSchedule';
import { KtWizMonthSchedule } from '@/types/ScheduleType';
import { useScheduleStore } from '@/stores/ScheduleStore';

const ListView = () => {
  const [showSkeleton, setShowSkeleton] = useState(true);
  const { year, month } = useScheduleStore();
  const { flatDays } = useCalendarGenerate(year, month);
  const { data, isLoading, isError, error } = GetMonthSchedule(year, month);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSkeleton(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading || showSkeleton) return <ListSkeleton />;
  if (isError) return <div>Error: {error}</div>;

  const scheduleMap = data.data.list.reduce(
    (acc, game) => {
      const gameDate = new Date(
        game.gameDate.toString().replace(/(\d{4})(\d{2})(\d{2})/, '$1-$2-$3'),
      );

      const day = gameDate.getDate();
      acc[day] = game;
      return acc;
    },
    {} as Record<number, KtWizMonthSchedule>,
  );

  // 경기가 있는 날짜만 필터링
  const gamesInMonth = flatDays.filter((day) => scheduleMap[day]);

  // 경기 일정이 없을 경우
  if (gamesInMonth.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex h-auto items-center justify-center rounded-lg bg-gradient-to-r from-gray-800 to-gray-700 p-10 text-xl font-bold text-white"
      >
        {month}월은 경기 일정이 없습니다.
      </motion.div>
    );
  }

  const resultStyles = {
    승: 'bg-gradient-to-r from-red-400 to-red-500 text-white',
    패: 'bg-gradient-to-r from-blue-400 to-blue-500 text-white',
    무: 'bg-gradient-to-r from-gray-400 to-gray-500 text-black',
    취: 'bg-gradient-to-r from-zinc-600 to-zinc-700 text-white',
  };

  return (
    <div className="space-y-3">
      {gamesInMonth.map((day, index) => {
        const game = scheduleMap[day];
        if (!game) return null;

        const gameDate = new Date(
          game.displayDate.replace(/(\d{4})(\d{2})(\d{2})/, '$1-$2-$3'),
        );
        const year = gameDate.getFullYear();
        const month = gameDate.getMonth() + 1;
        const formattedDate = `${year}년 ${String(month).padStart(2, '0')}월 ${String(gameDate.getDate()).padStart(2, '0')}일`;

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={cn(
              'overflow-hidden rounded-lg bg-gradient-to-r',
              game.home === 'KT'
                ? 'from-gray-900 to-gray-800'
                : 'from-black to-kt-black-4',
            )}
          >
            <div className="mx-10 grid grid-cols-7 items-center">
              <div className="col-span-2 flex items-center space-x-4 text-lg">
                <span className="font-bold text-white">{formattedDate}</span>
                <span className="text-gray-300">{game.gtime}</span>
                <span className="truncate text-gray-300">{game.stadium}</span>
              </div>

              <div className="col-span-3 flex items-center justify-center gap-6">
                <img
                  src={game.home === 'KT' ? game.visitLogo : game.homeLogo}
                  alt={game.home === 'KT' ? game.visit : game.home}
                  className="h-20 w-20 object-contain"
                />
                <span className="max-w-[150px] truncate text-xl font-semibold text-white">
                  {game.matchTeamName}
                </span>
              </div>

              <div className="col-span-1 flex items-center justify-center text-lg font-bold text-white">
                {game.homeScore
                  ? `${game.homeScore} : ${game.visitScore}`
                  : '경기 전'}
              </div>

              <div className="col-span-1 flex items-center justify-center gap-4">
                <span
                  className={cn(
                    'flex h-10 w-10 items-center justify-center rounded-lg text-base font-bold',
                    game.outcome && resultStyles[game.outcome],
                  )}
                >
                  {game.outcome}
                </span>

                <Link to={`/game/boxscore?${game.gameDate}&${game.gmkey}`}>
                  <button className="text-base text-gray-200 transition-colors duration-200 hover:text-gray-400">
                    상세 보기
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default ListView;
