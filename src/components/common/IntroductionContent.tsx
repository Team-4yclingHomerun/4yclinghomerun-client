import { ReactNode, useRef } from 'react';

import { useInView, motion } from 'framer-motion';

import { TIntroductionData } from '@/types/IntroductionData';
import { cn } from '@/utils/cn';

const IntroductionContent = ({
  data,
  index,
  children,
}: {
  data: TIntroductionData;
  index: number;
  children: ReactNode;
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
      {children}
    </motion.div>
  );
};
export default IntroductionContent;
