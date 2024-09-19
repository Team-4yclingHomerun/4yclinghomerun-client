import { useEffect, useRef } from 'react';

import { motion, useAnimation, useInView } from 'framer-motion';

import winningKt from '@/assets/home/hero/winning_kt.webp';

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
  }, [isInView, controls]);

  return (
    <section className="relative flex h-screen items-center justify-center">
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
