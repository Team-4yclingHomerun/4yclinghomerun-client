import { useEffect, useState } from 'react';

import { useAxios } from '@/hooks/useAxios';
import { TPlayerRankingTopFive } from '@/types/PlayerRanking';
import { TopFivePlayerListData } from '@/data/PlayerRankingData';
import TopFivePlayerSkeleton from './TopFivePlayerSkeleton';
import ErrorAlert from '@/components/error/ErrorAlert';
import ErrorBoundary from '@/components/error/ErrorBoundary';

const TopFivePlayerList = ({
  rankingType,
}: {
  rankingType: '타자' | '투수';
}) => {
  const [rankingTitle, setRankingTitle] = useState<string>(
    rankingType === '투수' ? '투수 평균자책점' : '타자 타율',
  );
  const [currentList, setCurrentList] = useState(
    rankingType === '투수'
      ? TopFivePlayerListData.pitcher
      : TopFivePlayerListData.batter,
  );

  useEffect(() => {
    setRankingTitle(rankingType === '투수' ? '투수 평균자책점' : '타자 타율');
    setCurrentList(
      rankingType === '투수'
        ? TopFivePlayerListData.pitcher
        : TopFivePlayerListData.batter,
    );
  }, [rankingType]);

  const { data, delayLoading, isError, error } = useAxios({
    url: currentList.url,
    method: 'GET',
    initialData: { data: { list: [] } },
    shouldFetchOnMount: true,
    processData: (data) => {
      const field = currentList.data;

      return data.data.list.map((player: TPlayerRankingTopFive, index) => ({
        rank: index + 1,
        playerName: player.playerName,
        teamName: player.teamName,
        [field]: player[field as keyof TPlayerRankingTopFive],
      })) as TPlayerRankingTopFive[];
    },
  });

  if (delayLoading) return <TopFivePlayerSkeleton />;
  if (isError && error)
    return (
      <ErrorAlert
        errorMsg={error}
        type="component"
        containerClassName="w-1/4 py-10"
      />
    );

  const isTopFiveArray = (
    data: { data: { list: TPlayerRankingTopFive[] } } | TPlayerRankingTopFive[],
  ): data is TPlayerRankingTopFive[] => {
    return Array.isArray(data);
  };

  return (
    <ErrorBoundary
      fallback={
        <ErrorAlert
          errorMsg="페이지를 불러오는 중 오류가 발생했습니다."
          type="component"
          containerClassName="w-1/4 py-10"
        />
      }
    >
      <section className="ml-5 flex w-1/4 flex-col items-start justify-center text-kt-black-1">
        <h1 className="mb-2 text-xl font-bold text-kt-white">
          <strong className="text-kt-red-2">전체 {rankingTitle}</strong> TOP5
        </h1>
        <ul className="w-full text-kt-white">
          {isTopFiveArray(data) &&
            data.map((item) => (
              <li
                key={item.rank}
                className="mt-2 flex w-full justify-between border-b-[1px] border-kt-gray-2"
              >
                <p>
                  {item.rank}. {item.playerName} ({item.teamName})
                </p>
                <p>
                  {item.era}
                  {item.hra}
                </p>
              </li>
            ))}
        </ul>
        <div className="mt-3 w-full">
          <p className="text-right text-kt-white">※ 2024 정규리그 시즌</p>
        </div>
      </section>
    </ErrorBoundary>
  );
};
export default TopFivePlayerList;
