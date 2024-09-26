import { useEffect } from 'react';

import PitchTypeBar from './PitchTypeBar';
import PlayerComparisonLayout from '../common/PlayerComparisonLayout';
import StatComparison from '../common/StatComparison';
import { usePlayerDataStore } from '@/stores/WatchPointPlayerStore';
import { NaverWatchPointPitcherData } from '@/types/WatchPointType';
import { GetPlayerImg } from '@/api/GetPlayerImg';

type PitcherDataProps = {
  homeData: NaverWatchPointPitcherData;
  awayData: NaverWatchPointPitcherData;
};

const PitcherStatCompareItem = ({ homeData, awayData }: PitcherDataProps) => {
  const { setPitchers, homePitcher, awayPitcher } = usePlayerDataStore();

  const { imageUrl: homePlayerImg, isLoading: isHomeImgLoading } = GetPlayerImg(
    homeData.playerInfo.pCode,
  );
  const { imageUrl: awayPlayerImg, isLoading: isAwayImgLoading } = GetPlayerImg(
    awayData.playerInfo.pCode,
  );

  useEffect(() => {
    if (homeData && awayData) {
      setPitchers(homeData, awayData);
    }
  }, [homeData, awayData, setPitchers]);

  if (!homePitcher || !awayPitcher) return null;

  const stats = [
    {
      label: '승패',
      away: `${awayPitcher.currentSeasonStats.w}승 ${awayPitcher.currentSeasonStats.l}패`,
      home: `${homePitcher.currentSeasonStats.w}승 ${homePitcher.currentSeasonStats.l}패`,
    },
    {
      label: '이닝',
      away: awayPitcher.currentSeasonStats.inn2,
      home: homePitcher.currentSeasonStats.inn2,
    },
    {
      label: '평균자책점',
      away: awayPitcher.currentSeasonStats.era,
      home: homePitcher.currentSeasonStats.era,
    },
    {
      label: 'WHIP',
      away: awayPitcher.currentSeasonStats.whip,
      home: homePitcher.currentSeasonStats.whip,
    },
    {
      label: '상대전적',
      away: `${awayPitcher.currentSeasonStatsOnOpponents.w}승 ${awayPitcher.currentSeasonStatsOnOpponents.l}패 ERA ${awayPitcher.currentSeasonStatsOnOpponents.era}`,
      home: `${homePitcher.currentSeasonStatsOnOpponents.w}승 ${homePitcher.currentSeasonStatsOnOpponents.l}패 ERA ${homePitcher.currentSeasonStatsOnOpponents.era}`,
    },
  ];

  return (
    <PlayerComparisonLayout
      homePlayer={homePitcher.playerInfo}
      awayPlayer={awayPitcher.playerInfo}
      homePlayerImg={homePlayerImg ?? ''}
      awayPlayerImg={awayPlayerImg ?? ''}
      isHomeImgLoading={isHomeImgLoading}
      isAwayImgLoading={isAwayImgLoading}
      leftSide={
        <PitchTypeBar stats={awayPitcher.currentPitKindStats} side="left" />
      }
      rightSide={
        <PitchTypeBar stats={homePitcher.currentPitKindStats} side="right" />
      }
    >
      <StatComparison stats={stats} />
    </PlayerComparisonLayout>
  );
};

export default PitcherStatCompareItem;
