import { useEffect, useRef, useState } from 'react';

import { useInView } from 'framer-motion';

import { usePageScroll } from '@/hooks/usePageScroll';
import { sections } from '@/data/ContentsSectionData';
import ContentsSectionItem from './ContentsSectionsItem';

const ContentsSection = () => {
  const ref = useRef(null);
  const footerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);
  const [footerHeight, setFooterHeight] = useState(0);
  const { currentSection } = usePageScroll({ sections, isActive: isInView });

  // footer의 높이를 구해서 마지막 섹션의 높이를 조절해줌
  useEffect(() => {
    const updateFooterHeight = () => {
      if (footerRef.current) {
        setFooterHeight(footerRef.current.offsetHeight);
      }
    };
    updateFooterHeight();
    window.addEventListener('resize', updateFooterHeight);

    return () => window.removeEventListener('resize', updateFooterHeight);
  }, []);

  const getTransformValue = () => {
    if (currentSection === sections.length - 1) {
      return `translateY(calc(-${(sections.length - 2) * 100}vh - ${footerHeight}px))`;
    }
    return `translateY(-${currentSection * 100}vh)`;
  };

  return (
    <div className="h-screen w-full overflow-hidden" ref={ref}>
      <div
        className="transition-transform duration-500"
        style={{ transform: getTransformValue() }}
      >
        {sections.map((section, index) => (
          <ContentsSectionItem
            key={section.id}
            section={section}
            index={index}
            ref={index === sections.length - 1 ? footerRef : null}
            currentSection={currentSection}
          />
        ))}
      </div>
    </div>
  );
};

export default ContentsSection;
