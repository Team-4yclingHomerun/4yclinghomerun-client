import DetailPageLayout from '@/components/common/layout/DetailPageLayout';
import topImg from '@/assets/community/top_img.jpg';

const CommunityPage = () => {
  return (
    <DetailPageLayout
      topImg={topImg}
      title="KT Wiz 커뮤니티"
      subTitle="kt wiz 팬들과 함께하는 커뮤니티에요."
    >
      <h1>Community Page</h1>
    </DetailPageLayout>
  );
};

export default CommunityPage;
