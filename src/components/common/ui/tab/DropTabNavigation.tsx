import React from 'react';

import { motion } from 'framer-motion';

import { cn } from '@/utils/cn';
import { TabNavigationProps } from '@/types/TabType';
import { useTabNavigation } from '@/hooks/useTabNavigation';
import useShowOnHover from '@/hooks/useShowOnHover';

const DropTabNavigation = (props: TabNavigationProps) => {
  const {
    navigationStyles,
    getTabProps,
    tabs,
    activeTab,
    activeSubTab,
    onSubTabChange,
  } = useTabNavigation(props);

  const { isViewSubTab, handleTabMouseOver, handleTabMouseOut } =
    useShowOnHover();

  return (
    <div
      className="relative z-10 rounded-full bg-gray-800 p-2 backdrop-blur-sm"
      onMouseOver={handleTabMouseOver}
      onMouseOut={handleTabMouseOut}
    >
      {tabs.map((tab, index) => (
        <React.Fragment key={tab.path}>
          <button
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
          {activeTab === index && Array.isArray(tab.subTab) && (
            <motion.div
              className="absolute left-0 right-0 top-11 flex justify-evenly rounded-full bg-gray-200 py-2"
              initial={{ opacity: 0, y: -10 }}
              animate={{
                opacity: isViewSubTab ? 1 : 0,
                y: isViewSubTab ? 0 : -10,
              }}
              transition={{ duration: 0.3 }}
            >
              {tab.subTab.map((subTab, subTabIndex) => (
                <button
                  key={subTab.path}
                  className={cn(
                    'px-3 text-xs font-extrabold text-gray-400 hover:scale-105',
                    activeSubTab === subTabIndex && 'scale-105 text-kt-red-2',
                  )}
                  onClick={() => onSubTabChange && onSubTabChange(subTabIndex)}
                >
                  {subTab.name}
                </button>
              ))}
            </motion.div>
          )}
        </React.Fragment>
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
