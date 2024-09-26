import { motion } from 'framer-motion';

const LineupSkeleton = () => {
  return (
    <motion.main
      className="flex w-full gap-20 overflow-hidden"
      animate={{
        opacity: [0.7, 1, 0.7],
        transition: {
          repeat: Infinity,
          duration: 1,
          ease: 'easeInOut',
        },
      }}
    >
      {[...Array(2)].map((_, index) => (
        <section key={index} className="w-1/2">
          <article className="w-full">
            <header className="mb-4 flex items-center justify-center gap-2">
              <div className="h-12 w-12 rounded-full bg-gray-700"></div>
              <h2 className="text-xl font-bold text-white">
                <span className="h-7 w-14 rounded bg-gray-700"></span>선발
                라인업
              </h2>
            </header>

            <ul className="flex flex-col gap-2">
              {[...Array(9)].map((_, index) => (
                <li key={index}>
                  <div className="rounded p-1">
                    <div className="flex items-stretch overflow-hidden rounded bg-gray-600">
                      <div className="flex w-12 items-center justify-center bg-gray-700 bg-opacity-80 font-bold text-white">
                        {index + 1}
                      </div>

                      <div className="flex flex-1 items-center px-4 py-2">
                        <div className="h-12 w-12 rounded-md bg-gray-700 object-cover"></div>
                        <div className="ml-4 flex flex-1 items-center">
                          <span className="flex h-7 w-20 rounded bg-gray-700"></span>
                          <p className="flex flex-1 justify-end">
                            <span className="h-7 w-16 rounded bg-gray-700"></span>
                          </p>
                        </div>
                      </div>

                      <p className="flex w-14 items-center justify-center bg-gray-700 bg-opacity-70 font-extrabold text-gray-300">
                        <span className="h-7 w-14 rounded bg-gray-700"></span>
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-2 rounded p-1">
              <div className="flex items-stretch overflow-hidden rounded-md bg-gray-600">
                <div className="flex w-12 items-center justify-center bg-gray-700 bg-opacity-80 font-bold text-white">
                  투수
                </div>

                <div className="flex flex-1 items-center px-4 py-2">
                  <div className="h-12 w-12 rounded-md bg-gray-700 object-cover"></div>
                  <div className="ml-4 flex flex-1 items-center">
                    <span className="flex h-7 w-20 rounded bg-gray-700"></span>
                    <p className="flex flex-1 justify-end">
                      <span className="h-7 w-16 rounded bg-gray-700"></span>
                    </p>
                  </div>
                </div>

                <p className="flex w-14 items-center justify-center bg-gray-700 bg-opacity-70 font-extrabold text-gray-300">
                  SP
                </p>
              </div>
            </div>
          </article>
        </section>
      ))}
    </motion.main>
  );
};

export default LineupSkeleton;
