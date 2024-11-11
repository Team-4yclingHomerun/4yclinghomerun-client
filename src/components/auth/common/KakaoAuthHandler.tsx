import { motion } from 'framer-motion';
import { RiKakaoTalkFill } from 'react-icons/ri';

import { useOAuthHandler } from '@/hooks/useOAuthHandler';

const KakaoOAuthHandler = () => {
  useOAuthHandler('kakao');

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#FEE500]">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
          scale: {
            type: 'spring',
            damping: 5,
            stiffness: 100,
            restDelta: 0.001,
          },
        }}
        className="flex flex-col items-center gap-6 rounded-xl bg-white/20 p-10 shadow-lg backdrop-blur-md"
      >
        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="relative"
        >
          <RiKakaoTalkFill className="h-20 w-20 text-gray-800" />
        </motion.div>
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-3 text-4xl font-bold text-gray-800"
          >
            카카오 계정으로 로그인 중
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-lg text-gray-700"
          >
            잠시만 기다려주세요...
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
};

export default KakaoOAuthHandler;
