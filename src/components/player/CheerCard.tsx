import { TCheer } from '@/types/player';
import { cn } from '@/utils/cn';
import { FaArrowRight } from 'react-icons/fa';

type CheerCardProps = {
  items: TCheer;
};

const CheerCard = ({ items }: CheerCardProps) => {
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
                <span className="pl-1">{items.leaderName}</span>
              </div>
              <span className="text-kt-red-1">No.</span>
            </div>
            <div className="h-4/5">
              <img
                className="h-full w-full rounded-md object-contain"
                alt="Player 이미지"
                src={items.imgPrvwPath}
              ></img>
            </div>
            <div className="flex items-center gap-2 pt-3 text-kt-white">
              <div className="relative inline-flex">
                <div className="rounded-md border border-transparent bg-slate-800 px-4 py-2 text-center shadow-md transition-all">
                  {items.leaderPosition}
                </div>
                <span className="absolute left-0.5 top-0.5 grid min-h-[12px] min-w-[12px] -translate-x-2/4 -translate-y-2/4 place-items-center rounded-full bg-red-500 px-1 py-1 text-xs font-medium leading-none text-white content-['']"></span>
              </div>
              <div className="relative inline-flex"></div>
            </div>
          </div>
          <div
            className={cn(
              'card-dynamic-size card-front-back rotate-y-180',
              'bg-[linear-gradient(-12deg,_#35383E_30%,#111111_80%)]',
            )}
          >
            <div className="absolute inset-0 cursor-pointer bg-black bg-opacity-65 opacity-0 transition-opacity duration-300 hover:opacity-100"></div>
            <div className="flex flex-col items-center">
              <h2 className="text-4xl text-kt-white">{items.leaderName}</h2>
              <div className="relative mt-12 size-40 cursor-pointer">
                <svg
                  className="size-full rotate-[135deg]"
                  viewBox="0 0 36 36"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="18"
                    cy="18"
                    r="16"
                    fill="none"
                    className="stroke-current text-gray-200 dark:text-neutral-700"
                    strokeWidth="1.5"
                    strokeDasharray="75 100"
                    strokeLinecap="round"
                  ></circle>
                  <circle
                    cx="18"
                    cy="18"
                    r="16"
                    fill="none"
                    className="stroke-current text-red-600 dark:text-red-500"
                    strokeWidth="1.5"
                    strokeDasharray="55.5 100"
                    strokeLinecap="round"
                  ></circle>
                </svg>
                <div className="absolute start-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-center"></div>
              </div>

              <button className="text-xl">자세히보기</button>
              <FaArrowRight />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CheerCard;
