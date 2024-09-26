import { IntroductionClubData } from '@/mocks/introduction/MockIntroductionClub';
import IntroductionContent from '@/components/common/IntroductionContent';
import IntroductionClubItem from '@/components/introduction/IntroductionClubItem';

const IntroductionClub = () => {
  return (
    <div className="space-y-36">
      {IntroductionClubData.map((data, index) => (
        <IntroductionContent
          key={data.id}
          data={data}
          index={index}
          children={<IntroductionClubItem data={data} />}
        />
      ))}
    </div>
  );
};
export default IntroductionClub;
