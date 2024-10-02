import { useEffect, useState, useRef, useCallback } from 'react';

import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { MdArrowDownward } from 'react-icons/md';

import Footer from '@/components/footer/Footer';
import ScrollToTopButton from '../ui/button/ScrollToTopButton';
import { TabNavigation } from '@/components/common/ui/tab/TabNavigation';
import { DropTabNavigation } from '@/components/common/ui/tab/DropTabNavigation';
import { DetailPageLayoutWithTabsProps } from '@/types/DetailPageLayoutType';
import { cn } from '@/utils/cn';

const DetailPageLayout = ({
  topImg,
  title,
  subTitle,
  children,
  tabs,
  activeTab,
  onTabChange,
}: DetailPageLayoutWithTabsProps) => {
  const [showDropdownNav, setShowDropdownNav] = useState(false);
  const scrollableRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const scrollToTop = useCallback(() => {
    if (scrollableRef.current) {
      scrollableRef.current.scrollTo(0, 0);
    }
  }, []);

  // 스크롤이 일정 위치 이상 내려가면 탭 네비게이션을 보여줌
  useEffect(() => {
    const handleScroll = () => {
      if (scrollableRef.current) {
        const scrollPosition = scrollableRef.current.scrollTop;
        const triggerPosition = window.innerHeight * 0.65;
        setShowDropdownNav(scrollPosition > triggerPosition);
      }
    };

    const currentRef = scrollableRef.current;
    currentRef?.addEventListener('scroll', handleScroll);
    return () => currentRef?.removeEventListener('scroll', handleScroll);
  }, []);

  // 라우트 변경 시 스크롤 위치 리셋
  useEffect(() => {
    scrollToTop();
  }, [location.pathname, scrollToTop]);

  const isHistoryPage = location.pathname === '/introduce/history';

  return (
    <div
      className={cn(
        'relative min-h-screen',
        !isHistoryPage && 'overflow-hidden',
      )}
    >
      {/* 상단 이미지 */}
      <div className="fixed left-0 top-0 h-full w-full">
        <img
          src={topImg}
          alt="topImg"
          className="h-full w-full scale-110 object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-75"></div>
      </div>

      <div
        className={cn(
          'relative z-10',
          !isHistoryPage && 'section-scrollble h-screen overflow-y-auto',
        )}
        ref={scrollableRef}
      >
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
              onTabChange={onTabChange}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* 위로 가기 버튼 */}
      <div className="fixed bottom-10 right-20 z-50">
        <ScrollToTopButton />
      </div>
    </div>
  );
};

export default DetailPageLayout;
