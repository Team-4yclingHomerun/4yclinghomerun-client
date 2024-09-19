import { ROUTER_PATH } from '@/constants/constant';

const { COACH, PITCHER, HITTER, CHEER } = ROUTER_PATH;

const playerTabs = [
  {
    name: '코치',
    path: COACH,
    subTitle: '최고의 kt wiz 코칭스탭을 소개합니다.',
  },
  {
    name: '투수',
    path: PITCHER,
    subTitle: 'kt wiz의 자랑스런 ‘첫 번째 선수단’을 소개합니다.',
  },
  {
    name: '타자',
    path: HITTER,
    subTitle: 'kt wiz의 자랑스런 ‘첫 번째 선수단’을 소개합니다.',
  },
  {
    name: '응원단',
    path: CHEER,
    subTitle: 'kt wiz꽃! kt wiz의 응원단',
  },
];

export { playerTabs };
