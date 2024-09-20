import { FaArrowRight } from 'react-icons/fa';

import { TCoach } from '@/types/player';
import { cn } from '@/utils/cn';
import { useNavigate } from 'react-router-dom';

type CoachCardProps = {
  items: TCoach;
};

const CoachCard = ({ items }: CoachCardProps) => {
  const navigate = useNavigate();

  const handleDetailClick = () => {
    navigate(`/player/coach/detail/${items.pcode}`);
  };

  return (
    <>
      <div className="group h-[430px] [perspective:1100px]">
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
                <span className="pl-1">{items.playerName}</span>
              </div>
            </div>
            <div className="h-4/5">
              <img
                className="h-full w-full rounded-md object-contain"
                alt="Player 이미지"
                src={items.playerPrvwImg}
              ></img>
            </div>
            <div className="flex items-center gap-2 pt-3 text-kt-white">
              <div className="relative inline-flex">
                <div className="rounded-md border border-transparent bg-slate-800 px-4 py-2 text-center shadow-md transition-all">
                  {items.position}
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
              'group bg-[linear-gradient(-12deg,_#35383E_30%,#111111_80%)]',
            )}
          >
            <div className="absolute inset-0 cursor-pointer bg-black bg-opacity-65 opacity-0 transition-opacity duration-300 hover:opacity-100"></div>
            <div className="flex h-full flex-col items-center justify-between">
              <h2 className="z-10 cursor-default text-4xl text-kt-white">
                {items.playerName}
              </h2>
              <div className="flex flex-col items-center">
                {items.career.split('-').map((team, index) => (
                  <div
                    key={index}
                    className="z-10 cursor-default text-xl text-kt-white transition-colors duration-300 hover:text-kt-red-3"
                  >
                    {team}
                  </div>
                ))}
              </div>
              <div className="z-10 flex items-center rounded-md border p-2 hover:bg-white hover:font-bold hover:text-black">
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
export default CoachCard;
