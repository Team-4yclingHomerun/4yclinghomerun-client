import { motion } from 'framer-motion';

type SkeletonBoxProps = {
  width: number | string;
  height: number | string;
  className?: string;
};

const SkeletonBox = ({ width, height, className }: SkeletonBoxProps) => (
  <motion.div
    style={{ width, height, backgroundColor: '#35383E', borderRadius: '4px' }}
    className={className}
    animate={{ opacity: [1, 0.7, 1] }}
    transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
  />
);

const NewsDetailSkeleton = () => {
  return (
    <div className="m-auto flex max-w-screen-2xl flex-col gap-20">
      <div className="flex flex-col">
        <div className="flex justify-between border-b border-kt-white p-2 px-5 pt-10">
          <SkeletonBox width="40%" height={20} className="mb-2" />
          <SkeletonBox width="40%" height={20} className="mb-2" />
        </div>
        <SkeletonBox width="80%" height={50} className="mx-auto my-5" />
        <SkeletonBox width="60%" height={20} className="mx-auto" />
      </div>

      <div className="m-auto flex max-w-screen-md flex-col gap-10">
        <SkeletonBox width="100%" height={30} className="mb-4" />
        <SkeletonBox width="100%" height={200} className="mb-4" />
        <SkeletonBox width="40%" height={20} className="text-right" />
      </div>
    </div>
  );
};

export default NewsDetailSkeleton;
