import { motion } from 'framer-motion';
import { FcGoogle } from 'react-icons/fc';

import { useOAuthHandler } from '@/hooks/useOAuthHandler';

const GoogleOAuthHandler = () => {
  useOAuthHandler('google');

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.3,
          ease: 'easeInOut',
          scale: {
            type: 'spring',
            damping: 5,
            stiffness: 100,
            restDelta: 0.001,
          },
        }}
        className="flex flex-col items-center gap-8 p-12"
      >
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="relative"
        >
          <FcGoogle className="h-24 w-24" />
        </motion.div>
        <div className="text-center">
          <motion.div className="flex flex-col gap-8">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl font-extrabold text-gray-800"
            >
              Google 계정으로 로그인 중
            </motion.h1>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex justify-center"
            >
              <div className="flex gap-2">
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      scale: [1, 1.5, 1],
                      backgroundColor: [
                        'rgb(66, 133, 244)',
                        'rgb(234, 67, 53)',
                        'rgb(251, 188, 5)',
                        'rgb(52, 168, 83)',
                      ],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.2,
                      ease: 'easeInOut',
                    }}
                    className="h-3 w-3 rounded-full"
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default GoogleOAuthHandler;
