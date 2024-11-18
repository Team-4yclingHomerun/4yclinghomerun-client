import { useAxios } from '@/hooks/useAxios';

import {
  WatchPointPitcherStatType,
  PitcherStatOnOpponentType,
  PitchInfoType,
  ToplayerStatType,
  TopPlayerStatOnOpponentType,
  TopPlayerInfoType,
  TopPlayerRecentFiveGameStatType,
  NaverWatchPointTopPlayerData,
  NaverWatchPointPitcherData,
} from '@/types/WatchPointType';

interface GetNaverWatchPointResponse {
  result: {
    previewData: {
      homeStarter: NaverWatchPointPitcherData;
      awayStarter: NaverWatchPointPitcherData;
      homeTopPlayer: NaverWatchPointTopPlayerData;
      awayTopPlayer: NaverWatchPointTopPlayerData;
    };
  };
}

const GetNaverWatchPoint = (gmkey: string) => {
  const processData = (data: GetNaverWatchPointResponse) => {
    const { homeStarter, awayStarter, homeTopPlayer, awayTopPlayer } =
      data.result.previewData;
    return {
      home: {
        starter: homeStarter,
        topPlayer: homeTopPlayer,
      },
      away: {
        starter: awayStarter,
        topPlayer: awayTopPlayer,
      },
    };
  };

  return useAxios<GetNaverWatchPointResponse, ReturnType<typeof processData>>({
    method: 'GET',
    url: `/game/navergameinfo/gmkey-${gmkey}`,
    initialData: {
      result: {
        previewData: {
          homeStarter: {
            currentPitKindStats: [],
            currentSeasonStats: {} as WatchPointPitcherStatType,
            currentSeasonStatsOnOpponents: {} as PitcherStatOnOpponentType,
            playerInfo: {} as PitchInfoType,
          },
          awayStarter: {
            currentPitKindStats: [],
            currentSeasonStats: {} as WatchPointPitcherStatType,
            currentSeasonStatsOnOpponents: {} as PitcherStatOnOpponentType,
            playerInfo: {} as PitchInfoType,
          },
          homeTopPlayer: {
            currentSeasonStats: {} as ToplayerStatType,
            currentSeasonStatsOnOpponents: {} as TopPlayerStatOnOpponentType,
            playerInfo: {} as TopPlayerInfoType,
            recentFiveGamesStats: {} as TopPlayerRecentFiveGameStatType,
            hotColdZone: [],
          },
          awayTopPlayer: {
            currentSeasonStats: {} as ToplayerStatType,
            currentSeasonStatsOnOpponents: {} as TopPlayerStatOnOpponentType,
            playerInfo: {} as TopPlayerInfoType,
            recentFiveGamesStats: {} as TopPlayerRecentFiveGameStatType,
            hotColdZone: [],
          },
        },
      },
    },
    shouldFetchOnMount: !!gmkey,
    processData,
  });
};

export { GetNaverWatchPoint };
