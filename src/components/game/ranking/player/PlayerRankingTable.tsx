import { useLayoutEffect, useState } from 'react';

import { ColumnDef } from '@tanstack/react-table';

import { DataTable } from '@/components/common/ui/table/DataTable';
import ErrorAlert from '@/components/error/ErrorAlert';
import ErrorBoundary from '@/components/error/ErrorBoundary';
import {
  TPlayerRankingColumn,
  TPlayerRankingTable,
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
  const [excludeSortingCount, setExcludeSortingCount] = useState<number>(2);
  const [isHighlighted, setIsHighlighted] = useState<boolean>(false);

  useLayoutEffect(() => {
    if (activeTab.includes('전체')) {
      setExcludeSortingCount(3);
      setIsHighlighted(true);
    } else {
      setExcludeSortingCount(2);
      setIsHighlighted(false);
    }
  }, [tableData]);

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
        <DataTable
          data={tableData as TPlayerRankingTable[]}
          columns={tableColumns as ColumnDef<TPlayerRankingTable>[]}
          bodyCellClassName="border-b border-gray-600 text-center"
          isLoading={isLoading}
          enableSorting={true}
          excludeSortingCount={excludeSortingCount}
          highlightCondition={
            isHighlighted ? (row) => row.teamName === 'KT' : undefined
          }
        />
      )}
    </ErrorBoundary>
  );
};

export default PlayerRankingTable;
