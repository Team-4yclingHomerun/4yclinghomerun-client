import DetailPageLayout from '@/components/common/layout/DetailPageLayout';
import DirectionMap from '@/components/direction/DirectionMap';
import DirectionTable from '@/components/direction/DirectionTable';
import DirectionTitle from '@/components/direction/DirectionTitle';
import topImg from '@/assets/direction/direction_topImg.svg';

const DirectionPage = () => {
  return (
    <DetailPageLayout
      topImg={topImg}
      title="찾아오기"
      subTitle="오시는 길을 상세하게 알려드립니다."
    >
      <DirectionTitle />
      <DirectionMap />
      <DirectionTable />
    </DetailPageLayout>
  );
};

export default DirectionPage;
