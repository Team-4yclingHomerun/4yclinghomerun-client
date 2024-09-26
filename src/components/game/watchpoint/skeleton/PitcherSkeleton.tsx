import { motion } from 'framer-motion';

import PitchTypeBarSkeleton from './PitchTypeBarSkeleton';
import PlayerCompareSkeleton from './PlayerCompareSkeleton';

const PitcherSkeleton = () => {
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
        {/* 왼쪽 구종 */}
        <PitchTypeBarSkeleton side="left" />

        {/* 선발 투수 비교 */}
        <PlayerCompareSkeleton />

        {/* 오른쪽 구종 */}
        <PitchTypeBarSkeleton side="right" />
      </section>
    </motion.main>
  );
};

export default PitcherSkeleton;
