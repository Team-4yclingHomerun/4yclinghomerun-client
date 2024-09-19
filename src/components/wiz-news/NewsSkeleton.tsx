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

const NewsListSkeleton = () => {
  return (
    <ul>
      {new Array(5).fill(null).map((_, index) => (
        <li
          key={index}
          className="group m-4 rounded-sm bg-gradient-to-r from-kt-black-5 to-transparent transition duration-200 hover:bg-gradient-to-l"
        >
          <div className="flex">
            <SkeletonBox
              width={300}
              height={170}
              className="border-8 border-kt-black-5 transition-all duration-200 group-hover:border-kt-gray-1"
            />

            <div className="flex w-full justify-between">
              <div className="w-4/5 py-6 pl-5">
                <SkeletonBox width="80%" height={32} className="mb-3" />
                <SkeletonBox width="100%" height={20} className="mb-2" />
                <SkeletonBox width="100%" height={20} className="mb-2" />
                <SkeletonBox width="100%" height={20} />
              </div>

              <div className="flex w-1/5 flex-col items-end p-3">
                <SkeletonBox width={80} height={20} className="mb-2" />
                <SkeletonBox width={60} height={20} className="mb-2" />
                <SkeletonBox width={100} height={20} />
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default NewsListSkeleton;
