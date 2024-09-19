import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import { sections, sectionVariants } from '@/data/ContentsSectionData';
import headerLogo from '@/assets/logo/image_symbol.svg';
import { TSection } from '@/types/ContentsSections';

type ContentsSectionItemProps = {
  section: TSection;
  index: number;
  currentSection: number;
};

const ContentsSectionItem = ({
  section,
  index,
  currentSection,
}: ContentsSectionItemProps) => {
  return (
    <motion.div
      key={section.id}
      variants={sectionVariants}
      initial="hidden"
      animate={
        index === currentSection ||
        (index === sections.length - 2 &&
          currentSection === sections.length - 1)
          ? 'visible'
          : 'hidden'
      }
      className={`w-full bg-black text-4xl font-bold text-white ${
        section.isFooter ? 'h-[40vh]' : 'h-screen'
      }`}
    >
      {!section.isFooter ? (
        <div className="h-full w-full px-40 pt-32">
          <header className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <h1 className="text-4xl font-extrabold text-white">
                {section.title}
              </h1>
              <img src={headerLogo} className="size-10" />
            </div>
            {section.seeMoreLink !== undefined && (
              <Link
                to={section.seeMoreLink}
                className="w-fit border px-5 py-2 text-center text-lg transition-colors duration-300 hover:bg-white hover:text-black"
              >
                더보기
              </Link>
            )}
          </header>
          {section.content}
        </div>
      ) : (
        <div className="h-full w-full">{section.content}</div>
      )}
    </motion.div>
  );
};

export default ContentsSectionItem;
