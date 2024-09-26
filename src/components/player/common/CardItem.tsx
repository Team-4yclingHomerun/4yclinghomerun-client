import { useNavigate } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

import { cn } from '@/utils/cn';
import { TCard } from '@/types/player';

interface CardItemProps {
  items: TCard;
  type: `coach` | 'pitcher' | 'hitter' | 'cheer';
}

const CardItem = ({ items, type }: CardItemProps) => {
  const navigate = useNavigate();

  const handleDetailClick = () => {
    if (type === 'cheer') {
      navigate(`/player/${type}/detail/${items.regDttm}`);
    } else {
      navigate(`/player/${type}/detail/${items.pcode}`);
    }
  };

  const formatBirthDay = (dateString: string): string => {
    const parts = dateString.split('.'); // '0000.00.00'를 ['0000', '00', '00']로 분리
    if (parts.length !== 3) return ''; // 잘못된 형식 처리

    const month = parts[1].charAt(1); // 두 번째 자리: 월
    const day = parts[2].slice(-2); // 뒤쪽 자리: 일의 자리 두 개

    return `${month}${day}`; // '0000' + '00' 형태로 결합
  };

  return (
    <>
      <div className="group h-[380px] [perspective:1100px]">
        <div className="relative h-full w-full duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
          <div
            className={cn(
              'card-dynamic-size card-front-back',
              `bg-[linear-gradient(#111111_30%,#35383E_70%)]`,
            )}
          >
            <div className="flex items-center justify-between pb-1.5 text-xl">
              <div className="flex items-center text-kt-white">
                <span>
                  <img
                    className="w-9"
                    alt="KT 로고"
                    src="/src/assets/logo/KTwiz_logo.svg"
                  />
                </span>
                {type === 'cheer' ? items.leaderName : items.playerName}
                <span className="pl-1"></span>
              </div>
            </div>
            <div className="h-4/5 content-center">
              <div>
                <img
                  className="h-full w-full rounded-md object-contain"
                  alt="Player 이미지"
                  src={
                    type === 'cheer' ? items.imgPrvwPath : items.playerPrvwImg
                  }
                ></img>
              </div>
            </div>
            <div className="flex items-center gap-2 pt-3 text-kt-white">
              <div className="relative inline-flex">
                <div className="rounded-md border border-transparent bg-slate-800 px-4 py-2 text-center shadow-md transition-all">
                  {type === 'cheer' ? items.leaderPosition : items.position}
                </div>
                <span className="absolute left-0.5 top-0.5 grid min-h-[12px] min-w-[12px] -translate-x-2/4 -translate-y-2/4 place-items-center rounded-full bg-red-500 px-1 py-1 text-xs font-medium leading-none text-white content-['']"></span>
              </div>
              <div className="relative inline-flex"></div>
            </div>
          </div>

          <div
            onClick={handleDetailClick}
            className={cn(
              'card-dynamic-size card-front-back rotate-y-180',
              'group inset-0 cursor-pointer bg-opacity-65 bg-[linear-gradient(-12deg,_#35383E_30%,#111111_80%)] opacity-65 transition-opacity duration-300 hover:opacity-100',
            )}
          >
            <div className="flex h-full flex-col items-center justify-between">
              <span className="">
                <img
                  className="w-12"
                  alt="KT 로고"
                  src="/src/assets/logo/KTwiz_logo.svg"
                />
              </span>
              <div className="flex flex-col items-center">
                <div className="cursor-pointer text-4xl font-bold text-kt-white">
                  {type === 'cheer' ? items.leaderName : items.playerName}
                </div>
                <div className="cursor-pointer text-5xl font-bold text-kt-red-3">
                  {type === 'cheer'
                    ? formatBirthDay(items.leaderBirthDay)
                    : items.backnum}
                </div>
              </div>
              <div
                className={`flex items-center rounded-md border p-2 hover:bg-white hover:font-bold hover:text-black`}
              >
                <button className="text-xl">자세히보기</button>
                <FaArrowRight />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CardItem;
