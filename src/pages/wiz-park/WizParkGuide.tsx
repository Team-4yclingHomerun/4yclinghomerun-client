import wizParkGuideImg from '@/assets/wiz-park/wiz_park_guide.svg';
import SectionHeading from '@/components/common/typography/SectionHeading';
import WizParkGuideFacilityInfo from '@/components/wiz-park/WizParkGuideFacilityInfo';
import WizParkGuideSeatInfo from '@/components/wiz-park/WizParkGuideSeatInfo';
import WizParkGuideSection from '@/components/wiz-park/WizParkGuideSection';
import {
  WizParkGuideFacilityInfoData,
  WizParkGuideSeatInfoData,
} from '@/data/WizParkGuide';

const WizParkGuide = () => {
  return (
    <>
      <SectionHeading title="kt wiz park 좌석 안내도" />
      <div className="flex w-full gap-4">
        <img src={wizParkGuideImg} className="w-1/2" />
        <div className="flex w-1/2 flex-col justify-center gap-6">
          <WizParkGuideSection
            title="좌석안내"
            children={WizParkGuideSeatInfoData.map((item) => (
              <WizParkGuideSeatInfo
                key={item.label}
                color={item.color}
                label={item.label}
              />
            ))}
          />
          <WizParkGuideSection
            title="편의시설 안내"
            children={WizParkGuideFacilityInfoData.map((item) => (
              <WizParkGuideFacilityInfo
                key={item.label}
                img={item.img}
                label={item.label}
                engLabel={item.engLabel}
              />
            ))}
          />
        </div>
      </div>
    </>
  );
};
export default WizParkGuide;
