import ContentsSections from '@/components/home/contents/ContentsSections';
import HeroSection from '@/components/home/hero/HeroSection';
import ProgressBar from '@/components/home/progressbar/ProgressBar';
import SideBar from '@/components/home/sidebar/SideBar';

const HomePage = () => {
  return (
    <>
      <ProgressBar />
      <HeroSection />
      <ContentsSections />
      <SideBar />
    </>
  );
};

export default HomePage;
