import { useEffect, useState } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';

import WatchPointItem from '@/components/game/watchpoint/watchpoint-main/WatchPointItem';
import PitcherStatCompareItem from '@/components/game/watchpoint/pitcher/PitcherStatCompareItem';
import TopPlayerStatCompareItem from '@/components/game/watchpoint/top-player/TopPlayerStatCompareItem';
import SectionHeading from '@/components/common/typography/SectionHeading';
import WatchPointSkeleton from '@/components/game/watchpoint/skeleton/WatchPointSkeleton';
import LineupSkeleton from '@/components/game/watchpoint/skeleton/LineupSkeleton';
import PitcherSkeleton from '@/components/game/watchpoint/skeleton/PitcherSkeleton';
import TopPlayerSkeleton from '@/components/game/watchpoint/skeleton/TopPlayerSkeleton';
import GameLineup from '@/components/game/watchpoint/lineup/GameLineup';
import { GetMonthSchedule } from '@/api/GetMonthSchedule';
import { GetWatchPoint } from '@/api/GetWatchPoint';
import { GetNaverWatchPoint } from '@/api/GetNaverWatchPoint';
import { GAME_STATUS } from '@/constants/constant';
import { useScheduleStore } from '@/stores/ScheduleStore';
import { useLineupStore } from '@/stores/LineupStore';

const WatchPointPage = () => {
  const [finalGameDate, setFinalGameDate] = useState(0);
  const [finalGmkey, setFinalGmkey] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const { year, month } = useScheduleStore();
  const setLineupData = useLineupStore((state) => state.setLineupData);

  const { data: monthScheduleData } = GetMonthSchedule(year, month);
  const {
    data: watchPointData,
    isLoading: watchPointLoading,
    error: watchPointError,
  } = GetWatchPoint(finalGameDate, finalGmkey);

  const {
    data: naverWatchPointData,
    isLoading: naverWatchPointIsLoading,
    error: naverWatchPointError,
  } = GetNaverWatchPoint(finalGmkey);

  const isWatchPointDataValid =
    watchPointData &&
    'gameScore' in watchPointData &&
    'schedule' in watchPointData &&
    'homeTeam' in watchPointData &&
    'visitTeam' in watchPointData;
  const isNaverWatchPointDataValid =
    naverWatchPointData &&
    'home' in naverWatchPointData &&
    'away' in naverWatchPointData;

  // 가장 최근 경기의 gameDate와 gmkey를 가져옴.
  useEffect(() => {
    const [gameDate, gmkey] = location.search.substring(1).split('&');

    const lastFinishedGame = monthScheduleData?.data.list
      .filter(
        (game) =>
          game.status === GAME_STATUS.PLAYING_NOW ||
          game.status === GAME_STATUS.AFTER_GAME,
      )
      .slice(-1)[0];

    setFinalGameDate(
      parseInt(String(gameDate || lastFinishedGame?.gameDate || '0')),
    );
    setFinalGmkey(gmkey || lastFinishedGame?.gmkey || '');
  }, [location.search, year, month, monthScheduleData]);

  useEffect(() => {
    if (isWatchPointDataValid && isNaverWatchPointDataValid) {
      setLineupData({
        homeLineup: watchPointData.homeTeam.lineup,
        visitLineup: watchPointData.visitTeam.lineup,
        gameInfo: watchPointData.gameScore,
        homePitcherInfo: naverWatchPointData.home.starter.playerInfo,
        awayPitcherInfo: naverWatchPointData.away.starter.playerInfo,
        homeTopPlayerInfo: naverWatchPointData.home.topPlayer.playerInfo,
        awayTopPlayerInfo: naverWatchPointData.away.topPlayer.playerInfo,
      });
    }
  }, [
    watchPointData,
    naverWatchPointData,
    setLineupData,
    isWatchPointDataValid,
    isNaverWatchPointDataValid,
  ]);

  // 버튼으로 경기 이동
  const handleGameNavigation = (direction: 'next' | 'prev') => {
    if ('schedule' in watchPointData && watchPointData.schedule[direction]) {
      const { gameDate, gmkey } = watchPointData.schedule[direction];
      navigate(`/game/watchpoint?${gameDate}&${gmkey}`);
    }
  };

  if (watchPointError || naverWatchPointError)
    return <div>Error: {watchPointError || naverWatchPointError}</div>;

  return (
    <div className="flex flex-col gap-10">
      <div>
        <SectionHeading title="상대 전적 비교" />
        {watchPointLoading || naverWatchPointIsLoading ? (
          <WatchPointSkeleton />
        ) : (
          isWatchPointDataValid && (
            <WatchPointItem
              game={watchPointData.gameScore}
              homeGameRecord={watchPointData.homeTeam.rank}
              awayGameRecord={watchPointData.visitTeam.rank}
              homeVsRecord={watchPointData.homeTeam.vsRecord}
              awayVsRecord={watchPointData.visitTeam.vsRecord}
              onNextGame={() => handleGameNavigation('next')}
              onPrevGame={() => handleGameNavigation('prev')}
              hasNextGame={!!watchPointData.schedule.next}
              hasPrevGame={!!watchPointData.schedule.prev}
            />
          )
        )}
      </div>

      <div>
        <SectionHeading title="선발 투수 비교" />
        {watchPointLoading || naverWatchPointIsLoading ? (
          <PitcherSkeleton />
        ) : (
          isNaverWatchPointDataValid && (
            <PitcherStatCompareItem
              homeData={naverWatchPointData.home.starter}
              awayData={naverWatchPointData.away.starter}
            />
          )
        )}
      </div>

      <div>
        <SectionHeading title="키 플레이어 비교" />
        {watchPointLoading || naverWatchPointIsLoading ? (
          <TopPlayerSkeleton />
        ) : (
          isNaverWatchPointDataValid && (
            <TopPlayerStatCompareItem
              homeData={naverWatchPointData.home.topPlayer}
              awayData={naverWatchPointData.away.topPlayer}
            />
          )
        )}
      </div>

      <div>
        <SectionHeading title="선발 라인업" />
        {watchPointLoading || naverWatchPointIsLoading ? (
          <LineupSkeleton />
        ) : (
          isWatchPointDataValid && isNaverWatchPointDataValid && <GameLineup />
        )}
      </div>
    </div>
  );
};

export default WatchPointPage;
