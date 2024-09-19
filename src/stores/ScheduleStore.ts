import { create } from 'zustand';

type ScheduleStoreType = {
  year: number;
  month: number;
  setYear: (year: number) => void;
  setMonth: (month: number) => void;
  viewType: 'calendar' | 'list';
  setViewType: (viewType: 'calendar' | 'list') => void;
};

const useScheduleStore = create<ScheduleStoreType>((set) => ({
  year: new Date().getFullYear(),
  month: new Date().getMonth() + 1,
  setYear: (year) => set({ year }),
  setMonth: (month) => set({ month }),
  viewType: 'calendar',
  setViewType: (viewType) => set({ viewType }),
}));

export { useScheduleStore };
