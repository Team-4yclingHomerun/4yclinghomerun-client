import { motion } from 'framer-motion';

import { cn } from '@/utils/cn';
import { TabNavigationProps } from '@/types/TabType';
import { useTabNavigation } from '@/hooks/useTabNavigation';

const TabNavigation = (props: TabNavigationProps) => {
  const {
    navigationStyles,
    getTabProps,
    tabs,
    activeTab,
    activeSubTab,
    onSubTabChange,
  } = useTabNavigation(props);

  return (
    <div className="relative">
      <div className="relative flex space-x-4">
        {tabs.map((tab, tabIndex) => (
          <div key={tab.path} className="flex flex-col">
            <button
              {...getTabProps(tabIndex)}
              className={cn(
                'relative px-4 py-2 text-lg font-bold',
                activeTab === tabIndex
                  ? 'text-red-500'
                  : 'font-extrabold text-gray-400 transition-all duration-200 hover:scale-105 hover:text-gray-200',
              )}
            >
              {tab.name}
            </button>

            {activeTab === tabIndex && Array.isArray(tab.subTab) && (
              <div className="absolute left-16 top-12 mt-2 flex w-full justify-center space-x-4">
                {tab.subTab.map((subTab, subTabIndex) => (
                  <button
                    key={`${tab.path}-${subTabIndex}`}
                    className={cn(
                      'text-gray-400 hover:scale-105 hover:text-gray-200',
                      activeSubTab === subTabIndex &&
                        'font-bold text-red-500 hover:text-red-500',
                    )}
                    onClick={() =>
                      onSubTabChange && onSubTabChange(subTabIndex)
                    }
                  >
                    {subTab.name}
                  </button>
                ))}
              </div>
            )}
          </div>
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
