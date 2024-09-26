import { useEffect } from 'react';

import HotColdZone from './HotColdZone';
import PlayerComparisonLayout from '../common/PlayerComparisonLayout';
import StatComparison from '../common/StatComparison';
import { usePlayerDataStore } from '@/stores/WatchPointPlayerStore';
import { NaverWatchPointTopPlayerData } from '@/types/WatchPointType';
import { GetPlayerImg } from '@/api/GetPlayerImg';

type TopPlayerDataProps = {
  homeData: NaverWatchPointTopPlayerData;
  awayData: NaverWatchPointTopPlayerData;
};

const TopPlayerStatCompareItem = ({
  homeData,
  awayData,
}: TopPlayerDataProps) => {
  const { setTopPlayers, homeTopPlayer, awayTopPlayer } = usePlayerDataStore();

  const { imageUrl: homePlayerImg, isLoading: isHomeImgLoading } = GetPlayerImg(
    homeData.playerInfo.pCode,
  );
  const { imageUrl: awayPlayerImg, isLoading: isAwayImgLoading } = GetPlayerImg(
    awayData.playerInfo.pCode,
  );

  useEffect(() => {
    if (homeData && awayData) {
      setTopPlayers(homeData, awayData);
    }
  }, [homeData, awayData, setTopPlayers]);

  if (!homeTopPlayer || !awayTopPlayer) return null;

  const stats = [
    {
      label: '타율',
      away: awayTopPlayer.currentSeasonStats.hra,
      home: homeTopPlayer.currentSeasonStats.hra,
    },
    {
      label: '안타',
      away: awayTopPlayer.currentSeasonStats.hit,
      home: homeTopPlayer.currentSeasonStats.hit,
    },
    {
      label: '홈런',
      away: awayTopPlayer.currentSeasonStats.hr,
      home: homeTopPlayer.currentSeasonStats.hr,
    },
    {
      label: '타점',
      away: awayTopPlayer.currentSeasonStats.rbi,
      home: homeTopPlayer.currentSeasonStats.rbi,
    },
    {
      label: '상대 전적',
      away: `타율 ${awayTopPlayer.currentSeasonStatsOnOpponents.hra} · 안타 ${awayTopPlayer.currentSeasonStatsOnOpponents.hit} · 홈런 ${awayTopPlayer.currentSeasonStatsOnOpponents.hr}`,
      home: `타율 ${homeTopPlayer.currentSeasonStatsOnOpponents.hra} · 안타 ${homeTopPlayer.currentSeasonStatsOnOpponents.hit} · 홈런 ${homeTopPlayer.currentSeasonStatsOnOpponents.hr}`,
    },
    {
      label: '최근 5경기',
      away: `타율 ${awayTopPlayer.recentFiveGamesStats.hra} · 안타 ${awayTopPlayer.recentFiveGamesStats.hit} · 홈런 ${awayTopPlayer.recentFiveGamesStats.hr}`,
      home: `타율 ${homeTopPlayer.recentFiveGamesStats.hra} · 안타 ${homeTopPlayer.recentFiveGamesStats.hit} · 홈런 ${homeTopPlayer.recentFiveGamesStats.hr}`,
    },
  ];

  const headerText = (
    <>
      <h1>
        키플레이어는 팀의 최근 5경기 중 3경기 이상 출장 선수 중 가장 타율이 높은
        선수 입니다.
      </h1>
      <p>좌우의 표는 각 ZONE의 타율을 나타낸 HOT & COLD ZONE입니다.</p>
    </>
  );

  return (
    <PlayerComparisonLayout
      homePlayer={homeTopPlayer.playerInfo}
      awayPlayer={awayTopPlayer.playerInfo}
      homePlayerImg={homePlayerImg ?? ''}
      awayPlayerImg={awayPlayerImg ?? ''}
      isHomeImgLoading={isHomeImgLoading}
      isAwayImgLoading={isAwayImgLoading}
      leftSide={<HotColdZone data={awayTopPlayer.hotColdZone} />}
      rightSide={<HotColdZone data={homeTopPlayer.hotColdZone} />}
      headerText={headerText}
    >
      <StatComparison stats={stats} />
    </PlayerComparisonLayout>
  );
};
export default TopPlayerStatCompareItem;
