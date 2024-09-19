import { useAxios } from '@/hooks/useAxios';

import {
  WatchPointGameScoreType,
  WatchPointScheduleType,
  WatchPointTeamRankType,
  WatchPointVsRecordType,
} from '@/types/WatchPointType';

interface WatchPointData {
  gameScore: WatchPointGameScoreType;
  schedule: {
    current: WatchPointScheduleType;
    next: WatchPointScheduleType;
    prev: WatchPointScheduleType;
  };
  homeTeamRank: WatchPointTeamRankType;
  visitTeamRank: WatchPointTeamRankType;
  homeTeamWinLose: WatchPointVsRecordType;
  visitTeamWinLose: WatchPointVsRecordType;
}

interface GetWatchPointResponse {
  data: WatchPointData;
}

const gameScoreInitialState: WatchPointGameScoreType = {
  bhomeName: '',
  displayDate: '',
  endFlag: '',
  gameDate: 0,
  gmKey: '',
  gtime: '',
  hOutcome: '',
  home: '',
  homeKey: '',
  homeLogo: '',
  hpcode: '',
  hpitcherName: '',
  hscore: 0,
  stadium: '',
  stadiumKey: '',
  vOutcome: '',
  visit: '',
  visitKey: '',
  visitLogo: '',
  vpcode: '',
  vpitcherName: '',
  vscore: 0,
};

const scheduleInitialState: WatchPointScheduleType = {
  broadcast: '',
  cancelFlag: '',
  crowdCn: 0,
  endFlag: '',
  gameDate: 0,
  gday: 0,
  gmkey: '',
  gmonth: 0,
  gtime: '',
  gyear: '',
  home: '',
  homeKey: '',
  hscore: 0,
  stadium: '',
  stadiumKey: '',
  visit: '',
  visitKey: '',
  vscore: 0,
};

const teamRankInitialState: WatchPointTeamRankType = {
  ab: 0,
  bra: '',
  continue1: '',
  drawn: 0,
  era: '',
  lastrank: 0,
  lose: 0,
  rank: 0,
  teamName: '',
  teamCode: '',
  win: 0,
  wra: '',
  hra: '',
};

const vsRecordInitialState: WatchPointVsRecordType = {
  drawn: 0,
  lose: 0,
  win: 0,
  teamCode: '',
  teamName: '',
  vsTeamCode: '',
};

const GetWatchPoint = (gameDate: number, gmkey: string) => {
  const { data, isLoading, isError, error } = useAxios<GetWatchPointResponse>({
    method: 'GET',
    url: `/game/watchpoint?gameDate=${gameDate}&gmkey=${gmkey}`,
    initialData: {
      data: {
        gameScore: gameScoreInitialState,
        schedule: {
          current: scheduleInitialState,
          next: scheduleInitialState,
          prev: scheduleInitialState,
        },
        homeTeamRank: teamRankInitialState,
        visitTeamRank: teamRankInitialState,
        homeTeamWinLose: vsRecordInitialState,
        visitTeamWinLose: vsRecordInitialState,
      },
    },
    shouldFetchOnMount: true,
  });

  return { data, isLoading, isError, error };
};

export { GetWatchPoint };
