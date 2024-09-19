import { motion } from 'framer-motion';

import { cn } from '@/utils/cn';
import { TabNavigationProps } from '@/types/TabType';
import { useTabNavigation } from '@/hooks/useTabNavigation';

const DropTabNavigation = (props: TabNavigationProps) => {
  const { navigationStyles, getTabProps, tabs, activeTab } =
    useTabNavigation(props);

  return (
    <div className="relative rounded-full bg-gray-800 p-2 backdrop-blur-sm">
      {tabs.map((tab, index) => (
        <button
          key={tab.path}
          {...getTabProps(index)}
          className={cn(
            'relative z-10 px-3 text-sm font-bold transition-colors duration-200',
            activeTab === index
              ? 'text-black'
              : 'font-extrabold text-gray-400 hover:text-gray-200',
          )}
        >
          {tab.name}
        </button>
      ))}

      <motion.div
        className="absolute bottom-2 top-2 rounded-full bg-gray-200"
        initial={false}
        animate={{
          left: navigationStyles.left,
          width: navigationStyles.width,
        }}
      />
    </div>
  );
};

export { DropTabNavigation };
