import { motion } from 'framer-motion';
import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs';

const WatchPointSkeleton = () => {
  return (
    <motion.section
      className="relative mb-6 rounded-lg bg-kt-black-4 p-8"
      animate={{
        opacity: [1, 0.7, 1],
        transition: {
          duration: 1,
          repeat: Infinity,
          ease: 'easeInOut',
        },
      }}
    >
      <header className="mb-4 flex flex-col">
        <div className="mb-2 flex items-center justify-between">
          <div className="w-1/6"></div>
          <div className="flex w-4/6 items-center justify-center gap-8">
            <BsArrowLeftCircle size={30} className="text-gray-500" />
            <div className="h-10 w-60 rounded bg-gray-600"></div>
            <BsArrowRightCircle size={30} className="text-gray-500" />
          </div>
          <div className="flex w-1/6 justify-end">
            <div className="h-10 w-28 rounded-md bg-gray-600"></div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="h-6 w-24 rounded bg-gray-600"></div>
        </div>
      </header>

      <main className="mt-10 grid grid-cols-3 gap-8">
        <article className="flex flex-col items-center justify-center gap-2">
          <div className="h-24 w-24 rounded-full bg-gray-600"></div>
          <div className="mt-3 h-6 w-24 rounded bg-gray-600"></div>
          <div className="mt-3 h-5 w-32 rounded bg-gray-600"></div>
        </article>

        <div className="flex flex-col items-center justify-center">
          {Array.from({ length: 4 }).map((_, index) => (
            <article key={index} className="mb-4 w-full">
              <div className="mb-1 flex justify-between">
                <div className="h-5 w-14 rounded bg-gray-600"></div>
                <div className="h-5 w-14 rounded bg-gray-600"></div>
                <div className="h-5 w-14 rounded bg-gray-600"></div>
              </div>
              <div className="relative h-2 overflow-hidden rounded-full bg-gray-700">
                <div className="absolute left-0 top-0 h-full bg-gray-700"></div>
                <div className="absolute right-0 top-0 h-full bg-gray-700"></div>
              </div>
            </article>
          ))}
        </div>

        <article className="flex flex-col items-center justify-center gap-2">
          <div className="h-24 w-24 rounded-full bg-gray-600"></div>
          <div className="mt-3 h-6 w-24 rounded bg-gray-600"></div>
          <div className="mt-3 h-5 w-32 rounded bg-gray-600"></div>
        </article>
      </main>
    </motion.section>
  );
};

export default WatchPointSkeleton;
