import { useEffect, useLayoutEffect, useState } from 'react';

import PlayerRankingTabs from '@/components/game/ranking/player/PlayerRankingTabs';
import SearchInput from '@/components/common/ui/SearchInput';
import { useAxios } from '@/hooks/useAxios';
import { TableData } from '@/data/PlayerRankingData';
import PlayerRankingTable from './PlayerRankingTable';
import {
  TPlayerRankingColumn,
  TPlayerRankingTable,
} from '@/types/PlayerRanking';

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
  const [tableColumns, setTableColumns] = useState<TPlayerRankingColumn>([]);

  useEffect(() => {
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

  const { data, delayLoading, isError, error } = useAxios<
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
    const matchingTable = TableData.find(
      (table) => table.tableName === activeTab,
    );
    if (matchingTable) {
      setTableColumns(matchingTable.tableColums);
      setTableData(data as TPlayerRankingTable[]);
    }
  }, [data]);

  const handleActiveTab = (title: string) => {
    setActiveTab(title);
  };

  const handleSearch = (searchWord: string) => {
    if (Array.isArray(data)) {
      if (searchWord.length === 0) {
        setTableData(data);
      } else {
        const filterTable = data.filter((item) =>
          item.playerName.includes(searchWord),
        );
        setTableData(filterTable);
      }
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
      {Array.isArray(data) && (
        <PlayerRankingTable
          activeTab={activeTab}
          tableData={tableData}
          tableColumns={tableColumns}
          isLoading={delayLoading}
          isError={isError}
          error={error}
        />
      )}
    </section>
  );
};

export default PlayerRankingTableSection;
