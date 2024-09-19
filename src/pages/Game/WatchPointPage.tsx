import { useLocation, useNavigate } from 'react-router-dom';

import WatchPointItem from '@/components/game/watchpoint/WatchPointItem';
import WatchPointSkeleton from '@/components/game/watchpoint/WatchPointSkeleton';
import { useScheduleStore } from '@/stores/ScheduleStore';
import { GetMonthSchedule } from '@/api/GetMonthSchedule';
import { GetWatchPoint } from '@/api/GetWatchPoint';

const WatchPointPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { year, month } = useScheduleStore();

  const [gameDate, gmkey] = location.search.substring(1).split('&');

  const { data: monthScheduleData } = GetMonthSchedule(year, month);

  const lastFinishedGame = monthScheduleData?.data.list
    .filter((game) => game.status === '2')
    .pop();

  const finalGameDate = parseInt(
    String(gameDate || lastFinishedGame?.gameDate || '0'),
  );
  const finalGmkey = gmkey || lastFinishedGame?.gmkey || '';

  const {
    data: watchPointData,
    isLoading,
    error,
  } = GetWatchPoint(finalGameDate, finalGmkey);
  if (error) return <div>Error: {error}</div>;
  if (!watchPointData?.data) return <WatchPointSkeleton />;

  const handleNextGame = () => {
    if (watchPointData?.data.schedule.next) {
      const { gameDate: nextGameDate, gmkey: nextGmkey } =
        watchPointData.data.schedule.next;
      navigate(`/game/watchpoint?${nextGameDate}&${nextGmkey}`);
    }
  };

  const handlePrevGame = () => {
    if (watchPointData?.data.schedule.prev) {
      const { gameDate: prevGameDate, gmkey: prevGmkey } =
        watchPointData.data.schedule.prev;
      navigate(`/game/watchpoint?${prevGameDate}&${prevGmkey}`);
    }
  };

  return (
    <div className="flex flex-col gap-12">
      {watchPointData.data &&
        (isLoading ? (
          <WatchPointSkeleton />
        ) : (
          <WatchPointItem
            game={watchPointData.data.gameScore}
            homeGameRecord={watchPointData.data.homeTeamRank}
            awayGameRecord={watchPointData.data.visitTeamRank}
            homeVsRecord={watchPointData.data.homeTeamWinLose}
            awayVsRecord={watchPointData.data.visitTeamWinLose}
            onNextGame={handleNextGame}
            onPrevGame={handlePrevGame}
            hasNextGame={!!watchPointData.data.schedule.next}
            hasPrevGame={!!watchPointData.data.schedule.prev}
          />
        ))}
    </div>
  );
};

export default WatchPointPage;
