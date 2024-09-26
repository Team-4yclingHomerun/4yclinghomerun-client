import { BsFillGeoAltFill } from 'react-icons/bs';
import { FaBus } from 'react-icons/fa6';
import { IoMdSubway } from 'react-icons/io';

const iconColor = '#f53232';
const iconSize = 40;
export const DirectionData = [
  {
    icon: <BsFillGeoAltFill color={iconColor} size={iconSize} />,
    title: '주소',
    content: [
      '경기도 수원시 장안구 경수대로 893(조원동) 수원',
      '케이티 위즈 파크 (구 : 경기도 수원시 장안구 조원동 775)',
    ],
  },
  {
    icon: <FaBus color={iconColor} size={iconSize} />,
    title: '버스',
    content: [
      '일반 25, 25-2, 27, 36, 55, 62-1, 99, 99-2, 300-1',
      '일반 310, 777',
      '직행 2007, 3000, 7770',
      '좌석 300, 900',
    ],
  },
  {
    icon: <IoMdSubway color={iconColor} size={iconSize} />,
    title: '지하철',
    content: [
      '37, 39번 버스이용 수성중 사거리 하차 후 도보 3분',
      '55분 버스이용 종합운동장 하차 수원역하차 (택시로 20분)',
      '1번, 5번, 8번 버스이용 수성중 사거리 하차 후 도보 3분',
    ],
  },
];
