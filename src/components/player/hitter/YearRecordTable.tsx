import { ColumnDef, createColumnHelper } from '@tanstack/react-table';

import { THittrtYearRecord } from '@/types/player';
import { DataTable } from '@/components/common/ui/table/DataTable';

const YearRecordTable = ({ items }: { items: THittrtYearRecord[] }) => {
  const columnHelper = createColumnHelper<THittrtYearRecord>();

  const column = [
    columnHelper.accessor('gyear', {
      cell: (info) => info.getValue(),
      header: () => '연도',
    }),
    columnHelper.accessor('teamName', {
      cell: (info) => info.getValue(),
      header: () => '팀',
    }),
    columnHelper.accessor('gamenum', {
      cell: (info) => info.getValue(),
      header: () => '경기수',
    }),
    columnHelper.accessor('run', {
      cell: (info) => info.getValue(),
      header: () => '득점',
    }),
    columnHelper.accessor('hit', {
      cell: (info) => info.getValue(),
      header: () => '안타',
    }),
    columnHelper.accessor('h2', {
      cell: (info) => info.getValue(),
      header: () => '2루타',
    }),
    columnHelper.accessor('h3', {
      cell: (info) => info.getValue(),
      header: () => '3루타',
    }),
    columnHelper.accessor('hr', {
      cell: (info) => info.getValue(),
      header: () => '홈런',
    }),
    columnHelper.accessor('rbi', {
      cell: (info) => info.getValue(),
      header: () => '타점',
    }),
    columnHelper.accessor('bb', {
      cell: (info) => info.getValue(),
      header: () => '볼넷',
    }),
    columnHelper.accessor('kk', {
      cell: (info) => info.getValue(),
      header: () => '삼진',
    }),
    columnHelper.accessor('sb', {
      cell: (info) => info.getValue(),
      header: () => '도루',
    }),
    columnHelper.accessor('cs', {
      cell: (info) => info.getValue(),
      header: () => '도실',
    }),
    columnHelper.accessor('hra', {
      cell: (info) => info.getValue(),
      header: () => '타율',
    }),
    columnHelper.accessor('hra', {
      cell: (info) => info.getValue(),
      header: () => '타율',
    }),
    columnHelper.accessor('bra', {
      cell: (info) => info.getValue(),
      header: () => '출루율',
    }),
    columnHelper.accessor('slg', {
      cell: (info) => info.getValue(),
      header: () => 'SLG',
    }),
  ] as ColumnDef<THittrtYearRecord>[];

  return (
    <>
      <DataTable
        data={items}
        columns={column}
        bodyCellClassName="border-b border-gray-600 text-center"
      />
    </>
  );
};
export default YearRecordTable;
