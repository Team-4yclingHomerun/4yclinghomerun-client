import { TPlayerRankingTopThree } from '@/types/PlayerRanking';
import TopThreePlayerImg from './TopThreePlayerImg';
import TopThreePlayerList from './TopThreePlayerList';

const TopThreePlayerGroup = ({
  title,
  listInfo,
  playerImg,
}: {
  title: string;
  listInfo: TPlayerRankingTopThree[];
  playerImg: string;
}) => {
  return (
    <div className="flex w-1/2 gap-5">
      <TopThreePlayerImg playerImg={playerImg} />
      <TopThreePlayerList title={title} listInfo={listInfo} />
    </div>
  );
};
export default TopThreePlayerGroup;
