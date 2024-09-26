import TopFivePlayerList from './TopFivePlayerList';
import TopThreePlayerFrame from './TopThreePlayerFrame';

const TopPlayerRankingFrame = ({
  rankingType,
}: {
  rankingType: '투수' | '타자';
}) => {
  return (
    <div className="flex w-full justify-between">
      <TopThreePlayerFrame rankingType={rankingType} />
      <TopFivePlayerList rankingType={rankingType} />
    </div>
  );
};
export default TopPlayerRankingFrame;
