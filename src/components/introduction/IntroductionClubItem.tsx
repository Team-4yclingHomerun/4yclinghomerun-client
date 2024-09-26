import h1Border from '@/assets/introduction/history_h1_border.png';
import { TIntroductionData } from '@/types/IntroductionData';

const IntroductionClubItem = ({ data }: { data: TIntroductionData }) => {
  return (
    <>
      <div className="flex flex-col gap-5">
        <h1 className="text-3xl font-bold text-kt-red-2">{data.header}</h1>
        <img src={h1Border} className="w-48" />
        <p className="text-lg">{data.desc}</p>
      </div>
      {data.img && <img src={data.img} alt={data.header} />}
    </>
  );
};
export default IntroductionClubItem;
