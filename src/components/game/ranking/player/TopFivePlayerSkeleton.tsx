import { motion } from 'framer-motion';

const TopFivePlayerSkeleton = () => {
  const skeletonItems = Array(5).fill(null);

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
      className="min-h-full w-1/4"
    >
      <section className="flex w-full flex-col items-start justify-center">
        <h1 className="mb-4 min-h-6 w-3/4 rounded-md bg-gray-600" />
        {skeletonItems.map((_, index) => (
          <div
            key={index}
            className="mb-3 min-h-4 w-full rounded-md bg-gray-600"
          />
        ))}
      </section>
    </motion.div>
  );
};
export default TopFivePlayerSkeleton;
