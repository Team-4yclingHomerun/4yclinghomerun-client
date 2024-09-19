import { useRef } from 'react';

import { useInView, motion } from 'framer-motion';

import h1Border from '@/assets/introduction/history_h1_border.png';
import { TIntroductionClub } from '@/types/IntroductionClub';
import { cn } from '@/utils/cn';

const IntroductionClubItem = ({
  data,
  index,
}: {
  data: TIntroductionClub;
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className={cn('flex gap-20', index % 2 === 0 && 'flex-row-reverse')}
      key={data.id}
      initial={{ opacity: 0, x: -100 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      <div className="flex flex-col gap-5">
        <h1 className="text-3xl font-bold text-kt-red-2">{data.header}</h1>
        <img src={h1Border} className="w-48" />
        <p className="text-lg">{data.desc}</p>
      </div>
      {data.img && <img src={data.img} alt={data.header} />}
    </motion.div>
  );
};
export default IntroductionClubItem;
