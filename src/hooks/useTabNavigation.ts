import { useState, useRef, useEffect } from 'react';

import { TabNavigationProps } from '@/types/TabType';

const useTabNavigation = ({
  tabs,
  activeTab,
  onTabChange,
  activeSubTab,
  onSubTabChange,
}: TabNavigationProps) => {
  const [navigationStyles, setNavigationStyles] = useState({
    left: 0,
    width: 0,
  }); // tab의 스타일(위치와 너비)
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]); // 탭 버튼의 ref를 저장

  // 탭 변경 시, 밑줄의 위치 변경
  useEffect(() => {
    const activeTabRef = tabRefs.current[activeTab];
    if (activeTabRef) {
      setNavigationStyles({
        left: activeTabRef.offsetLeft,
        width: activeTabRef.offsetWidth,
      });
    }
  }, [activeTab]);

  const getTabProps = (index: number) => ({
    ref: (e: HTMLButtonElement | null) => (tabRefs.current[index] = e),
    onClick: () => onTabChange(index),
  });

  return {
    navigationStyles,
    getTabProps,
    tabs,
    activeTab,
    activeSubTab,
    onSubTabChange,
  };
};

export { useTabNavigation };
