import { ColumnDef } from '@tanstack/react-table';

import { DataTable } from '@/components/common/ui/table/DataTable';
import ErrorAlert from '@/components/error/ErrorAlert';
import ErrorBoundary from '@/components/error/ErrorBoundary';
import {
  TPlayerRankingColumn,
  TPlayerRankingTable,
} from '@/types/PlayerRanking';
import {
  TKTBatterRankingTable,
  TKTPitcherRankingTable,
  TTotalBatterRankingTable,
  TTotalPitcherRankingTable,
} from '@/types/PlayerRanking';

const PlayerRankingTable = ({
  activeTab,
  tableData,
  tableColumns,
  isLoading,
  isError,
  error,
}: {
  activeTab: string;
  tableData: TPlayerRankingTable[];
  tableColumns: TPlayerRankingColumn;
  isLoading: boolean;
  isError: boolean;
  error: string | null;
}) => {
  return (
    <ErrorBoundary
      fallback={
        <ErrorAlert
          errorMsg="페이지를 불러오는 중 오류가 발생했습니다."
          type="component"
          containerClassName="w-full py-20"
        />
      }
    >
      {isError && error ? (
        <ErrorAlert
          errorMsg={error}
          type="component"
          containerClassName="w-full py-20"
        />
      ) : (
        <>
          {(() => {
            switch (activeTab) {
              case '전체 투수 순위':
                return (
                  <DataTable
                    data={tableData as TTotalPitcherRankingTable[]}
                    columns={
                      tableColumns as ColumnDef<TTotalPitcherRankingTable>[]
                    }
                    bodyCellClassName="border-b border-gray-600 text-center"
                    isLoading={isLoading}
                    enableSorting={true}
                    excludeSortingCount={3}
                  />
                );
              case 'kt wiz 투수':
                return (
                  <DataTable
                    data={tableData as TKTPitcherRankingTable[]}
                    columns={
                      tableColumns as ColumnDef<TKTPitcherRankingTable>[]
                    }
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
                    columns={
                      tableColumns as ColumnDef<TTotalBatterRankingTable>[]
                    }
                    bodyCellClassName="border-b border-gray-600 text-center"
                    isLoading={isLoading}
                    enableSorting={true}
                    excludeSortingCount={3}
                  />
                );
              case 'kt wiz 타자':
                return (
                  <DataTable
                    data={tableData as TKTBatterRankingTable[]}
                    columns={tableColumns as ColumnDef<TKTBatterRankingTable>[]}
                    bodyCellClassName="border-b border-gray-600 text-center"
                    isLoading={isLoading}
                    enableSorting={true}
                    excludeSortingCount={2}
                  />
                );
              default:
                return <p>Error</p>;
            }
          })()}
        </>
      )}
    </ErrorBoundary>
  );
};

export default PlayerRankingTable;
