import { HiTicket } from 'react-icons/hi2';
import { FaCarSide } from 'react-icons/fa6';
import { FaYoutube } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { IconType } from 'react-icons';

const SideBar = () => {
  const sideBar = ['HiTicket', 'FaCarSide', 'FaYoutube', 'AiFillInstagram'];

  const iconMap: { [key: string]: IconType } = {
    HiTicket: HiTicket,
    FaCarSide: FaCarSide,
    FaYoutube: FaYoutube,
    AiFillInstagram: AiFillInstagram,
  };

  return (
    <>
      <ul className="fixed right-10 top-[50%] -translate-y-1/2 transform">
        {sideBar.map((item, index) => {
          const IconComponent = iconMap[item];
          return (
            <li key={index} className="mb-3 cursor-pointer">
              <IconComponent size="40" color="#eceef2" />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default SideBar;
