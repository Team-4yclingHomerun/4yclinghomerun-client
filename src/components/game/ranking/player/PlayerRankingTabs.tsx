import { motion } from 'framer-motion';

import { cn } from '@/utils/cn';

const PlayerRankingTabs = ({
  activeTab,
  handleActiveTab,
  tabsList,
}: {
  activeTab: string;
  handleActiveTab: (title: string) => void;
  tabsList: string[];
}) => {
  return (
    <>
      <div className="relative flex w-fit gap-3 rounded-md bg-kt-gray-1 px-3 py-2 text-center text-sm font-medium">
        {tabsList.map((title) => {
          const isActive = activeTab === title;

          return (
            <div key={title} className="relative">
              {isActive && (
                <motion.div
                  layoutId="activeTabBackground"
                  className="absolute inset-0 rounded-md bg-gray-300"
                  transition={{
                    type: 'tween',
                    ease: 'easeInOut',
                    duration: 0.1,
                  }}
                />
              )}

              <button
                className={cn(
                  'relative z-10 w-32 rounded-md px-4 py-3',
                  isActive ? 'text-kt-black-1' : 'text-white opacity-40',
                )}
                onClick={() => handleActiveTab(title)}
              >
                {title}
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default PlayerRankingTabs;
