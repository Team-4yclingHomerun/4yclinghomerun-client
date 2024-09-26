import { motion } from 'framer-motion';

import { cn } from '@/utils/cn';

const DataTableSkeleton = ({ rows = 10, columns = 5 }) => {
  return (
    <motion.div
      animate={{ opacity: [1, 0.5, 1] }}
      transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
    >
      <table className="min-w-full">
        <thead>
          <tr>
            {Array.from({ length: columns }).map((_, idx) => (
              <th
                key={idx}
                className={cn(
                  'bg-gray-700 px-4 py-4',
                  idx === 0 && 'rounded-l-lg',
                  idx === columns - 1 && 'rounded-r-lg',
                )}
              />
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: rows }).map((_, rowIdx) => (
            <tr key={rowIdx}>
              {Array.from({ length: columns }).map((_, colIdx) => (
                <td key={colIdx} className="px-3 py-3">
                  <div className="h-4 rounded-md bg-gray-600" />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  );
};

export default DataTableSkeleton;
