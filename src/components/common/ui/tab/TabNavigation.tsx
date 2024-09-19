import { motion } from 'framer-motion';

import { cn } from '@/utils/cn';
import { TabNavigationProps } from '@/types/TabType';
import { useTabNavigation } from '@/hooks/useTabNavigation';

const TabNavigation = (props: TabNavigationProps) => {
  const { navigationStyles, getTabProps, tabs, activeTab } =
    useTabNavigation(props);

  return (
    <div className="relative">
      <div className="flex space-x-4">
        {tabs.map((tab, index) => (
          <button
            key={tab.path}
            {...getTabProps(index)}
            className={cn(
              'relative px-4 py-2 text-lg font-bold',
              activeTab === index
                ? 'text-red-500'
                : 'font-extrabold text-gray-400 transition-all duration-200 hover:scale-105 hover:text-gray-200',
            )}
          >
            {tab.name}
          </button>
        ))}
      </div>

      <motion.div
        className="absolute bottom-0 h-1 bg-red-500"
        initial={false}
        animate={{
          left: navigationStyles.left,
          width: navigationStyles.width,
        }}
      />
    </div>
  );
};

export { TabNavigation };
