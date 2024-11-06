import { TSection } from '@/types/ContentsSections';
import { useState, useEffect, useRef, useCallback } from 'react';

type UsePageScrollOptions = {
  sections: TSection[];
  initialSection?: number;
  isActive: boolean;
};

interface TouchEventWithPrevY extends TouchEvent {
  prevTouchY?: number;
}

const usePageScroll = ({
  sections,
  initialSection = 0,
  isActive,
}: UsePageScrollOptions) => {
  const [currentSection, setCurrentSection] = useState(initialSection);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  const handleScroll = useCallback(
    (event: WheelEvent | TouchEvent) => {
      // 요소 내부의 스크롤인지 확인
      if ((event.target as HTMLElement).closest('.dropdown-scroll')) {
        return; // 요소 내부의 스크롤이면 기본 동작 허용
      }

      event.preventDefault();

      if (scrollTimeout.current) return;

      let delta = 0;
      if (event instanceof WheelEvent) {
        delta = event.deltaY;
      } else if (event instanceof TouchEvent) {
        const touch = event.touches[0];
        const touchEvent = event as TouchEventWithPrevY;
        delta = touch.clientY - (touchEvent.prevTouchY ?? touch.clientY);
        touchEvent.prevTouchY = touch.clientY;
      }

      if (delta > 0 && currentSection < sections.length - 1) {
        setCurrentSection((prev) => prev + 1);
      } else if (delta < 0 && currentSection > 0) {
        setCurrentSection((prev) => prev - 1);
      } else if (currentSection === 0) {
        // 첫번째 sections에서 위로 스크롤할 때
        window.scrollTo({
          top: window.innerHeight * 1.9, // Hero 섹션으로 이동시킴
          behavior: 'smooth', // 부드럽게 스크롤
        });
        window.location.hash = 'hero';
      }

      scrollTimeout.current = setTimeout(() => {
        scrollTimeout.current = null;
      }, 1000);
    },
    [currentSection, sections.length],
  );

  const handleTouchStart = useCallback((event: TouchEvent) => {
    const touchEvent = event as TouchEventWithPrevY;
    touchEvent.prevTouchY = event.touches[0].clientY;
  }, []);

  useEffect(() => {
    if (!isActive) return; // ContentsSection이 화면에 있지 않으면 실행 안 함

    window.addEventListener('wheel', handleScroll, { passive: false });
    window.addEventListener('touchmove', handleScroll, { passive: false });
    window.addEventListener('touchstart', handleTouchStart);

    return () => {
      window.removeEventListener('wheel', handleScroll);
      window.removeEventListener('touchmove', handleScroll);
      window.removeEventListener('touchstart', handleTouchStart);
    };
  }, [handleScroll, handleTouchStart, isActive]);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);

      if (hash === 'hero') {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
        return;
      }
      const index = sections.findIndex((section) => section.id === hash);
      if (index >= 0) {
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: 'smooth',
        });
        setCurrentSection(index);
      }
    };

    window.addEventListener('hashchange', handleHashChange);

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [sections]);

  useEffect(() => {
    if (isActive) {
      window.location.hash = sections[currentSection].id;
      // 스크롤을 맨 밑으로 내려서 Hero 섹션은 보이지 않게 함
      window.scrollTo({
        top: document.body.scrollHeight, // 전체 문서의 높이로 스크롤 이동
        behavior: 'smooth', // 부드럽게 스크롤
      });
    }
  }, [currentSection, sections, isActive]);

  return { currentSection };
};

export { usePageScroll };
