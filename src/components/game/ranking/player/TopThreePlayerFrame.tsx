import { useEffect, useState } from 'react';

import { TPlayerRankingTopThree } from '@/types/PlayerRanking';
import { TopThreeListData } from '@/data/PlayerRankingData';
import { TopThreePlayerRankingApi } from '@/api/TopThreePlayerRanking';
import TopThreePlayerGroup from './TopThreePlayerGroup';
import TopThreePlayerSkeleton from './TopThreePlayerSkeleton';
import ErrorAlert from '@/components/error/ErrorAlert';

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

  const {
    data: leftInfo,
    delayLoading: isLeftLoading,
    isError: isLeftError,
    error: leftError,
  } = TopThreePlayerRankingApi(currentData[0]);
  const {
    data: rightInfo,
    delayLoading: isRightLoading,
    isError: isRightError,
    error: rightError,
  } = TopThreePlayerRankingApi(currentData[1]);

  const isPlayerRankingTopThreeArray = (
    data:
      | { data: { list: TPlayerRankingTopThree[] } }
      | TPlayerRankingTopThree[],
  ): data is TPlayerRankingTopThree[] => {
    return Array.isArray(data);
  };

  const renderError = (error: string) => (
    <ErrorAlert
      errorMsg={error}
      type="component"
      containerClassName="w-1/2 mx-3 py-10"
    />
  );

  const renderPlayerGroup = (
    title: string,
    info: { data: { list: [] } } | TPlayerRankingTopThree[],
    isLoading: boolean,
    isError: boolean,
    error: string | null,
  ) => {
    if (isLoading) {
      return <TopThreePlayerSkeleton />;
    }

    if (isError && error) {
      return renderError(error);
    }

    return (
      isPlayerRankingTopThreeArray(info) && (
        <TopThreePlayerGroup
          title={title}
          listInfo={info}
          playerImg={info[0].playerPrvwImg}
        />
      )
    );
  };

  return (
    <div className="flex w-9/12">
      {renderPlayerGroup(
        currentData[0].title,
        leftInfo,
        isLeftLoading,
        isLeftError,
        leftError,
      )}
      {renderPlayerGroup(
        currentData[1].title,
        rightInfo,
        isRightLoading,
        isRightError,
        rightError,
      )}
    </div>
  );
};

export default TopThreePlayerFrame;
