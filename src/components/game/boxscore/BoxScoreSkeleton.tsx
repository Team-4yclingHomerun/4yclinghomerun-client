import { motion } from 'framer-motion';

import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs';

const BoxScoreSkeleton = () => {
  return (
    <motion.section
      className="relative mb-6 rounded-lg bg-kt-black-4 p-12"
      animate={{
        opacity: [1, 0.7, 1],
        transition: {
          duration: 1,
          repeat: Infinity,
          ease: 'easeInOut',
        },
      }}
    >
      <header className="flex flex-col">
        <div className="mb-4 flex items-center justify-between">
          <div className="w-1/6"></div>
          <div className="flex w-4/6 items-center justify-center gap-8">
            <BsArrowLeftCircle size={30} className="text-gray-500" />
            <div className="h-12 w-52 rounded-md bg-gray-600"></div>
            <BsArrowRightCircle size={30} className="text-gray-500" />
          </div>
          <div className="flex w-1/6 justify-end">
            <div className="h-10 w-28 rounded-md bg-gray-600"></div>
          </div>
        </div>
        <div className="mx-auto h-4 w-48 rounded-md bg-gray-600"></div>
      </header>

      <main className="mt-4 grid grid-cols-3 gap-2">
        <article className="flex flex-col items-center justify-center gap-2">
          <div className="h-32 w-32 rounded-full bg-gray-600"></div>
          <div className="h-8 w-10 rounded-md bg-gray-600"></div>
          <div className="mt-2 h-8 w-20 rounded-md bg-gray-600"></div>
        </article>

        <div className="flex items-center justify-center">
          <div className="h-12 w-16 rounded-md bg-gray-600"></div>
        </div>

        <article className="flex flex-col items-center justify-center gap-2">
          <div className="h-32 w-32 rounded-full bg-gray-600"></div>
          <div className="h-8 w-10 rounded-md bg-gray-600"></div>
          <div className="mt-2 h-8 w-20 rounded-md bg-gray-600"></div>
        </article>
        <footer className="col-span-3 mt-2">
          <div className="h-32 rounded-md bg-gray-600"></div>
        </footer>
      </main>
    </motion.section>
  );
};

export default BoxScoreSkeleton;
