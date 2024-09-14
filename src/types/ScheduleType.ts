export type KtWizMonthSchedule = {
  broadcast: string;
  displayDate: string;
  matchTeamName: string;
  gameDate: number;
  gtime: string;
  gmkey: string;
  home: string;
  homeKey: string;
  homeLogo: string;
  homeScore: number;
  status: string;
  visit: string;
  visitKey: string;
  visitLogo: string;
  visitScore: number;
  stadium: string;
  outcome: '승' | '패' | '무' | '취';
};
