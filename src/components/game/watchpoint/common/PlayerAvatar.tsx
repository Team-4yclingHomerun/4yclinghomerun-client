import { motion } from 'framer-motion';

import { TopPlayerInfoType, PitchInfoType } from '@/types/WatchPointType';

type PlayerAvatarProps = {
  player: TopPlayerInfoType | PitchInfoType;
  isLoading: boolean;
  imageUrl: string;
};

const PlayerAvatar = ({ player, isLoading, imageUrl }: PlayerAvatarProps) => {
  return (
    <figure className="text-center">
      {isLoading ? (
        <motion.div
          className="h-32 w-32 rounded-full border-2 border-kt-gray-2 bg-gray-800"
          animate={{
            opacity: [0.2, 1, 0.2],
          }}
          transition={{
            repeat: Infinity,
            duration: 1,
            ease: 'easeInOut',
          }}
        ></motion.div>
      ) : (
        <img
          src={imageUrl}
          alt={player.name}
          className="mb-4 h-32 w-32 rounded-full border-2 border-kt-gray-2 object-cover"
        />
      )}
      <figcaption className="text-xl font-bold">{player.name}</figcaption>
    </figure>
  );
};

export default PlayerAvatar;
