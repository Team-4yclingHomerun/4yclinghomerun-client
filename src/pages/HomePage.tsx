import ContentsSections from '@/components/home/contents/ContentsSections';
import HeroSection from '@/components/home/hero/HeroSection';
import SideBar from '@/components/home/sidebar/SideBar';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <ContentsSections />
      <SideBar />
    </>
  );
};

export default HomePage;
