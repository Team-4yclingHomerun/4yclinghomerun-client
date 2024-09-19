import { createColumnHelper, ColumnDef } from '@tanstack/react-table';

import { BattersType } from '@/types/BoxScoreType';
import { DataTable } from '@/ui/table/DataTable';

type BatterRecordTableProps = {
  data: BattersType[];
};

const columnHelper = createColumnHelper<BattersType>();

const columns = [
  columnHelper.accessor('oneturn', {
    cell: (info) => info.getValue(),
    header: () => '타순',
  }),
  columnHelper.accessor('position', {
    cell: (info) => info.getValue(),
    header: () => '포지션',
  }),
  columnHelper.accessor('name', {
    cell: (info) => info.getValue(),
    header: () => '선수명',
  }),
  ...Array.from({ length: 9 }, (_, i) =>
    columnHelper.accessor(`inn${i + 1}` as keyof BattersType, {
      cell: (info) => info.getValue(),
      header: () => `${i + 1}회`,
    }),
  ),
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
  columnHelper.accessor('rbi', {
    cell: (info) => info.getValue(),
    header: () => '타점',
  }),
  columnHelper.accessor(
    (row) => {
      const battingAvg = row.accmHit / row.accmAb;
      return isNaN(battingAvg) ? '-' : battingAvg.toFixed(3);
    },
    {
      id: 'battingAvg',
      cell: (info) => info.getValue(),
      header: () => '타율',
    },
  ),
] as ColumnDef<BattersType>[];

const BatterRecordTable = ({ data }: BatterRecordTableProps) => {
  return (
    <DataTable
      data={data}
      columns={columns}
      bodyCellClassName="border-b border-gray-600 text-center"
    />
  );
};

export default BatterRecordTable;
