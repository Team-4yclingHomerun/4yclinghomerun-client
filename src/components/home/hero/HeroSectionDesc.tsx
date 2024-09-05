import { useRef } from 'react';

import { useInView } from 'framer-motion';

import magicBall from '@/assets/home/magic_ball.webp';
import magicBat from '@/assets/home/magic_bat.webp';

const HeroSectionDesc = () => {
  const ref = useRef(null);

  const isInView = useInView(ref, { once: true });

  const handleStyle = (slide: 'left' | 'right') => {
    const transform = () => {
      switch (slide) {
        case 'left':
          return isInView ? 'none' : 'translateX(-200px)';
        case 'right':
          return isInView ? 'none' : 'translateX(200px)';
        default:
          return 'none';
      }
    };
    return {
      transform: transform(),
      opacity: isInView ? 1 : 0,
      transition: 'all 2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
    };
  };

  return (
    <section className="relative h-screen">
      <img
        ref={ref}
        src={magicBall}
        style={handleStyle('left')}
        className="absolute left-80 z-10 h-[40vh]"
      />
      <span
        ref={ref}
        className="absolute right-80 top-20 z-20 text-5xl text-white"
        style={handleStyle('right')}
      >
        WE ARE <span className="text-[#D60C0C]">GREAT</span> MAGIC
      </span>
      <span
        className="absolute bottom-60 left-44 z-10 text-5xl text-white"
        style={handleStyle('left')}
      >
        THE ONLY GOAL IS TO <span className="text-[#D60C0C]">WIN</span>
      </span>
      <img
        src={magicBat}
        className="absolute bottom-40 right-80 h-[40vh]"
        style={handleStyle('right')}
      />
    </section>
  );
};
export default HeroSectionDesc;
