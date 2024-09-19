import item01 from '@/assets/home/shop/01.png';
import item02 from '@/assets/home/shop/02.png';
import item03 from '@/assets/home/shop/03.png';
import item04 from '@/assets/home/shop/04.png';
import item05 from '@/assets/home/shop/05.png';
import item06 from '@/assets/home/shop/06.png';
import item07 from '@/assets/home/shop/07.png';
import item08 from '@/assets/home/shop/08.png';
import item09 from '@/assets/home/shop/09.png';
import item10 from '@/assets/home/shop/10.png';
import item11 from '@/assets/home/shop/11.png';
import item12 from '@/assets/home/shop/12.png';
import { ShopItem } from '@/types/ShopItemType';

const items = [
  {
    id: 1,
    src: item01,
    url: 'https://www.ktwizstore.co.kr/product/%EB%8B%A8%EB%8F%85%EA%B5%AC%EB%A7%A4%EB%B6%88%EA%B0%80%EC%BC%80%EC%9D%B4%ED%8B%B0%EC%9C%84%EC%A6%88-2024-%EC%A0%95%EC%A1%B0%EB%8C%80%EC%99%95-%EB%A7%88%ED%82%B9/772/category/1/display/3/',
    title: '(단독구매불가)케이티위즈 2024 정조대왕 마킹',
    price: '20000₩',
  },
  {
    id: 2,
    src: item02,
    url: 'https://www.ktwizstore.co.kr/product/%EB%8B%A8%EB%8F%85%EA%B5%AC%EB%A7%A4-%EB%B6%88%EA%B0%80%EC%BC%80%EC%9D%B4%ED%8B%B0%EC%9C%84%EC%A6%88x%EB%A1%A4%EC%8A%A4%ED%84%B0-%EB%A7%88%ED%82%B9/694/category/1/display/3/',
    title: '(단독구매불가)케이티위즈X롤스터 마킹',
    price: '20000₩',
  },
  {
    id: 3,
    src: item03,
    url: 'https://www.ktwizstore.co.kr/product/%EC%BC%80%EC%9D%B4%ED%8B%B0%EC%9C%84%EC%A6%88-%EB%B9%85%EB%98%90%EB%A6%AC-%EC%97%AC%EB%A6%84-%EC%9C%A0%EB%8B%88%ED%8F%BC/748/category/1/display/3/',
    title: '케이티위즈 빅또리 여름 유니폼',
    price: '94000₩',
  },
  {
    id: 4,
    src: item04,
    url: 'https://www.ktwizstore.co.kr/product/%EC%BC%80%EC%9D%B4%ED%8B%B0%EC%9C%84%EC%A6%88-%EB%B9%85%EB%98%90%EB%A6%AC-%EC%97%AC%EB%A6%84-%EB%A7%88%ED%82%B9/749/category/1/display/3/',
    title: '케이티위즈 빅또리 여름 마킹',
    price: '20000₩',
  },
  {
    id: 5,
    src: item05,
    url: 'https://www.ktwizstore.co.kr/product/%EC%BC%80%EC%9D%B4%ED%8B%B0%EC%9C%84%EC%A6%88-%EB%B9%85%EB%98%90%EB%A6%AC-%EA%B0%80%EC%9D%84-%EC%9C%A0%EB%8B%88%ED%8F%BC/755/category/1/display/3/',
    title: '케이티위즈 빅또리 가을 유니폼',
    price: '94000₩',
  },
  {
    id: 6,
    src: item06,
    url: 'https://www.ktwizstore.co.kr/product/%EC%BC%80%EC%9D%B4%ED%8B%B0%EC%9C%84%EC%A6%88-%EB%B9%85%EB%98%90%EB%A6%AC-%EA%B0%80%EC%9D%84-%EB%A7%88%ED%82%B9/756/category/1/display/3/',
    title: '케이티위즈 빅또리 가을 마킹',
    price: '20000₩',
  },
  {
    id: 7,
    src: item07,
    url: 'https://www.ktwizstore.co.kr/product/%EC%BC%80%EC%9D%B4%ED%8B%B0%EC%9C%84%EC%A6%88-%EC%9B%8C%ED%84%B0%ED%8E%98%EC%8A%A4%ED%8B%B0%EB%B2%8C-%ED%8C%A8%ED%82%A4%EC%A7%80/739/category/1/display/3/',
    title: '케이티위즈 워터페스티벌 패키지',
    price: '39900₩',
  },
  {
    id: 8,
    src: item08,
    url: 'https://www.ktwizstore.co.kr/product/%EB%A6%AC%EB%B9%8C%EB%A6%ACx%EC%BC%80%EC%9D%B4%ED%8B%B0%EC%9C%84%EC%A6%88-%ED%8B%B0%EC%85%94%EC%B8%A0-%EC%B0%A8%EC%BD%9C/735/category/1/display/3/',
    title: '리빌리X케이티위즈 티셔츠 차콜',
    price: '49000₩',
  },
  {
    id: 9,
    src: item09,
    url: 'https://www.ktwizstore.co.kr/product/%EC%BC%80%EC%9D%B4%ED%8B%B0%EC%9C%84%EC%A6%88-%EB%B9%85-%EB%AA%A8%EC%B0%8C-%EC%BF%A0%EC%85%98/618/category/1/display/5/',
    title: '케이티위즈 빅 모찌 쿠션',
    price: '25000₩',
  },
  {
    id: 10,
    src: item10,
    url: 'https://www.ktwizstore.co.kr/product/%EC%BC%80%EC%9D%B4%ED%8B%B0%EC%9C%84%EC%A6%88-%EB%98%90%EB%A6%AC-%EB%AA%A8%EC%B0%8C-%EC%BF%A0%EC%85%98/619/category/1/display/5/',
    title: '케이티위즈 또리 모찌 쿠션',
    price: '25000₩',
  },
  {
    id: 11,
    src: item11,
    url: 'https://www.ktwizstore.co.kr/product/%EC%BC%80%EC%9D%B4%ED%8B%B0%EC%9C%84%EC%A6%88-%EB%98%90%EB%A6%AC-%ED%97%AC%EB%A9%A7-%EC%9A%B0%EC%82%B0/548/category/1/display/5/',
    title: '케이티위즈 또리 헬멧 우산',
    price: '29000₩',
  },
  {
    id: 12,
    src: item12,
    url: 'https://www.ktwizstore.co.kr/product/%EC%BC%80%EC%9D%B4%ED%8B%B0%EC%9C%84%EC%A6%88-%EB%B9%84%ED%8A%B8%EB%B0%B0%ED%8A%B8-%EB%98%90%EB%A6%AC/607/category/1/display/5/',
    title: '케이티위즈 비트배트 또리',
    price: '35000₩',
  },
];

// items 배열에서 랜덤으로 count개 선택하는 함수
const getRandomItems = (items: ShopItem[], count: number) => {
  const shuffledItems = [...items].sort(() => Math.random() - 0.5);
  return shuffledItems.slice(0, count);
};

const randomFiveItems = getRandomItems(items, 5);

export { randomFiveItems };
