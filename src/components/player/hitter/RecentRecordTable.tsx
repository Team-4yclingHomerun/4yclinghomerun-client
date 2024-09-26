import { THitterGameRecord } from '@/types/player';
import { DataTable } from '@/ui/table/DataTable';
import { ColumnDef, createColumnHelper } from '@tanstack/react-table';

const RecentRecordTable = ({ items }: { items: THitterGameRecord[] }) => {
  const columnHelper = createColumnHelper<THitterGameRecord>();

  const column = [
    columnHelper.accessor('displayDate', {
      cell: (info) => info.getValue(),
      header: () => '날자',
    }),
    columnHelper.accessor('matchTeamName', {
      cell: (info) => info.getValue(),
      header: () => '상대팀',
    }),
    columnHelper.accessor('bra', {
      cell: (info) => info.getValue(),
      header: () => '타율',
    }),
    columnHelper.accessor('ab', {
      cell: (info) => info.getValue(),
      header: () => '타수',
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
  ] as ColumnDef<THitterGameRecord>[];

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
export default RecentRecordTable;
