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

// 네이버 선발 투수 정보를 담는 타입
export type WatchPointPitcherStatType = {
  bb: number; // 볼넷
  er: number; // 자책점
  era: string; // 평균자책점
  gday: string;
  hit: number; // 피안타
  hr: number; // 피홈런
  inn2: string; // 이닝
  kk: number; // 탈삼진
  l: number; // 패
  s: number; // 세이브
  teamName: string;
  teamCode: string;
  w: number; // 승
  whip: string; // WHIP
};

// 네이버 상대 전적 정보를 담는 타입
export type PitcherStatOnOpponentType = {
  l: number; // 패
  s: number; // 세이브
  w: number; // 승
  inn: string; // 이닝
  kk: number; // 탈삼진
  era: string; // 평균자책점
  gameCount: number; // 경기수
  er: number; // 자책점
};

// 네이버 투수 구종 담는 타입
export type PitchKindStatType = {
  type: string;
  speed: number;
  pit_rt: number;
};

// 네이버 선발 투수 정보
export type PitchInfoType = {
  backnum: string;
  birth: string;
  height: string;
  hitType: string;
  name: string;
  pCode: string;
  weight: string;
};

// 네이버 탑플레이어 정보
export type ToplayerStatType = {
  ab: number; // 타수
  gameCount: number; // 경기수
  gday: string;
  hit: number; // 안타
  hr: number; // 홈런
  hra: string; // 타율
  obp: number; // 출루율
  rbi: number; // 타점
};

// 네이버 탑플레이어 상대 전적 정보
export type TopPlayerStatOnOpponentType = {
  hit: number; // 안타
  hr: number; // 홈런
  hra: string; // 타율
};

// 네이버 탑플레이어 선수 정보
export type TopPlayerInfoType = {
  backnum: string;
  birth: string;
  height: string;
  hitType: string;
  name: string;
  pCode: string;
  weight: string;
};

// 네이버 탑플레이어 최근 5경기 스탯
export type TopPlayerRecentFiveGameStatType = {
  ab: number; // 타수
  gameCount: number;
  hit: number; // 안타
  hr: number; // 홈런
  hra: string; // 타율
  obp: number; // 출루율
  playerCode: string;
  playerName: string;
  rbi: number; // 타점
};

// 네이버 탑플레이어 핫콜드존 타입
export type TopPlayerHotColdZoneType = {
  hra: string;
  hraStep: string;
  kk: number;
  zone: number;
};

// 네이버 키플레이어 상세 데이터
export type NaverWatchPointTopPlayerData = {
  currentSeasonStats: ToplayerStatType;
  currentSeasonStatsOnOpponents: TopPlayerStatOnOpponentType;
  playerInfo: TopPlayerInfoType;
  recentFiveGamesStats: TopPlayerRecentFiveGameStatType;
  hotColdZone: TopPlayerHotColdZoneType[];
};

// 네이버 투수 상세 데이터
export type NaverWatchPointPitcherData = {
  currentPitKindStats: PitchKindStatType[];
  currentSeasonStats: WatchPointPitcherStatType;
  currentSeasonStatsOnOpponents: PitcherStatOnOpponentType;
  playerInfo: PitchInfoType;
};
