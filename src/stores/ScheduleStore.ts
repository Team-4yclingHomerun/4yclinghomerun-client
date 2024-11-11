import { create } from 'zustand';

type ScheduleStoreType = {
  year: number;
  month: number;
  setYear: (year: number) => void;
  setMonth: (month: number) => void;
  viewType: 'calendar' | 'list';
  setViewType: (viewType: 'calendar' | 'list') => void;
};

const getCurrentMonth = () => {
  const currentMonth = new Date().getMonth() + 1;
  if (currentMonth >= 3 && currentMonth <= 10) {
    return currentMonth;
  }
  return 10;
};

const useScheduleStore = create<ScheduleStoreType>((set) => ({
  year: new Date().getFullYear(),
  month: getCurrentMonth(),
  setYear: (year) => set({ year }),
  setMonth: (month) => set({ month }),
  viewType: 'calendar',
  setViewType: (viewType) => set({ viewType }),
}));

export { useScheduleStore };
