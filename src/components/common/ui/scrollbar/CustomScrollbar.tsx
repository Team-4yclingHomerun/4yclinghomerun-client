import { useState, useEffect, useRef } from 'react';

import { useScroll } from 'framer-motion';

import { cn } from '@/utils/cn';
import useMouseHover from '@/hooks/useMouseHover';
import { useMouseDrag } from '@/hooks/useMouseDrag';

import '@/styles/CustomScrollbar.css';

type CustomScrollbarProps = {
  children: React.ReactNode;
  containerClassName?: string;
  hideScrollbar?: boolean;
  marginTop?: number;
};

const CustomScrollbar = ({
  children,
  containerClassName = '',
  hideScrollbar = true,
  marginTop = 0,
}: CustomScrollbarProps) => {
  const [showScrollbar, setShowScrollbar] = useState(!hideScrollbar);
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
    const containerEl = containerRef.current;
    if (!containerEl) return;

    const updateHeights = () => {
      setContainerHeight(containerEl.clientHeight);
      setContentHeight(containerEl.scrollHeight);
    };

    const resizeObserver = new ResizeObserver(() => {
      updateHeights();
    });

    resizeObserver.observe(containerEl);
    resizeObserver.observe(containerEl.children[0]);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      resizeObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    setScrollbarHeight(
      (containerHeight / contentHeight) * containerHeight - marginTop,
    );
  }, [containerHeight, contentHeight, marginTop]);

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
    let animationFrameId: number | undefined;

    if (isDragging && containerRef.current) {
      const MIN_DELTA = 2;
      const deltaY = positionY - startPositionY;

      if (Math.abs(deltaY) > MIN_DELTA) {
        animationFrameId = requestAnimationFrame(() => {
          if (containerRef.current) {
            const maxScrollTop = containerHeight - scrollbarHeight - marginTop;

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

    return () => {
      if (animationFrameId !== undefined) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [positionY, isDragging]);

  const handleScrollbar = () => {
    if (containerRef.current) {
      const maxScrollTop = containerHeight - scrollbarHeight - marginTop;
      const newScrollTop =
        scrollYProgress.get() * (containerHeight - scrollbarHeight - marginTop);

      setScrollPercentage(Math.min(newScrollTop, maxScrollTop));
    }
  };

  const handleWheelScroll = () => {
    handleScrollbar();
    setShowScrollbar(true);
  };

  const onDragStart = (event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
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
      {!(containerHeight === contentHeight) && (
        <div
          className={cn(
            `absolute bottom-0 right-0 z-30 w-3 bg-transparent transition-opacity duration-300`,
            showScrollbar ? 'opacity-100' : 'opacity-0',
            isHover || isDragging
              ? 'w-4 rounded-full bg-[rgba(255,255,255,0.1)]'
              : 'bg-transparent',
          )}
          style={{
            height: containerRef.current
              ? `${containerHeight - marginTop}px`
              : '100%',
          }}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          <div
            className={cn(
              'absolute w-full rounded-full bg-kt-gray-2',
              isHover || isDragging ? 'opacity-100' : 'opacity-70',
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
      )}
    </div>
  );
};

export default CustomScrollbar;
