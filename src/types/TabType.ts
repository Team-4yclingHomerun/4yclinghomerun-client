type TabType = {
  name: string;
  path: string;
  subTitle: string;
  subTab?: { name: string; path: string }[];
};

export type TabNavigationProps = {
  tabs: TabType[];
  activeTab: number;
  onTabChange: (index: number) => void;
  activeSubTab?: number;
  onSubTabChange?: (subIndex: number) => void;
};
