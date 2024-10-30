import { motion } from 'framer-motion';

import { cn } from '@/utils/cn';
import { TabNavigationProps } from '@/types/TabType';
import { useTabNavigation } from '@/hooks/useTabNavigation';
import { useMouseHover } from '@/hooks/useMouseHover';

const DropTabNavigation = (props: TabNavigationProps) => {
  const {
    navigationStyles,
    getTabProps,
    tabs,
    activeTab,
    activeSubTab,
    onSubTabChange,
    subTabWidth,
    subTabRefs,
  } = useTabNavigation(props);

  const { isHover, handleMouseOver, handleMouseOut } = useMouseHover();

  return (
    <div
      className="relative z-10 rounded-full bg-gray-800 p-2 backdrop-blur-sm"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
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
      {Array.isArray(tabs[activeTab].subTab) && (
        <motion.div
          className="absolute top-11 flex w-fit gap-4 rounded-full bg-gray-200 px-4 py-2"
          style={{
            left: `calc(${navigationStyles.left}px - ${subTabWidth / 4 + 16}px)`,
          }}
          initial={{ opacity: 0, y: -10 }}
          animate={{
            opacity: isHover ? 1 : 0,
            y: isHover ? 0 : -10,
          }}
          transition={{ duration: 0.3 }}
          ref={subTabRefs}
        >
          {tabs[activeTab].subTab.map((subTab, subTabIndex) => (
            <button
              key={subTab.path}
              className={cn(
                'text-xs font-extrabold text-gray-400 hover:scale-105',
                activeSubTab === subTabIndex && 'scale-105 text-kt-red-2',
              )}
              onClick={() => onSubTabChange && onSubTabChange(subTabIndex)}
            >
              {subTab.name}
            </button>
          ))}
        </motion.div>
      )}

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
