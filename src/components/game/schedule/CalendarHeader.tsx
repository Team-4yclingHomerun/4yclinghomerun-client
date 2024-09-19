import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { FaList, FaRegCalendarAlt } from 'react-icons/fa';

import { cn } from '@/utils/cn';
import { useScheduleStore } from '@/stores/ScheduleStore';

type CalendarHeaderProps = {
  onPrevMonth: () => void;
  onNextMonth: () => void;
};

const CalendarHeader = ({ onPrevMonth, onNextMonth }: CalendarHeaderProps) => {
  const { year, month, viewType, setViewType } = useScheduleStore();

  return (
    <header className="mb-4 flex items-center justify-between">
      <nav className="flex items-center gap-5">
        <button
          className={cn(
            'flex items-center gap-2 transition-all duration-200',
            viewType === 'calendar'
              ? 'rounded-lg bg-gray-300 p-2 text-black hover:bg-gray-400 hover:text-black'
              : 'hover:text-gray-400',
          )}
          onClick={() => setViewType('calendar')}
        >
          <FaRegCalendarAlt size={28} />
          <p className="text-lg font-bold">달력형</p>
        </button>
        <button
          className={cn(
            'flex items-center gap-2 transition-all duration-200',
            viewType === 'list'
              ? 'rounded-lg bg-gray-300 p-2 text-black hover:bg-gray-400 hover:text-black'
              : 'hover:text-gray-400',
          )}
          onClick={() => setViewType('list')}
        >
          <FaList size={28} />
          <p className="text-lg font-bold">리스트형</p>
        </button>
      </nav>

      <div className="absolute left-1/2 flex -translate-x-1/2 transform items-center space-x-8">
        <button
          className="transition-all duration-200 hover:scale-110 hover:text-rose-400"
          onClick={onPrevMonth}
        >
          <IoIosArrowBack size={36} />
        </button>
        <h2 className="text-2xl font-bold">
          {year}년 {month}월
        </h2>
        <button
          className="transition-all duration-200 hover:scale-110 hover:text-rose-400"
          onClick={onNextMonth}
        >
          <IoIosArrowForward size={36} />
        </button>
      </div>

      <section className="flex items-center gap-5">
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-md border border-gray-200 bg-gray-900"></span>
          <span className="text-lg font-bold">HOME</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-md border border-gray-200 bg-black"></span>
          <span className="text-lg font-bold">AWAY</span>
        </div>
      </section>
    </header>
  );
};

export default CalendarHeader;
