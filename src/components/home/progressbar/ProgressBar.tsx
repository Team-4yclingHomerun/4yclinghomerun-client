import { useEffect, useState } from 'react';

import { useScroll, motion, AnimatePresence } from 'framer-motion';

import { sectionData } from '@/data/ProgressBar';
import { useMouseHover } from '@/hooks/useMouseHover';
import SectionIndicator from './SectionIndicator';

const ProgressBar = () => {
  const { scrollYProgress } = useScroll();
  const [adjustedScale, setAdjustedScale] = useState(0);
  const [hashNumber, setHashNumber] = useState(
    Number(window.location.hash.match(/\d+/g)),
  );
  const { isHover, handleMouseOver, handleMouseOut } = useMouseHover();

  useEffect(() => {
    const handleHashChange = () => {
      setHashNumber(Number(window.location.hash.match(/\d+/g)));
    };
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const progress = scrollYProgress.get();
      setAdjustedScale(Math.min(1, progress / 0.6));
    };

    scrollYProgress.on('change', handleScroll);

    return () => scrollYProgress.clearListeners();
  }, [scrollYProgress]);

  return (
    <motion.div
      className="fixed left-0 top-20 z-40 flex h-full flex-col bg-kt-gray-2"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      initial={{ width: '1rem' }}
      whileHover={{
        width: '2em',
        transition: { duration: 0.3 },
      }}
      exit={{
        width: '1rem',
        transition: { duration: 0.3 },
      }}
    >
      <div className="relative h-1/6">
        <motion.div
          className="h-full origin-top bg-red-800"
          style={{ scaleY: adjustedScale }}
        />
        {isHover && <SectionIndicator title="Hero" section="hero" />}
      </div>

      {sectionData.map((item, index) => (
        <div className="relative h-1/6" key={item.id}>
          <AnimatePresence>
            {hashNumber > index && (
              <motion.div
                className="h-full origin-top bg-red-800"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                exit={{ scaleY: 0 }}
                transition={{
                  duration: 0.5,
                  ease: 'easeInOut',
                }}
              />
            )}
          </AnimatePresence>
          {isHover && (
            <SectionIndicator title={item.title!} section={item.id} />
          )}
        </div>
      ))}
    </motion.div>
  );
};

export default ProgressBar;
