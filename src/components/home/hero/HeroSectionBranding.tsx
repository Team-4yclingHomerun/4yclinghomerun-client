import { useEffect, useRef } from 'react';

import { motion, useAnimation, useInView } from 'framer-motion';

import winningKt from '@/assets/images/home/winning_kt.webp';

const HeroSectionBranding = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  useEffect(() => {
    if (isInView === false) {
      controls.set({ opacity: 0 });
    } else {
      controls.start({ opacity: 1 });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView]);

  return (
    <section className="relative h-screen">
      <motion.img
        ref={ref}
        src={winningKt}
        initial={{ opacity: 0 }}
        animate={controls}
        transition={{ duration: 1, delay: 1 }}
      />
    </section>
  );
};
export default HeroSectionBranding;
