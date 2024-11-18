import { motion } from 'framer-motion';

const DirectionMapSkeleton = () => {
  return (
    <div className="absolute inset-0 grid grid-cols-8 grid-rows-8">
      {[...Array(64)].map((_, i) => (
        <motion.div
          key={i}
          className="border border-gray-700"
          animate={{ opacity: [1, 0.5, 1] }}
          transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
    </div>
  );
};

export default DirectionMapSkeleton;
