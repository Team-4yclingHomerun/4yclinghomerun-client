import { IconType } from 'react-icons';
import { AiFillInstagram } from 'react-icons/ai';
import { FaCarSide } from 'react-icons/fa6';
import { FaYoutube } from 'react-icons/fa';
import { HiTicket } from 'react-icons/hi2';
import { MdOutlineVerticalAlignTop } from 'react-icons/md';

const SideBar = () => {
  const sideBar = [
    { icon: 'HiTicket', label: '티켓예매' },
    { icon: 'FaCarSide', label: '주차예약' },
    { icon: 'FaYoutube', label: '유튜브' },
    { icon: 'AiFillInstagram', label: '인스타그램' },
  ];

  const iconMap: { [key: string]: IconType } = {
    HiTicket: HiTicket,
    FaCarSide: FaCarSide,
    FaYoutube: FaYoutube,
    AiFillInstagram: AiFillInstagram,
  };

  const clickHandler = (i: number) => {
    const toUrl = [
      'https://www.ktwiz.co.kr/ticket/reservation',
      'https://www.ktwiz.co.kr/wizpark/parking',
      'https://www.youtube.com/c/ktwiztv',
      'https://www.instagram.com/ktwiz.pr/',
    ];
    window.location.href = toUrl[i];
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <ul className="fixed right-6 top-[50%] -translate-y-1/2 transform text-white">
        {sideBar.map((item, index) => {
          const IconComponent = iconMap[item.icon];
          return (
            <li
              key={index}
              className="mb-3 flex cursor-pointer flex-col items-center text-xs opacity-80 hover:opacity-100"
              onClick={() => clickHandler(index)}
            >
              <IconComponent size="36" color="#fff" />
              <span>{item.label}</span>
            </li>
          );
        })}
        <span
          className="mb-3 flex cursor-pointer flex-col items-center text-xs opacity-80 hover:opacity-100"
          onClick={scrollToTop}
        >
          <MdOutlineVerticalAlignTop size="20" color="#fff" />
          TOP
        </span>
      </ul>
    </>
  );
};

export default SideBar;
