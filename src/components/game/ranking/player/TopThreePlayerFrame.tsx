import { useEffect, useState } from 'react';

import { TPlayerRankingTopThree } from '@/types/PlayerRanking';
import { TopThreeListData } from '@/data/PlayerRankingData';
import { TopThreePlayerRankingApi } from '@/api/TopThreePlayerRanking';
import TopThreePlayerGroup from './TopThreePlayerGroup';
import TopThreePlayerSkeleton from './TopThreePlayerSkeleton';

const TopThreePlayerFrame = ({
  rankingType,
}: {
  rankingType: '투수' | '타자';
}) => {
  const [currentData, setCurrentData] = useState(
    rankingType === '투수' ? TopThreeListData.pitcher : TopThreeListData.batter,
  );

  useEffect(() => {
    setCurrentData(
      rankingType === '투수'
        ? TopThreeListData.pitcher
        : TopThreeListData.batter,
    );
  }, [rankingType]);

  const { data: leftInfo, delayLoading: isLeftLoading } =
    TopThreePlayerRankingApi(currentData[0]);
  const { data: rightInfo, delayLoading: isRightLoading } =
    TopThreePlayerRankingApi(currentData[1]);

  const isPlayerRankingTopThreeArray = (
    data:
      | { data: { list: TPlayerRankingTopThree[] } }
      | TPlayerRankingTopThree[],
  ): data is TPlayerRankingTopThree[] => {
    return Array.isArray(data);
  };

  return (
    <div className="flex w-9/12">
      {isLeftLoading ? (
        <TopThreePlayerSkeleton />
      ) : (
        isPlayerRankingTopThreeArray(leftInfo) && (
          <TopThreePlayerGroup
            title={currentData[0].title}
            listInfo={leftInfo}
            playerImg={leftInfo[0].playerPrvwImg}
          />
        )
      )}
      {isRightLoading ? (
        <TopThreePlayerSkeleton />
      ) : (
        isPlayerRankingTopThreeArray(rightInfo) && (
          <TopThreePlayerGroup
            title={currentData[1].title}
            listInfo={rightInfo}
            playerImg={rightInfo[0].playerPrvwImg}
          />
        )
      )}
    </div>
  );
};
export default TopThreePlayerFrame;
