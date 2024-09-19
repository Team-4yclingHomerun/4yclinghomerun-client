import { useEffect } from 'react';

import { motion, useAnimation, useScroll } from 'framer-motion';
import { SlArrowDown } from 'react-icons/sl';

import heroImg from '@/assets/images/home/hero_banner.jpg';

const HeroSectionBanner = () => {
  const bannerControls = useAnimation();
  const arrowControls = useAnimation();
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    arrowControls.start({
      y: [0, 20, 0],
      transition: {
        duration: 1.5,
        ease: 'easeInOut',
        repeat: Infinity,
      },
    });

    const handleScroll = () => {
      const progress = scrollYProgress.get();

      if (progress > 0 && progress < 0.1) {
        bannerControls.start({ opacity: 1 });
        arrowControls.start({ opacity: 0.5 });
      } else if (progress > 0.15) {
        arrowControls.start({ opacity: 0 });
        bannerControls.start({ opacity: 0 });
      }
    };

    scrollYProgress.on('change', handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrollYProgress, bannerControls]);

  return (
    <section className="relative h-screen">
      <motion.img
        src={heroImg}
        className="h-full w-full object-cover"
        initial={{ opacity: 1 }}
        animate={bannerControls}
      />
      <motion.div
        className="absolute bottom-16 left-[48%]"
        initial={{ opacity: 0.5 }}
        animate={arrowControls}
      >
        <SlArrowDown size="70px" color="#ECEEF2" />
      </motion.div>
    </section>
  );
};
export default HeroSectionBanner;
