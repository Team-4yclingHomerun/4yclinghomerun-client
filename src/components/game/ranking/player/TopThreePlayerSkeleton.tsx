import { motion } from 'framer-motion';

const TopThreePlayerSkeleton = () => {
  const skeletonItems = Array(3).fill(null);

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
      className="flex min-h-full w-1/2 items-center"
    >
      <div className="flex min-h-full w-full gap-5">
        <div className="min-h-full w-1/2 rounded-md bg-gray-600" />
        <section className="flex w-1/2 flex-col items-start justify-center">
          <h1 className="mb-4 min-h-6 w-3/4 rounded-md bg-gray-600" />
          {skeletonItems.map((_, index) => (
            <div
              key={index}
              className="mb-2 min-h-3 w-1/2 rounded-md bg-gray-600"
            />
          ))}
        </section>
      </div>
    </motion.div>
  );
};

export default TopThreePlayerSkeleton;
