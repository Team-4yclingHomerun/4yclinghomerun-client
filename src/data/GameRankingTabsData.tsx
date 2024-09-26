import { ROUTER_PATH } from '@/constants/constant';

const {
  GAME_RANKING_TEAM,
  GAME_RANKING_PICHER,
  GAME_RANKING_BATTER,
  GAME_RANKING_CROWND,
} = ROUTER_PATH;

export const gameRankingTabs = [
  {
    name: '팀순위',
    path: GAME_RANKING_TEAM,
  },
  {
    name: '투수순위',
    path: GAME_RANKING_PICHER,
  },
  {
    name: '타자순위',
    path: GAME_RANKING_BATTER,
  },
  {
    name: '관중현황',
    path: GAME_RANKING_CROWND,
  },
];
