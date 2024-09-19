import { motion } from 'framer-motion';

const CalendarSkeleton = () => {
  const weekdays = new Array(7).fill(null);
  const weeks = new Array(7).fill(null);

  return (
    <motion.div
      animate={{
        opacity: [1, 0.7, 1],
        transition: {
          duration: 1,
          repeat: Infinity,
          ease: 'easeInOut',
        },
      }}
    >
      <table className="w-full table-fixed border-collapse">
        <thead>
          <tr>
            {weekdays.map((_, index) => (
              <th key={index} className="w-1/7 py-3 text-center">
                <div className="mx-auto h-6 w-12 rounded bg-gray-600"></div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {weeks.map((_, weekIndex) => (
            <tr key={weekIndex}>
              {weekdays.map((_, dayIndex) => (
                <td key={dayIndex} className="h-40 border border-gray-600 p-2">
                  <div className="mb-2 flex justify-between">
                    <div className="h-5 w-5 rounded-full bg-gray-600"></div>
                    <div className="h-5 w-8 rounded-md bg-gray-600"></div>
                  </div>
                  <div className="mx-auto mb-2 h-16 w-16 rounded bg-gray-600"></div>
                  <div className="mx-auto h-4 w-1/2 rounded bg-gray-600"></div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  );
};

export default CalendarSkeleton;
