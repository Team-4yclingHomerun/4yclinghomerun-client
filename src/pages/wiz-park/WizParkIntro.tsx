import { useRef } from 'react';

import { motion, useInView } from 'framer-motion';

import { WizParkIntroData } from '@/mocks/wiz-park/MockWizParkIntro';
import wizparkImg from '@/assets/wiz-park/suwon_kt_wiz_park.webp';
import h1Border from '@/assets/introduction/history_h1_border.png';
import IntroductionContent from '@/components/common/IntroductionContent';
import WizParkIntroItem from '@/components/wiz-park/WizParkIntroItem';

const WizParkIntro = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <>
      <img src={wizparkImg} className="w-full" />
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: -100 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h1 className="mt-5 text-4xl text-kt-red-2">
          복합 문화공간의 첨단 야구장! 수원구장
        </h1>
        <img src={h1Border} className="my-6 w-48" />
      </motion.div>
      <div className="space-y-10">
        {WizParkIntroData.map((data, index) => (
          <IntroductionContent
            key={data.id}
            data={data}
            index={index}
            children={<WizParkIntroItem data={data} />}
          />
        ))}
      </div>
    </>
  );
};

export default WizParkIntro;
