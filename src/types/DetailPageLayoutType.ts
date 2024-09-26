import { TabNavigationProps } from './TabType';

export type DetailPageLayoutProps = {
  topImg: string;
  title: string;
  subTitle: string;
  children: React.ReactNode;
};

export type DetailPageLayoutWithTabsProps = DetailPageLayoutProps &
  Partial<TabNavigationProps>;
