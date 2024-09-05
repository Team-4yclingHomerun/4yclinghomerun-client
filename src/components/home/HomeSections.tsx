import { motion } from 'framer-motion';

import TeamSchedule from '@/components/home/schedule/TeamSchedule';
import { usePageScroll } from '@/hooks/usePageScroll';

const sections = [
  { id: 'sec1', content: <TeamSchedule />, color: 'bg-black' },
  { id: 'sec2', content: 'NEWS', color: 'bg-yellow-500' },
  { id: 'sec3', content: 'STORE', color: 'bg-red-500' },
  { id: 'sec4', content: 'EVENT', color: 'bg-purple-500' },
  { id: 'sec5', content: 'FOOTER', color: 'bg-black', isFooter: true },
];

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

const HomeSections = () => {
  const { currentSection } = usePageScroll({ sections });

  const getTransformValue = () => {
    if (currentSection === sections.length - 1) {
      return `translateY(calc(-${(sections.length - 2) * 100}vh - 30vh))`;
    }
    return `translateY(-${currentSection * 100}vh)`;
  };

  return (
    <div className="h-screen w-full overflow-hidden">
      <div
        className="transition-transform duration-500"
        style={{ transform: getTransformValue() }}
      >
        {sections.map((section, index) => (
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
            className={`w-full text-4xl font-bold text-white ${section.color} ${
              section.isFooter ? 'h-[30vh]' : 'h-screen'
            }`}
          >
            <div className="h-full w-full px-20 pt-24 text-white">
              {section.content}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
export default HomeSections;
