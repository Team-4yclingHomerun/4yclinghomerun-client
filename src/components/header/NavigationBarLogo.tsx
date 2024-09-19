import { useEffect, useLayoutEffect, useState, useRef } from 'react';

import { Link, useLocation } from 'react-router-dom';
import { motion, useAnimation, useScroll } from 'framer-motion';

import logo from '@/assets/logo/logo_gray_3d.svg';
import { ROUTER_PATH } from '@/constants/constant';

const NavigationBarLogo = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const prevPathRef = useRef(location.pathname); // 이전 경로 저장 → 홈페이지로 진입할 때마다 로고 크기를 커진 상태로 설정하기 위함
  const controls = useAnimation();
  const { scrollYProgress } = useScroll();

  const isHomePage = location.pathname === '/';
  const yPos = window.innerHeight / 2 - window.innerHeight / 8;

  useLayoutEffect(() => {
    if (!isHomePage) {
      controls.set({ scale: 1, y: 0 });
      setIsScrolled(true);
      return;
    }

    // 홈페이지로 진입할 때마다 로고를 커진 상태로 설정
    setIsScrolled(false);
    controls.set({ scale: 4, y: yPos });

    prevPathRef.current = location.pathname;
  }, [controls, yPos, isHomePage, location.pathname]);

  useEffect(() => {
    if (!isHomePage) return;

    const handleScroll = () => {
      const progress = scrollYProgress.get();

      if (progress === 0) {
        setIsScrolled(false);
        controls.start({
          scale: 4,
          y: yPos,
          transition: { ease: 'easeIn' },
        });
      } else if (progress > 0 && progress <= 0.07) {
        controls.start({
          scale: 4 - (3 * progress) / 0.07, // 스크롤을 내릴수록 로고 크기가 줄어듦
          y: yPos * (1 - progress / 0.07), // 스크롤을 내릴수록 로고가 위로 올라감
          transition: { ease: 'easeIn' },
        });
      } else if (progress > 0.07) {
        setIsScrolled(true);
        controls.start({
          scale: 1,
          y: 0,
          transition: { ease: 'easeOut' },
        });
      }
    };

    scrollYProgress.on('change', handleScroll);
    return () => scrollYProgress.clearListeners();
  }, [scrollYProgress, controls, yPos, isHomePage]);

  return (
    <Link
      to={ROUTER_PATH.HOME}
      className="fixed left-0 right-0 top-2 mx-auto size-24"
    >
      <motion.img
        src={logo}
        className="drop-shadow-[0_11px_6px_rgb(0,0,0)]"
        initial={isScrolled ? { scale: 1, y: 0 } : { scale: 4, y: yPos }}
        animate={controls}
      />
    </Link>
  );
};

export default NavigationBarLogo;
