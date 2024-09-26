import { DataTable } from '@/components/common/ui/table/DataTable';
import {
  ktPitcherColumns,
  totalPitcherColumns,
} from '@/data/PitcherRankingTableData';
import {
  ktBatterColumns,
  totalBatterColumns,
} from '@/data/BatterRankingTableData';
import { TPlayerRankingTable } from '@/types/PlayerRanking';
import {
  TKTBatterRankingTable,
  TKTPitcherRankingTable,
  TTotalBatterRankingTable,
  TTotalPitcherRankingTable,
} from '@/types/PlayerRanking';

const PlayerRankingTable = ({
  activeTab,
  tableData,
  isLoading,
  isError,
  error,
}: {
  activeTab: string;
  tableData: TPlayerRankingTable[];
  isLoading: boolean;
  isError: boolean;
  error: string | null;
}) => {
  const isKtHighlighted = (
    row: TTotalPitcherRankingTable | TTotalBatterRankingTable,
  ) => row.teamName === 'KT';

  if (isError || !Array.isArray(tableData)) {
    return <p>Error: {error}</p>;
  }
  switch (activeTab) {
    case '전체 투수 순위':
      return (
        <DataTable
          data={tableData as TTotalPitcherRankingTable[]}
          columns={totalPitcherColumns}
          bodyCellClassName="border-b border-gray-600 text-center"
          isLoading={isLoading}
          highlightCondition={isKtHighlighted}
          enableSorting={true}
          excludeSortingCount={3}
        />
      );
    case 'kt wiz 투수':
      return (
        <DataTable
          data={tableData as TKTPitcherRankingTable[]}
          columns={ktPitcherColumns}
          bodyCellClassName="border-b border-gray-600 text-center"
          isLoading={isLoading}
          enableSorting={true}
          excludeSortingCount={2}
        />
      );
    case '전체 타자 순위':
      return (
        <DataTable
          data={tableData as TTotalBatterRankingTable[]}
          columns={totalBatterColumns}
          bodyCellClassName="border-b border-gray-600 text-center"
          isLoading={isLoading}
          highlightCondition={isKtHighlighted}
          enableSorting={true}
          excludeSortingCount={3}
        />
      );
    case 'kt wiz 타자':
      return (
        <DataTable
          data={tableData as TKTBatterRankingTable[]}
          columns={ktBatterColumns}
          bodyCellClassName="border-b border-gray-600 text-center"
          isLoading={isLoading}
          enableSorting={true}
          excludeSortingCount={2}
        />
      );
    default:
      return <p>Error</p>;
  }
};

export default PlayerRankingTable;
