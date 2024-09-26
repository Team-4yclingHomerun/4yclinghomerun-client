import { useEffect, useState } from 'react';

import { useAxios } from '@/hooks/useAxios';
import GameRankingSectionFrame from '@/components/game/GameRankingSectionFrame';
import {
  APICrowdRankingData,
  TCrowdRankingData,
  TCrowdRankingTable,
} from '@/types/GameCrowdRanking';
import GameCrowdRankingGraph from '@/components/game/ranking/crowd/GameCrowdRankingGraph';
import GameCrowdRankingSelectYear from '@/components/game/ranking/crowd/GameCrowdRankingSelectYear';
import GameRankingTable from '@/components/game/ranking/GameRankingTable';
import { crowdRankingColumns } from '@/data/CrowdRankingTableData';

const CrowdRankingPage = () => {
  const [selectedYear, setSelectedYear] = useState<number>(
    new Date().getFullYear(),
  );
  const [isOpenSelectYears, setIsOpenSelectYears] = useState<boolean>(false);
  const [years, setYears] = useState<number[]>([]);
  const [tableInfo, setTableInfo] = useState<TCrowdRankingTable[]>([]);

  const {
    data: GameCrowdRankingTotalData,
    delayLoading,
    isError,
    error,
  } = useAxios<APICrowdRankingData, TCrowdRankingData[]>({
    url: `/game/rank/crowd?gyear=${selectedYear}`,
    method: 'GET',
    initialData: { data: { list: [] } },
    shouldFetchOnMount: true,
    processData: (data: APICrowdRankingData) => data.data.list,
  });

  useEffect(() => {
    if (Array.isArray(GameCrowdRankingTotalData)) {
      const sortedList = GameCrowdRankingTotalData.sort(
        (a, b) => b.crowd - a.crowd,
      );

      setTableInfo(
        sortedList.map((item, index) => ({
          ...item,
          rank: index + 1,
        })),
      );
    }
  }, [GameCrowdRankingTotalData]);

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

  if (isError || !Array.isArray(GameCrowdRankingTotalData)) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="flex flex-col gap-10">
      <GameCrowdRankingSelectYear
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
        <GameCrowdRankingGraph graphInfo={GameCrowdRankingTotalData} />
      </GameRankingSectionFrame>
      <GameRankingTable<TCrowdRankingTable>
        title={`${selectedYear} 시즌 관중`}
        tableInfo={tableInfo}
        columns={crowdRankingColumns}
        isLoading={delayLoading}
      />
    </div>
  );
};
export default CrowdRankingPage;
