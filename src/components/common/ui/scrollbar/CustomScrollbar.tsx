import { useState, useEffect, useRef } from 'react';

import { useScroll } from 'framer-motion';

import { cn } from '@/utils/cn';
import useMouseHover from '@/hooks/useMouseHover';
import { useMouseDrag } from '@/hooks/useMouseDrag';

import '@/styles/CustomScrollbar.css';

type CustomScrollbarProps = {
  children: React.ReactNode;
  containerClassName?: string;
  scrollbarClassName?: string;
  hideScrollbar?: boolean;
};

const CustomScrollbar = ({
  children,
  containerClassName = '',
  scrollbarClassName = '',
  hideScrollbar = true,
}: CustomScrollbarProps) => {
  const [showScrollbar, setShowScrollbar] = useState(
    hideScrollbar ? false : true,
  );
  const { isHover, handleMouseOut, handleMouseOver } = useMouseHover();
  const { isDragging, handleMouseDown, handleMouseUp, positionY } =
    useMouseDrag();
  const [startPositionY, setStartPositionY] = useState(0);
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [scrollbarHeight, setScrollbarHeight] = useState<number>(0);
  const [containerHeight, setContainerHeight] = useState<number>(0);
  const [contentHeight, setContentHeight] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout>();

  const { scrollYProgress } = useScroll({ container: containerRef });

  useEffect(() => {
    if (containerRef.current) {
      // 컨테이너 크기 파악
      setContainerHeight(containerRef.current.clientHeight);

      // 컨텐츠 크기 파악
      const contentHeightCalc = containerRef.current.children[0].clientHeight;
      setContentHeight(contentHeightCalc);
    }
  }, [containerRef]);

  useEffect(() => {
    // 스크롤바 크기 조정
    const scrollbarHeightCalc =
      (containerHeight / contentHeight) * containerHeight;
    setScrollbarHeight(scrollbarHeightCalc);
  }, [containerHeight, contentHeight]);

  useEffect(() => {
    if (hideScrollbar) {
      if (isHover || isDragging) {
        clearTimeout(timeoutRef.current);
      } else {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }

        timeoutRef.current = setTimeout(() => {
          setShowScrollbar(false);
        }, 2000);
      }
    }
  }, [isHover, isDragging, showScrollbar]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    let animationFrameId: number | undefined;

    if (isDragging && containerRef.current) {
      const MIN_DELTA = 2;
      const deltaY = positionY - startPositionY;

      if (Math.abs(deltaY) > MIN_DELTA) {
        animationFrameId = requestAnimationFrame(() => {
          if (containerRef.current) {
            const maxScrollTop = containerHeight - scrollbarHeight;

            const newScrollPercentage = Math.min(
              maxScrollTop,
              Math.max(0, scrollPercentage + deltaY),
            );

            setScrollPercentage(newScrollPercentage);
            const scrollRatio = contentHeight / containerHeight;
            containerRef.current.scrollTop = newScrollPercentage * scrollRatio;

            setStartPositionY(positionY);
          }
        });
      }
    }

    // cleanup
    return () => {
      if (animationFrameId !== undefined) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [positionY, isDragging]);

  const handleScrollbar = () => {
    if (containerRef.current) {
      // 스크롤바 위치 조정
      const maxScrollTop = containerHeight - scrollbarHeight;
      const newScrollTop =
        scrollYProgress.get() * (containerHeight - scrollbarHeight);

      // 스크롤바가 요소의 끝을 넘지 않도록 제한
      setScrollPercentage(Math.min(newScrollTop, maxScrollTop));
    }
  };

  const handleWheelScroll = () => {
    handleScrollbar();
    setShowScrollbar(true);
  };

  const onDragStart = (event: React.MouseEvent) => {
    event.preventDefault(); // 기본 드래그 동작 방지
    event.stopPropagation(); // 이벤트 버블링 방지
    handleMouseDown();
    setStartPositionY(positionY);
  };

  return (
    <div className={cn('relative', containerClassName)}>
      <div
        ref={containerRef}
        onScroll={handleWheelScroll}
        className="scrollbar-custom h-full"
      >
        {children}
      </div>
      <div
        className={cn(
          'absolute right-0 top-0 h-full w-3 bg-transparent transition-opacity duration-300',
          showScrollbar ? 'opacity-100' : 'opacity-0',
          isHover || isDragging
            ? 'w-4 rounded-full bg-[rgba(255,255,255,0.1)]'
            : 'bg-transparent',
        )}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <div
          className={cn(
            'absolute w-full rounded-full bg-kt-gray-2',
            scrollbarClassName,
            isHover || isDragging ? 'opacity-100' : 'opacity-60',
            isDragging ? 'bg-kt-white' : 'bg-kt-gray-2',
          )}
          style={{
            top: `${scrollPercentage}px`,
            height: containerRef.current ? `${scrollbarHeight}px` : '20%',
          }}
          onMouseDownCapture={onDragStart}
          onMouseUpCapture={handleMouseUp}
        />
      </div>
    </div>
  );
};

export default CustomScrollbar;
