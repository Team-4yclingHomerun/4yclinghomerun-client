import { ROUTER_PATH } from '@/constants/constant';

const { PLAYER_COACH, PLAYER_PITCHER, PLAYER_HITTER, PLAYER_CHEER } =
  ROUTER_PATH;

const playerTabs = [
  {
    name: '코치',
    path: PLAYER_COACH,
    subTitle: '최고의 kt wiz 코칭스탭을 소개합니다.',
  },
  {
    name: '투수',
    path: PLAYER_PITCHER,
    subTitle: 'kt wiz의 자랑스런 ‘첫 번째 선수단’을 소개합니다.',
  },
  {
    name: '타자',
    path: PLAYER_HITTER,
    subTitle: 'kt wiz의 자랑스런 ‘첫 번째 선수단’을 소개합니다.',
  },
  {
    name: '응원단',
    path: PLAYER_CHEER,
    subTitle: 'kt wiz꽃! kt wiz의 응원단',
  },
];

export { playerTabs };
