import { useState, useEffect, useRef, useCallback } from 'react';

type Section = {
  id: string;
  content: React.ReactNode;
  color: string;
  className?: string;
};

type UsePageScrollOptions = {
  sections: Section[];
  initialSection?: number;
};

interface TouchEventWithPrevY extends TouchEvent {
  prevTouchY?: number;
}

const usePageScroll = ({
  sections,
  initialSection = 0,
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
    window.addEventListener('wheel', handleScroll, { passive: false });
    window.addEventListener('touchmove', handleScroll, { passive: false });
    window.addEventListener('touchstart', handleTouchStart);

    return () => {
      window.removeEventListener('wheel', handleScroll);
      window.removeEventListener('touchmove', handleScroll);
      window.removeEventListener('touchstart', handleTouchStart);
    };
  }, [handleScroll, handleTouchStart]);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      const index = sections.findIndex((section) => section.id === hash);
      if (index !== -1) {
        setCurrentSection(index);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [sections]);

  useEffect(() => {
    window.location.hash = sections[currentSection].id;
  }, [currentSection, sections]);

  return { currentSection };
};

export { usePageScroll };
