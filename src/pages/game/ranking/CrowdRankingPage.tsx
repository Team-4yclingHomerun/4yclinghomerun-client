import { useEffect, useState } from 'react';

import { useAxios } from '@/hooks/useAxios';
import GameRankingSectionFrame from '@/components/game/GameRankingSectionFrame';
import {
  APICrowdRankingData,
  TCrowdRankingData,
  TCrowdRankingTable,
} from '@/types/CrowdRanking';
import CrowdRankingGraph from '@/components/game/ranking/crowd/CrowdRankingGraph';
import CrowdRankingSelectYear from '@/components/game/ranking/crowd/CrowdRankingSelectYear';
import GameRankingTable from '@/components/game/ranking/GameRankingTable';
import { crowdRankingColumns } from '@/data/CrowdRankingTableData';
import BarGraphSkeleton from '@/components/game/ranking/BarGraphSkeleton';
import ErrorAlert from '@/components/error/ErrorAlert';
import ErrorBoundary from '@/components/error/ErrorBoundary';

const CrowdRankingPage = () => {
  const [selectedYear, setSelectedYear] = useState<number>(
    new Date().getFullYear(),
  );
  const [isOpenSelectYears, setIsOpenSelectYears] = useState<boolean>(false);
  const [years, setYears] = useState<number[]>([]);
  const [tableInfo, setTableInfo] = useState<TCrowdRankingTable[]>([]);

  const {
    data: CrowdRankingTotalData,
    delayLoading,
    isError,
    error,
  } = useAxios<APICrowdRankingData, TCrowdRankingData[]>({
    url: `/game/rank/crowd/gyear-${selectedYear}`,
    method: 'GET',
    initialData: { data: { list: [] } },
    shouldFetchOnMount: true,
    processData: (data: APICrowdRankingData) => data.data.list,
  });

  useEffect(() => {
    if (Array.isArray(CrowdRankingTotalData)) {
      const sortedList = CrowdRankingTotalData.sort(
        (a, b) => b.crowd - a.crowd,
      );

      setTableInfo(
        sortedList.map((item, index) => ({
          ...item,
          rank: index + 1,
        })),
      );
    }
  }, [CrowdRankingTotalData]);

  useEffect(() => {
    const generatedYears: number[] = [];
    for (let year = new Date().getFullYear(); year >= 2019; year--) {
      generatedYears.push(year);
    }
    setYears(generatedYears);
  }, [selectedYear]);

  const handlePreviousYear = () => {
    if (selectedYear <= 2019) return;
    setSelectedYear((prev) => prev - 1);
  };

  const handleNextYear = () => {
    if (selectedYear >= new Date().getFullYear()) return;
    setSelectedYear((prev) => prev + 1);
  };

  const handleOpenSelectYear = () => {
    setIsOpenSelectYears((isOpenSelectYears) => !isOpenSelectYears);
  };

  const handleYearClick = (year: number) => {
    setSelectedYear(year);
    setIsOpenSelectYears((isOpenSelectYears) => !isOpenSelectYears);
  };

  if (isError && error) {
    return <ErrorAlert errorMsg={error} type="page" />;
  }

  return (
    <ErrorBoundary
      fallback={
        <ErrorAlert
          errorMsg="페이지를 불러오는 중 오류가 발생했습니다."
          type="page"
        />
      }
    >
      <div className="flex flex-col gap-10">
        <CrowdRankingSelectYear
          selectedYear={selectedYear}
          isOpenSelectYears={isOpenSelectYears}
          years={years}
          handleNextYear={handleNextYear}
          handleOpenSelectYears={handleOpenSelectYear}
          handlePreviousYear={handlePreviousYear}
          handleYearClick={handleYearClick}
        />
        <GameRankingSectionFrame
          title={`${selectedYear} 시즌 누적관중`}
          height="h-[50vh]"
          type="graph"
        >
          {delayLoading ? (
            <BarGraphSkeleton />
          ) : (
            Array.isArray(CrowdRankingTotalData) && (
              <CrowdRankingGraph graphInfo={CrowdRankingTotalData} />
            )
          )}
        </GameRankingSectionFrame>
        <GameRankingTable<TCrowdRankingTable>
          title={`${selectedYear} 시즌 관중`}
          tableInfo={tableInfo}
          columns={crowdRankingColumns}
          isLoading={delayLoading}
        />
      </div>
    </ErrorBoundary>
  );
};
export default CrowdRankingPage;
