import { useEffect, useState, useCallback, useRef } from 'react';

import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import { MdArrowDownward } from 'react-icons/md';

import Footer from '@/components/footer/Footer';
import ScrollToTopButton from '../ui/button/ScrollToTopButton';
import { TabNavigation } from '@/components/common/ui/tab/TabNavigation';
import { DropTabNavigation } from '@/components/common/ui/tab/DropTabNavigation';
import { DetailPageLayoutWithTabsProps } from '@/types/DetailPageLayoutType';
import CustomScrollbar from '../ui/scrollbar/CustomScrollbar';

const DetailPageLayout = ({
  topImg,
  title,
  subTitle,
  children,
  tabs,
  activeTab,
  onTabChange,
  activeSubTab,
  onSubTabChange,
}: DetailPageLayoutWithTabsProps) => {
  const [showDropdownNav, setShowDropdownNav] = useState(false);
  const location = useLocation();

  const scrollContainerRef = useRef<HTMLElement | null>(null);
  const { scrollY } = useScroll({
    container: scrollContainerRef,
    layoutEffect: false,
  });

  const scrollToTop = useCallback(() => {
    scrollContainerRef.current?.scrollTo(0, 0);
  }, []);

  const handleScroll = useCallback(() => {
    const progress = scrollY.get();
    setShowDropdownNav(progress > window.innerHeight * 0.65 ? true : false);
  }, []);

  // 스크롤이 일정 위치 이상 내려가면 탭 네비게이션을 보여줌
  useEffect(() => {
    scrollY.on('change', handleScroll);
    return () => scrollY.clearListeners();
  }, [scrollY]);

  useEffect(() => {
    const scrollContainer = document.querySelector(
      '.scrollbar-custom',
    ) as HTMLElement | null;
    scrollContainerRef.current = scrollContainer;
    scrollToTop();
    setShowDropdownNav(false);
  }, [location.pathname, scrollToTop]);

  return (
    <div className="relative min-h-screen">
      {/* 상단 이미지 */}
      <div className="fixed left-0 top-0 h-full w-full">
        <img
          src={topImg}
          alt="topImg"
          className="h-full w-full scale-110 object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-75"></div>
      </div>
      <CustomScrollbar containerClassName="h-screen z-10" marginTop={80}>
        <div>
          {/* 상단 타이틀 */}
          <div className="flex h-[65vh] flex-col items-center justify-center gap-6 pt-20">
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-6xl font-extrabold text-white shadow-inner">
                {title}
              </h1>
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-2xl font-extrabold text-gray-200 shadow-inner"
            >
              {subTitle}
            </motion.p>
          </div>

          {/* 스크롤 컨텐츠 */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <div className="relative h-64 w-full bg-gradient-to-b from-transparent via-black/60 to-black">
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                {/* 화살표 */}
                <motion.div
                  animate={{
                    y: [0, -20, 0],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  <MdArrowDownward size={50} color="white" />
                </motion.div>

                {/* 탭 네비게이션 */}
                {tabs && activeTab !== undefined && onTabChange && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.6 }}
                    className="my-10"
                  >
                    <TabNavigation
                      tabs={tabs}
                      activeTab={activeTab}
                      onTabChange={onTabChange}
                      activeSubTab={activeSubTab}
                      onSubTabChange={onSubTabChange}
                    />
                  </motion.div>
                )}
              </div>
            </div>

            <div className="bg-black px-40 py-28 text-white">
              <div className="h-full">{children}</div>
            </div>
          </motion.div>

          <div className="relative h-44 w-full bg-gradient-to-b from-black via-transparent to-white"></div>

          {/* Footer */}
          <footer className="relative z-20">
            <Footer />
          </footer>
        </div>
      </CustomScrollbar>

      {/* 스크롤링 시 탭 네비게이션 */}
      <AnimatePresence>
        {showDropdownNav && tabs && activeTab !== undefined && onTabChange && (
          <motion.div
            initial={{ y: '-50%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '-50%', opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-28 z-50 flex justify-center"
          >
            <DropTabNavigation
              tabs={tabs}
              activeTab={activeTab}
              onTabChange={(index) => {
                onTabChange(index);
                scrollToTop();
                setShowDropdownNav(false);
              }}
              activeSubTab={activeSubTab}
              onSubTabChange={onSubTabChange}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* 위로 가기 버튼 */}
      <div className="fixed bottom-10 right-20 z-50">
        <ScrollToTopButton scrollContainerRef={scrollContainerRef} />
      </div>
    </div>
  );
};

export default DetailPageLayout;
