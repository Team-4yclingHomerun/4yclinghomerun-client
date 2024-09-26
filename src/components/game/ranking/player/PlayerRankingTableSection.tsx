import { useLayoutEffect, useState } from 'react';

import PlayerRankingTabs from '@/components/game/ranking/player/PlayerRankingTabs';
import SearchInput from '@/components/common/ui/SearchInput';
import { useAxios } from '@/hooks/useAxios';
import { TableData } from '@/data/PlayerRankingData';
import PlayerRankingTable from './PlayerRankingTable';
import { TPlayerRankingTable } from '@/types/PlayerRanking';

const PlayerRankingTableSection = ({
  rankingType,
}: {
  rankingType: '타자' | '투수';
}) => {
  const [activeTab, setActiveTab] = useState(`kt wiz ${rankingType}`);
  const [tabsList, setTabsList] = useState([
    `kt wiz ${rankingType}`,
    `전체 ${rankingType} 순위`,
  ]);
  const [apiUrl, setApiUrl] = useState<string>('');
  const [tableData, setTableData] = useState<TPlayerRankingTable[]>([]);

  useLayoutEffect(() => {
    setActiveTab(`kt wiz ${rankingType}`);
    setTabsList([`kt wiz ${rankingType}`, `전체 ${rankingType} 순위`]);
  }, [rankingType]);

  useLayoutEffect(() => {
    const matchingTable = TableData.find(
      (table) => table.tableName === activeTab,
    );
    if (matchingTable) {
      setApiUrl(matchingTable.apiUrl);
    }
  }, [activeTab]);

  const {
    data: PlayerRankingTableData,
    delayLoading: isPlayerRankingLoaing,
    isError: isPlayerRankingError,
    error: PlayerRankingError,
  } = useAxios<
    { data: { list: TPlayerRankingTable[] } },
    TPlayerRankingTable[]
  >({
    url: apiUrl,
    method: 'GET',
    initialData: { data: { list: [] } },
    shouldFetchOnMount: true,
    processData: (data) => data.data.list,
  });

  useLayoutEffect(() => {
    if (Array.isArray(PlayerRankingTableData)) {
      setTableData(PlayerRankingTableData as TPlayerRankingTable[]);
    }
  }, [PlayerRankingTableData]);

  const handleActiveTab = (title: string) => {
    setActiveTab(title);
  };

  if (isPlayerRankingError || !Array.isArray(PlayerRankingTableData)) {
    return <p>Error: {PlayerRankingError}</p>;
  }

  const handleSearch = (searchWord: string) => {
    if (searchWord.length === 0) {
      setTableData(PlayerRankingTableData);
    } else {
      const filterTable = PlayerRankingTableData.filter((item) =>
        item.playerName.includes(searchWord),
      );
      setTableData(filterTable);
    }
  };

  return (
    <section className="space-y-2">
      <div className="flex items-center justify-between">
        <PlayerRankingTabs
          activeTab={activeTab}
          handleActiveTab={handleActiveTab}
          tabsList={tabsList}
        />
        <SearchInput
          onSearch={handleSearch}
          placeholder="선수 이름을 입력해주세요"
        />
      </div>
      <p className="w-full text-end text-kt-gray-2">
        ※ 각 항목을 클릭하시면 오름차순/내림차순 정렬이 가능합니다.
      </p>
      <PlayerRankingTable
        activeTab={activeTab}
        tableData={tableData}
        isLoading={isPlayerRankingLoaing}
        isError={isPlayerRankingError}
        error={PlayerRankingError}
      />
    </section>
  );
};

export default PlayerRankingTableSection;
