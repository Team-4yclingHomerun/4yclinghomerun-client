export type TEvents = {
  id: number;
  title: string;
  date: string;
  kategorie: 'default' | 'important' | 'event';
  description: string;
  bannerUrl: string;
  linkUrl: string;
};
