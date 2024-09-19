import { TEvents } from '@/types/events';

const MockEvents: TEvents[] = [
  {
    id: 1,
    title: '2024 정규리그 홈경기 운영안내',
    date: '2024-08-12',
    kategorie: 'default',
    description:
      '안녕하세요, kt wiz 야구단입니다. 2024 정규리그 홈경기 운영 안내드리며, 원활한 정규시즌 경기 관람을 위해 공지 내 내용을 확인 부탁드립니다.',
    bannerUrl: '/src/assets/home/event/Background_WinningKT.png',
    linkUrl: 'https://www.ktwiz.co.kr/media/wizpress/184875',
  },
  {
    id: 2,
    title: 'kt wiz, V1 팬 페스티벌 행사 취소',
    date: '2024-07-16',
    kategorie: 'important',
    description:
      '16일(목) 정부가 발표한 방역대응 비상조치에 포함된 ‘대규모 행사, 집회의 방역수칙 강화’에 따라 오는 19일(일) 열릴 예정이었던 ‘V1 팬 페스티벌’ 행사가 취소됐습니다. 금일 예정되었던 V1 페스티벌 선착순 신청 모집도 취소될 예정입니다. 참고 부탁드립니다. 감사합니다.',
    bannerUrl: '/src/assets/home/event/Background_WinningKT.png',
    linkUrl:
      'https://www.ktwiz.co.kr/media/wizpress/165996?search.searchWord=%EC%B7%A8%EC%86%8C&search.sort=100',
  },
  {
    id: 3,
    title: 'kt wiz, 힙합 그룹 에픽하이 초청 행사 열어',
    date: '2024-04-22',
    kategorie: 'event',
    description:
      'kt wiz 프로야구단(ktwiz.co.kr, 대표이사 이호식)은 19일(수) 롯데 자이언츠와의 홈 경기가 열리는 수원 KT위즈파크에 에픽하이(타블로, 투컷, 미쓰라)를 초청하고, 시구 행사를 진행한다.',
    bannerUrl:
      'https://www.ktwiz.co.kr/files/article/2024/06/18/20240618111309.862-e848be33056e.jpg',
    linkUrl:
      'https://www.ktwiz.co.kr/media/wizpress/187765?search.searchWord=%EC%97%90%ED%94%BD&search.sort=100',
  },
  {
    id: 4,
    title: 'kt wiz, 익산 시민과 함께하는 서머리그 이벤트 개최',
    date: '2024-04-20',
    kategorie: 'event',
    description:
      'kt wiz 프로야구단(대표이사 이호식, ktwiz.co.kr)이 오는 6일(화)부터 8일(목)까지 익산 국가대표야구장에서 열리는 한화 이글스와의 퓨처스 서머리그 경기에서 다채로운 이벤트를 진행한다.',
    bannerUrl:
      'https://www.ktwiz.co.kr/files/article/2024/08/02/20240802100402.f4c-2eab57a0b73c.jpg',
    linkUrl:
      'https://www.ktwiz.co.kr/media/wizpress/189033?search.searchWord=%EC%9D%B4%EB%B2%A4%ED%8A%B8&search.sort=100',
  },
];

export { MockEvents };
