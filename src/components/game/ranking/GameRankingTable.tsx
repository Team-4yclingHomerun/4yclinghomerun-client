import { ColumnDef } from '@tanstack/react-table';

import { DataTable } from '@/components/common/ui/table/DataTable';
import ErrorAlert from '@/components/error/ErrorAlert';
import GameRankingSectionFrame from '../GameRankingSectionFrame';

interface WithTeamName {
  teamName: string;
}

interface GameRankingTableProps<T extends WithTeamName> {
  title: string;
  tableInfo: T[];
  columns: ColumnDef<T>[];
  isLoading: boolean;
  isError?: boolean;
  error?: string | null;
}

const GameRankingTable = <T extends WithTeamName>({
  title,
  tableInfo,
  columns,
  isLoading,
  isError,
  error,
}: GameRankingTableProps<T>) => {
  const isHighlighted = (row: T) => row.teamName === 'KT';

  return (
    <GameRankingSectionFrame title={title} height="h-[50vh]" type="table">
      {isError && error ? (
        <ErrorAlert
          errorMsg={error}
          type="component"
          containerClassName="py-20"
        />
      ) : (
        <DataTable
          data={tableInfo}
          columns={columns}
          bodyCellClassName="border-b border-gray-600 text-center"
          highlightCondition={isHighlighted}
          isLoading={isLoading}
        />
      )}
    </GameRankingSectionFrame>
  );
};

export default GameRankingTable;
