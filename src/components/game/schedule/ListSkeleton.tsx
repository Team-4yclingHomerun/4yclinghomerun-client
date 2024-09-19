import { motion } from 'framer-motion';

const ListSkeleton = () => {
  const emptyArr = new Array(10).fill(null);

  return (
    <motion.div
      className="space-y-3"
      animate={{
        opacity: [1, 0.7, 1],
        transition: {
          duration: 1,
          repeat: Infinity,
          ease: 'easeInOut',
        },
      }}
    >
      {emptyArr.map((_, index) => (
        <div key={index} className="rounded-lg bg-gray-800">
          <div className="mx-10 grid grid-cols-7 items-center py-4">
            <div className="col-span-2 flex items-center space-x-4">
              <div className="h-7 w-36 rounded-md bg-gray-600"></div>
              <div className="h-7 w-12 rounded-md bg-gray-600"></div>
              <div className="h-7 w-16 rounded-md bg-gray-600"></div>
            </div>
            <div className="col-span-3 flex items-center justify-center gap-6">
              <div className="h-14 w-14 rounded-full bg-gray-600"></div>
              <div className="h-7 w-20 rounded-md bg-gray-600"></div>
            </div>
            <div className="col-span-1 flex items-center justify-center">
              <div className="h-7 w-16 rounded-md bg-gray-600"></div>
            </div>
            <div className="col-span-1 flex items-center justify-center gap-4">
              <div className="h-10 w-10 rounded-lg bg-gray-600"></div>
              <div className="h-7 w-16 rounded bg-gray-600"></div>
            </div>
          </div>
        </div>
      ))}
    </motion.div>
  );
};

export default ListSkeleton;
