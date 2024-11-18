import { useRef } from 'react';

import SectionHeading from '@/components/common/typography/SectionHeading';

const DirectionTitle = () => {
  const tooltipRef = useRef<HTMLSpanElement>(null); // 타입 명시

  const handleMouseEnter = () => {
    if (tooltipRef.current) {
      tooltipRef.current.style.display = 'block'; // 마우스가 들어오면 말풍선 보이기
    }
  };

  const handleMouseLeave = () => {
    if (tooltipRef.current) {
      tooltipRef.current.style.display = 'none'; // 마우스가 나가면 말풍선 숨기기
    }
  };

  return (
    <header className="flex items-center justify-between">
      <SectionHeading title="수원 KT위즈파크 위치" />
      <a
        href="https://map.naver.com/p/entry/place/13491582?c=15.00,0,0,0,dh"
        target="_blank"
        className="relative mb-3 bg-kt-red-3 px-4 py-1 text-lg"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        찾아오기
        <span
          ref={tooltipRef} // 말풍선 요소에 ref 연결
          className="absolute -left-8 top-14 z-[1000] hidden -translate-x-1/2 whitespace-nowrap rounded bg-kt-gray-2 px-2.5 py-1 text-kt-white"
        >
          찾아오기 버튼을 누르시면, <br />
          출발지에서 야구장으로 가는 길을 <br />
          쉽게 확인하실 수 있습니다.
        </span>
      </a>
    </header>
  );
};

export default DirectionTitle;
