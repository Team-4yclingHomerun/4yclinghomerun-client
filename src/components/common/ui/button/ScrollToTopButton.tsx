import { useState, useEffect } from 'react';

import { useLocation } from 'react-router-dom';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { MdOutlineVerticalAlignTop } from 'react-icons/md';

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);
  const controls = useAnimation();
  const location = useLocation();

  // 스크롤이 일정 위치 이상 내려가면 스크롤 버튼을 보여줌
  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector('.section-scrollble');
      if (section && section.scrollTop > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    // 스크롤 이벤트 등록
    const section = document.querySelector('.section-scrollble');
    section?.addEventListener('scroll', handleScroll);
    return () => {
      section?.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // 버튼 애니메이션
  useEffect(() => {
    if (showButton) {
      controls.start({
        y: [0, -10, 0],
        transition: {
          duration: 1,
          ease: 'easeInOut',
          repeat: Infinity,
        },
      });
    }
  }, [showButton, controls]);

  // 스크롤 버튼 클릭 시 상단으로 이동
  const scrollToTop = () => {
    const section = document.querySelector('.section-scrollble');
    section?.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (location.pathname === '/introduce/history') return null;

  return (
    <AnimatePresence>
      {showButton && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.3 }}
          onClick={scrollToTop}
          className="flex flex-col items-center rounded-full p-2 text-gray-200 transition-colors duration-300 hover:text-neutral-400"
        >
          <motion.div
            animate={controls}
            className="flex flex-col items-center rounded-full bg-kt-gray-1 px-4 py-2"
          >
            <MdOutlineVerticalAlignTop size={20} />
            <span className="mt-1 text-xs font-bold">TOP</span>
          </motion.div>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTopButton;
