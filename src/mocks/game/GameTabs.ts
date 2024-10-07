import { ROUTER_PATH } from '@/constants/constant';

const { SCHEDULE, BOXSCORE, RANKING, GAME_RANKING_TEAM, GAME_RANKING_BATTER, GAME_RANKING_CROWND, GAME_RANKING_PICHER, WATCHPOINT } = ROUTER_PATH;

const gameTabs = [
  {
    name: '경기 일정',
    path: SCHEDULE,
    subTitle: 'kt wiz의 정규리그 경기 일정을 알려 드려요.',
  },
  {
    name: '박스 스코어',
    path: BOXSCORE,
    subTitle: '박스 스코어 정보를 알려 드려요.',
  },
  {
    name: '순위 기록',
    path: RANKING,
    subTitle: 'kt wiz 정규리그 기록을 알려 드려요.',
    subTab: [{
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
    }
  ]
  },
  {
    name: '관전 포인트',
    path: WATCHPOINT,
    subTitle: '오늘의 관전 포인트를 알려 드려요.',
  },
];

export { gameTabs };
