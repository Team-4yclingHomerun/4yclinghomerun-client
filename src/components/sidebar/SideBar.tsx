import { HiTicket } from 'react-icons/hi2';
import { FaCarSide } from 'react-icons/fa6';
import { FaYoutube } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { IconType } from 'react-icons';

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

  return (
    <>
      <ul className="fixed right-6 top-[50%] -translate-y-1/2 transform">
        {sideBar.map((item, index) => {
          const IconComponent = iconMap[item.icon];
          return (
            <li
              key={index}
              className="mb-3 flex cursor-pointer flex-col items-center text-xs text-white opacity-80 hover:opacity-100"
            >
              <IconComponent size="40" color="#fff" />
              <span>{item.label}</span>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default SideBar;
