import { motion } from 'framer-motion';

import PlayerCompareSkeleton from './PlayerCompareSkeleton';
import HotColdZoneSkeleton from './HotColdZoneSkeleton';

const TopPlayerSkeleton = () => {
  return (
    <motion.main
      className="w-full"
      animate={{
        opacity: [0.7, 1, 0.7],
        transition: {
          duration: 1,
          repeat: Infinity,
          ease: 'easeInOut',
        },
      }}
    >
      <section className="flex items-center justify-center gap-12 rounded-lg bg-kt-black-4 p-8">
        <HotColdZoneSkeleton />
        <PlayerCompareSkeleton />
        <HotColdZoneSkeleton />
      </section>
    </motion.main>
  );
};

export default TopPlayerSkeleton;
