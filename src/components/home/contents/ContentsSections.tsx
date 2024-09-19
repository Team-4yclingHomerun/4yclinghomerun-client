import { useRef } from 'react';

import { useInView } from 'framer-motion';

import { usePageScroll } from '@/hooks/usePageScroll';
import { sections } from '@/data/ContentsSectionData';
import ContentsSectionItem from './ContentsSectionsItem';

const ContentsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const { currentSection } = usePageScroll({ sections, isActive: isInView });

  const getTransformValue = () => {
    if (currentSection === sections.length - 1) {
      return `translateY(calc(-${(sections.length - 2) * 100}vh - 40vh))`;
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
            currentSection={currentSection}
          />
        ))}
      </div>
    </div>
  );
};

export default ContentsSection;
