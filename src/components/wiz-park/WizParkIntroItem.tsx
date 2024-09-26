import { TIntroductionData } from '@/types/IntroductionData';

const WizParkIntroItem = ({ data }: { data: TIntroductionData }) => {
  return (
    <>
      <div className="space-y-2">
        <h1 className="text-2xl font-bold">{data.header}</h1>
        <p className="text-lg text-kt-gray-2">{data.desc}</p>
      </div>
    </>
  );
};
export default WizParkIntroItem;
