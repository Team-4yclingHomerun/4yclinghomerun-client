type TabType = {
  name: string;
  path: string;
  subTitle: string;
};

export type TabNavigationProps = {
  tabs: TabType[];
  activeTab: number;
  onTabChange: (index: number) => void;
};
