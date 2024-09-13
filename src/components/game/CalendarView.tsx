import { motion } from 'framer-motion';

import CalendarCell from './CalendarCell';
import { useCalendarGenerate } from '@/hooks/useCalendarGenerate';
import { GetMonthSchedule } from '@/api/GetMonthSchedule';
import { KtWizMonthSchedule } from '@/types/ScheduleType';

type CalendarViewProps = {
  year: number;
  month: number;
};

const CalendarView = ({ year, month }: CalendarViewProps) => {
  const { days, weekdays } = useCalendarGenerate(year, month);
  const { data, isLoading, isError, error } = GetMonthSchedule(year, month);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error}</div>;

  const scheduleMap = data.data.list.reduce(
    (acc, game) => {
      const gameDate = new Date(
        game.gameDate.toString().replace(/(\d{4})(\d{2})(\d{2})/, '$1-$2-$3'),
      );

      const day = gameDate.getDate();
      acc[day] = game;
      return acc;
    },
    {} as Record<number, KtWizMonthSchedule>, // Record<number, KtWizMonthSchedule>는 number 타입의 key와 KtWizMonthSchedule 타입의 value를 가지는 객체를 의미함.
  );

  return (
    <motion.div
      className="overflow-x-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <table className="w-full table-fixed border-collapse">
        <thead>
          <tr>
            {weekdays.map((day) => (
              <th
                key={day}
                className="w-1/7 py-3 text-center text-base text-gray-200"
              >
                {day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {days.map((week, weekIndex) => (
            <tr key={weekIndex}>
              {week.map((day, dayIndex) => (
                <CalendarCell
                  key={dayIndex}
                  day={day}
                  data={day ? scheduleMap[day] : null}
                />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  );
};

export default CalendarView;
