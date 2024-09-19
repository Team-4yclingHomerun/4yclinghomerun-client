import { motion } from 'framer-motion';

import TeamSchedule from '@/components/home/schedule/TeamSchedule';
import Footer from '@/components/footer/Footer';
import { usePageScroll } from '@/hooks/usePageScroll';
import News from '@/components/news/News';
import Events from '@/components/events/Events';

const sections = [
  { id: 'sec1', content: 'HERO', color: 'bg-black' },
  { id: 'sec2', content: <TeamSchedule />, color: 'bg-black' },
  { id: 'sec3', content: <News />, color: 'bg-yellow-500' },
  { id: 'sec4', content: 'STORE', color: 'bg-red-500' },
  { id: 'sec5', content: <Events />, color: 'bg-purple-500' },
  { id: 'sec6', content: <Footer />, color: 'bg-white', isFooter: true },
];

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

const HomePage = () => {
  const { currentSection } = usePageScroll({ sections });

  const getTransformValue = () => {
    if (currentSection === sections.length - 1) {
      return `translateY(calc(-${(sections.length - 2) * 100}vh - 40vh))`;
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
              section.isFooter ? 'h-[40vh]' : 'h-screen'
            }`}
          >
            {!section.isFooter ? (
              <div className="h-full w-full px-20 pt-24 text-white">
                {section.content}
              </div>
            ) : (
              <div className="h-full w-full">{section.content}</div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
