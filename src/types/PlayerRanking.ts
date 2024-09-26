import { ColumnDef } from '@tanstack/react-table';

export type APITotalPitcherRankingTable = {
  data: { list: TTotalPitcherRankingTable[] };
};

export type TTotalPitcherRankingTable = {
  ab: number; // 타석 수
  bb: number; // 볼넷 수
  bb9: number; // 9타석당 볼넷 수
  bf: number; // 타자 수
  bk: number; // 보크 수
  bs: number; // 블론 세이브 수
  cba: string; // 챔피언십 평균
  cg: number; // 완투 수
  cs: number; // 도루 저지 수
  dpp: string; // DPP (Defense Per Play)
  er: number; // 자책점
  era: string; // 평균 자책점
  err: number; // 실책 수
  fo: number; // 땅볼 수
  gamenum: number; // 경기 수
  go: number; // 그라운드 아웃 수
  gofo: string; // 그라운드 아웃 비율
  gyear: string; // 연도
  h1: number; // 1루 안타 수
  h2: number; // 2루 안타 수
  h3: number; // 3루 안타 수
  hit: number; // 안타 수
  hit9: number; // 9타석당 안타 수
  hold: number; // 홀드 수
  hp: number; // Hit by pitch 수
  hr: number; // 홈런 수
  ib: number; // 고의 사구 수
  inBa: string; // 인플레이 비율
  inFlag: string; // 인플레이 플래그
  inn: number; // 이닝 수
  inn2: number; // 추가 이닝 수
  iso: string; // ISO (Isolated Power)
  kk: number; // 삼진 수
  kk9: number; // 9타석당 삼진 수
  kkbb: string; // 삼진과 볼넷 비율
  l: number; // 패배 수
  lCg: number; // 리그 경기 수
  lba: string; // 리그 평균
  oavg: string; // 상대 팀 타율
  obp: string; // 출루율
  oops: string; // OPS (On-base Plus Slugging)
  oslg: string; // 슬러거 평균
  outBa: string; // 아웃 비율
  pcode: string; // 선수 코드
  playerName: string; // 선수 이름
  playerPrvwImg: string; // 선수 이미지 URL
  po: number; // 포지션
  qs: number; // 퀄리티 스타트 수
  qsPlus: number; // 퀄리티 스타트 플러스
  quit: number; // 퇴장 수
  quitInn2: number; // 추가 퇴장 이닝 수
  r: number; // 득점 수
  rba: string; // RBA (Runs Batted Average)
  sb: number; // 도루 수
  sbTryCn: number; // 도루 시도 수
  sf: number; // 희생 플라이 수
  sh: number; // 희생 번트 수
  sho: number; // 완봉 수
  start: number; // 선발 수
  startInn2: number; // 선발 추가 이닝 수
  sv: number; // 세이브 수
  svo: number; // 세이브 기회 수
  teamName: string; // 팀 이름
  tugucount: number; // 투구 수
  tugucountinn: number; // 투구 이닝 수
  w: number; // 승리 수
  wCg: number; // 리그 승리 수
  whip: string; // WHIP (Walks and Hits per Inning Pitched)
  wp: number; // 폭투 수
  wra: string; // WAR (Wins Above Replacement)
};

export type APIKTPitcherRankingTable = {
  data: { list: TKTPitcherRankingTable[] };
};

export type TKTPitcherRankingTable = {
  playerName: string;
  teamName: string;
  era: string;
  gamenum: number;
  w: number;
  l: number;
  sv: number;
  inBa: string;
  hit: number;
  hr: number;
  hold: number;
  hp: number;
  wra: number;
  kk: number;
  bb: number;
  kk9: number;
  r: number;
  er: number;
};

export type APITotalBatterRankingTable = {
  data: { list: TTotalBatterRankingTable[] };
};

export type TTotalBatterRankingTable = {
  playerName: string;
  teamName: string;
  hra: string;
  gamenum: number;
  ab: number;
  run: number;
  hit: number;
  h2: number;
  h3: number;
  hr: number;
  rbi: number;
  sb: number;
  bb: number;
  hp: number;
  kk: number;
  slg: string;
  bra: string;
};

export type TKTBatterRankingTable = {
  playerName: string;
  teamName: string;
  hra: string;
  gamenum: number;
  ab: number;
  run: number;
  hit: number;
  h2: number;
  h3: number;
  hr: number;
  rbi: number;
  sb: number;
  bb: number;
  hp: number;
  kk: number;
  slg: string;
  bra: string;
  playerPrvwImg: string;
  pcode: string;
  gyear: string;
  // Add other fields as necessary
};

export type TPlayerRankigTableData = {
  tableName: string;
  apiUrl: string;
  tableColums:
    | ColumnDef<TTotalPitcherRankingTable>[]
    | ColumnDef<TKTPitcherRankingTable>[]
    | ColumnDef<TTotalBatterRankingTable>[]
    | ColumnDef<TKTBatterRankingTable>[];
};

export type TPlayerRankingTopThree = {
  rank: number;
  playerName: string;
  playerPrvwImg: string;
  era?: string;
  w?: number;
  hra?: number;
  hr?: number;
};

export type TTopThreePlayerListData = {
  title: string;
  url: string;
  data: string;
};

export type TPlayerRankingTopFive = {
  rank: number;
  playerName: string;
  teamName: string;
  era?: string;
  hra?: number;
};

export type TPlayerRankingTable =
  | TTotalPitcherRankingTable
  | TKTPitcherRankingTable
  | TTotalBatterRankingTable
  | TKTBatterRankingTable;
