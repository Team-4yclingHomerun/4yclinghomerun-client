import { ColumnDef, createColumnHelper } from '@tanstack/react-table';

import { TPitcherGameRecord } from '@/types/player';
import { DataTable } from '@/components/common/ui/table/DataTable';

const RecentRecordTable = ({ items }: { items: TPitcherGameRecord[] }) => {
  const columnHelper = createColumnHelper<TPitcherGameRecord>();

  const column = [
    columnHelper.accessor('displayDate', {
      cell: (info) => info.getValue(),
      header: () => '경기일',
    }),
    columnHelper.accessor('matchTeamName', {
      cell: (info) => info.getValue(),
      header: () => '상대',
    }),
    columnHelper.accessor('wls', {
      cell: (info) => info.getValue(),
      header: () => '결과',
    }),
    columnHelper.accessor('pa', {
      cell: (info) => info.getValue(),
      header: () => '타석수',
    }),
    columnHelper.accessor('innDisplay', {
      cell: (info) => info.getValue(),
      header: () => '이닝',
    }),
    columnHelper.accessor('hit', {
      cell: (info) => info.getValue(),
      header: () => '피안타',
    }),
    columnHelper.accessor('hr', {
      cell: (info) => info.getValue(),
      header: () => '피홈런',
    }),
    columnHelper.accessor('bb', {
      cell: (info) => info.getValue(),
      header: () => '볼넷',
    }),
    columnHelper.accessor('hp', {
      cell: (info) => info.getValue(),
      header: () => '사구',
    }),
    columnHelper.accessor('kk', {
      cell: (info) => info.getValue(),
      header: () => '탈삼진',
    }),
    columnHelper.accessor('r', {
      cell: (info) => info.getValue(),
      header: () => '실점',
    }),
    columnHelper.accessor('er', {
      cell: (info) => info.getValue(),
      header: () => '자책점',
    }),
  ] as ColumnDef<TPitcherGameRecord>[];
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
