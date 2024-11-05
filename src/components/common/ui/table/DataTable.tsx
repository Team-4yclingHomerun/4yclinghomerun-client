import { useEffect, useMemo, useState } from 'react';

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from '@tanstack/react-table';
import { TiArrowSortedUp } from 'react-icons/ti';
import { TiArrowSortedDown } from 'react-icons/ti';

import { cn } from '@/utils/cn';
import DataTableSkeleton from './DataTableSkeleton';
import CustomScrollbar from '../scrollbar/CustomScrollbar';

type CellValue = string | number | boolean | null | undefined;

type DataTableProps<T extends object> = {
  data: T[];
  columns: ColumnDef<T, CellValue>[];
  containerClassName?: string;
  headerRowClassName?: string;
  headerCellClassName?: string;
  bodyClassName?: string;
  bodyCellClassName?: string;
  highlightCondition?: (row: T) => boolean;
  isLoading?: boolean;
  noResultMsg?: string;
  enableSorting?: boolean;
  excludeSortingCount?: number;
};

const DataTable = <T extends object>({
  data,
  columns,
  containerClassName,
  headerRowClassName,
  headerCellClassName,
  bodyClassName,
  bodyCellClassName,
  highlightCondition,
  isLoading = false,
  noResultMsg = '검색 결과가 없습니다',
  enableSorting = false,
  excludeSortingCount = 1,
}: DataTableProps<T>) => {
  const [sorting, setSorting] = useState<SortingState>([]);

  useEffect(() => {
    setSorting([]);
  }, [columns]);

  const getSortedRowIndex = useMemo(() => {
    return (originalIndex: number) => {
      const sortedRows = table.getSortedRowModel().rows;
      return sortedRows.findIndex((row) => row.index === originalIndex) + 1;
    };
  }, [sorting, data]);

  const isFirstColumnRank = columns[0].header === '순위';

  const updatedColumns = useMemo(() => {
    if (isFirstColumnRank) {
      const rankColumn: ColumnDef<T, CellValue> = {
        ...columns[0],
        cell: (info) => getSortedRowIndex(info.row.index),
      };
      return [rankColumn, ...columns.slice(1)];
    }
    return columns;
  }, [columns, isFirstColumnRank, getSortedRowIndex, data]);

  const table = useReactTable({
    data,
    columns: updatedColumns,
    getCoreRowModel: getCoreRowModel(),
    ...(enableSorting && {
      getSortedRowModel: getSortedRowModel(),
      onSortingChange: setSorting,
      state: { sorting },
    }),
  });

  return isLoading ? (
    <DataTableSkeleton rows={10} columns={columns.length} />
  ) : (
    <div
      className={cn(
        'overflow-hidden rounded-b-md rounded-t-md',
        containerClassName,
      )}
    >
      <CustomScrollbar
        containerClassName={cn(data.length > 8 ? 'h-[400px]' : 'h-fit')}
        hideScrollbar={false}
        marginTop={48}
      >
        <table className="relative min-w-full">
          <thead className="sticky top-0 z-10">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr
                key={headerGroup.id}
                className={cn(
                  'bg-kt-red-2 bg-opacity-40 text-base text-white backdrop-blur-md',
                  headerRowClassName,
                )}
              >
                {headerGroup.headers.map((header, index) => (
                  <th
                    key={header.id}
                    className={cn(
                      'sticky top-0 px-3 py-3',
                      headerCellClassName,
                      enableSorting &&
                        index >= excludeSortingCount &&
                        'cursor-pointer',
                    )}
                    onClick={
                      enableSorting && index >= excludeSortingCount
                        ? header.column.getToggleSortingHandler()
                        : undefined
                    }
                  >
                    <div className="flex items-center justify-center gap-2">
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                      {enableSorting &&
                        index >= excludeSortingCount &&
                        (header.column.getIsSorted() === 'asc' ? (
                          <TiArrowSortedUp />
                        ) : header.column.getIsSorted() === 'desc' ? (
                          <TiArrowSortedDown />
                        ) : null)}
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody
            className={cn('text-sm font-light text-gray-100', bodyClassName)}
          >
            {table.getRowModel().rows.length === 0 ? (
              <tr>
                <td
                  colSpan={columns.length}
                  className="rounded-md border-gray-600 bg-kt-gray-1 bg-opacity-50 py-3 text-center text-gray-400"
                >
                  {noResultMsg}
                </td>
              </tr>
            ) : (
              table.getRowModel().rows.map((row) => (
                <tr key={row.id}>
                  {row.getVisibleCells().map((cell, index) => (
                    <td
                      key={cell.id}
                      className={cn(
                        'whitespace-nowrap px-3 py-3',
                        index < excludeSortingCount &&
                          'bg-kt-gray-1 bg-opacity-80 font-extrabold',
                        bodyCellClassName,
                        highlightCondition && highlightCondition(row.original)
                          ? 'bg-kt-red-2 font-extrabold opacity-80'
                          : '',
                      )}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </CustomScrollbar>
    </div>
  );
};

export { DataTable };
