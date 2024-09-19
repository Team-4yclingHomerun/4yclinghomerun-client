import { IntroductionClubData } from '@/mocks/introduction/MockIntroductionClub';

import IntroductionClubItem from '@/components/introduction/IntroductionClubItem';

const IntroductionClub = () => {
  return (
    <div className="flex flex-col gap-36">
      {IntroductionClubData.map((data, index) => (
        <IntroductionClubItem key={data.id} data={data} index={index} />
      ))}
    </div>
  );
};
export default IntroductionClub;
