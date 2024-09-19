import { Link } from 'react-router-dom';

import ResultFlag from './ResultFlag';
import { KtWizMonthSchedule } from '@/types/ScheduleType';
import { cn } from '@/utils/cn';

type CalendarCellProps = {
  day: number | null;
  data: KtWizMonthSchedule | null;
};

const CalendarCell = ({ day, data }: CalendarCellProps) => {
  const formatBroadcast = (broadcastString: string) => {
    if (broadcastString && broadcastString.includes(',')) {
      return broadcastString.split(',').join(', ');
    }
    return broadcastString;
  };

  const isToday = day === new Date().getDate();

  return (
    <td
      className={cn(
        'w-1/7 h-40 border-b border-l border-r border-t border-gray-700 px-2 py-4',
        isToday && 'border-2 border-amber-600',
        day && data?.home === 'KT' ? 'bg-gray-900' : 'bg-transparent',
      )}
    >
      {day && (
        <div className="mb-2 flex h-full flex-col">
          <div className="flex items-center justify-between">
            <div className="text-base">{day}</div>
            {data && <ResultFlag outcome={data.outcome} />}
          </div>
          {data && (
            <>
              <Link to={`/game/boxscore?${data.gameDate}&${data.gmkey}`}>
                <div className="flex flex-grow flex-col items-center justify-center">
                  <img
                    src={data.home === 'KT' ? data.visitLogo : data.homeLogo}
                    alt={data.home === 'KT' ? data.visit : data.home}
                    className="h-20 w-20 object-contain"
                  />
                  <div className="flex items-center justify-center gap-2">
                    <div className="text-sm">{data.gtime}</div>
                    <div className="text-sm text-red-300">
                      {data.home === 'KT' ? '수원' : data.stadium}
                    </div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="text-xs text-gray-200">
                    {formatBroadcast(data.broadcast)}
                  </div>
                </div>
              </Link>
            </>
          )}
        </div>
      )}
    </td>
  );
};

export default CalendarCell;
