export type TTeamRankingGraph = {
  date: string;
  rank: number;
};

export type APITeamRankingGraph = {
  data: { list: TTeamRankingGraph[] };
};

export type TTeamRankingYearTable = {
  ab: number;
  bra: string;
  continue1: string;
  drawn: number;
  er: number;
  era: string;
  game: number;
  gameFlag: number;
  gb: string;
  gyear: string;
  hr: number;
  hra: string;
  lastrank: number;
  lose: number;
  lra: string;
  r: number;
  rank: number;
  run: number;
  sb: number;
  teamCode: string;
  teamName: string;
  teamNameEng: string;
  win: number;
  wra: string;
};

export type APITeamRankingYearTable = {
  data: {
    list: TTeamRankingYearTable[];
  };
};

export type TTeamRankingPitcherTable = {
  ab: number;
  bb: number;
  bb9: number;
  bbhp: number;
  bk: number;
  bs: number;
  cg: number;
  cs: number;
  er: number;
  era: string;
  err: number;
  gd: number;
  gyear: string;
  h2: number;
  h3: number;
  hit: number;
  hit9: number;
  hold: number;
  hp: number;
  hr: number;
  ib: number;
  inn: number;
  iso: string;
  kk: number;
  kk9: number;
  oavg: string;
  obp: string;
  oops: string;
  oslg: string;
  pa: number;
  qs: number;
  r: number;
  sb: number;
  sf: number;
  sh: number;
  sho: number;
  sv: number;
  teamCode: string;
  teamName: string;
  tugucount: number;
  tugucountinn: number;
  whip: string;
  wp: number;
  wra: number;
};

export type APITeamRankingPitcherTable = {
  data: {
    list: TTeamRankingPitcherTable[];
  };
};

export type TTeamRankingBatterTable = {
  ab: number;
  bb: number;
  bbhp: number;
  bbkk: string;
  bra: string;
  cs: number;
  der: string;
  err: number;
  gd: number;
  gyear: string;
  h2: number;
  h3: number;
  hit: number;
  hp: number;
  hr: number;
  hra: string;
  hrab: number;
  ib: number;
  iso: string;
  kk: number;
  kkab: number;
  ops: string;
  pa: number;
  rbi: number;
  run: number;
  sb: number;
  sbTryCn: number;
  sba: string;
  sf: number;
  sh: number;
  slab: number;
  slg: string;
  teamCode: string;
  teamName: string;
};

export type APITeamRankingBatterTable = {
  data: {
    list: TTeamRankingBatterTable[];
  };
};

export type TTeamRankingTeamVSTable = {
  drawn: number;
  lose: number;
  teamCode: string;
  teamName: string;
  vsTeamCode: string;
  win: number;
};

export type APITeamRankingTeamVSTable = {
  data: {
    list: TTeamRankingTeamVSTable[];
  };
};

export type TTeamRankingPieGraph = {
  id: string;
  label: string;
  value: number;
  color: string;
};
