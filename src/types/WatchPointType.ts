// WatchPoint의 gameScore 정보를 담는 타입
export type WatchPointGameScoreType = {
  bhomeName: string;
  displayDate: string;
  endFlag: string;
  gameDate: number;
  gmKey: string;
  gtime: string;
  hOutcome: string;
  home: string;
  homeKey: string;
  homeLogo: string;
  hpcode: string;
  hpitcherName: string;
  hscore: number;
  stadium: string;
  stadiumKey: string;
  vOutcome: string;
  visit: string;
  visitKey: string;
  visitLogo: string;
  vpcode: string;
  vpitcherName: string;
  vscore: number;
};

// WatchPoint의 선수 라인업 정보를 담는 타입
export type WatchPointPlayerLineupType = {
  backnum: string;
  birth: string;
  career: string;
  curBra: string;
  curHra: string;
  height: string;
  hittype: string;
  pcode: string;
  money: string;
  playerName: string;
  playerPrvwImg: string;
  pos: string;
  posidName: string;
  promise: string;
  seq: number;
  teamCode: string;
  teamName: string;
  weight: string;
};

// WatchPoint의 스케줄 정보를 담는 타입
export type WatchPointScheduleType = {
  broadcast: string;
  cancelFlag: string;
  crowdCn: number;
  endFlag: string;
  gameDate: number;
  gday: number;
  gmkey: string;
  gmonth: number;
  gtime: string;
  gyear: string;
  home: string;
  homeKey: string;
  hscore: number;
  stadium: string;
  stadiumKey: string;
  visit: string;
  visitKey: string;
  vscore: number;
};

// 팀 순위 정보를 담는 타입
export type WatchPointTeamRankType = {
  ab: number; // 타수
  bra: string;
  continue1: string;
  drawn: number; // 무승부
  era: string; // 평균자책점
  lastrank: number;
  lose: number; // 패
  rank: number;
  teamName: string;
  teamCode: string;
  win: number; // 승
  wra: string; // 승률
  hra: string; // 타율
};

// 상대 전적 정보를 담는 타입
export type WatchPointVsRecordType = {
  drawn: number; // 무승부
  lose: number; // 패
  win: number; // 승
  teamCode: string;
  teamName: string;
  vsTeamCode: string;
};
