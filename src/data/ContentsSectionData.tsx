import { KT_WIZ_STORE_URL, ROUTER_PATH } from '@/constants/constant';
import TeamSchedule from '@/components/home/contents/schedule/TeamSchedule';
import Footer from '@/components/footer/Footer';
import News from '@/components/home/contents/news/News';
import Events from '@/components/home/contents/events/Events';
import Shop from '@/components/home/contents/shop/Shop';
import { TSection } from '@/types/ContentsSections';

export const sections: TSection[] = [
  // color 값을 bg-black으로 통일함
  // 추후 디자인 변경을 고려하여 color 프로퍼티를 남겨둠
  {
    id: 'sec1',
    title: 'GAME & RANK',
    content: <TeamSchedule />,
    seeMoreLink: ROUTER_PATH.GAME,
    color: 'bg-black',
  },
  {
    id: 'sec2',
    title: 'NEWS',
    content: <News />,
    seeMoreLink: ROUTER_PATH.NEWS,
    color: 'bg-yellow-500',
  },
  {
    id: 'sec3',
    title: 'SHOP',
    content: <Shop />,
    seeMoreLink: KT_WIZ_STORE_URL,
    color: 'bg-red-500',
  },
  {
    id: 'sec4',
    title: 'EVENTS',
    content: <Events />,
    color: 'bg-purple-500',
  },
  {
    id: 'sec5',
    content: <Footer />,
    color: 'bg-white',
    isFooter: true,
  },
];

export const sectionVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};
