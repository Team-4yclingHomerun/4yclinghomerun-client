import { createColumnHelper, ColumnDef } from '@tanstack/react-table';

import { PitchersType } from '@/types/BoxScoreType';
import { DataTable } from '@/components/common/ui/table/DataTable';

type PitcherRecordTableProps = {
  data: PitchersType[];
};

const columnHelper = createColumnHelper<PitchersType>();

const columns = [
  columnHelper.accessor('name', {
    cell: (info) => info.getValue(),
    header: () => '선수명',
  }),
  columnHelper.accessor('changeinn', {
    cell: (info) => info.getValue(),
    header: () => '등판',
  }),
  columnHelper.accessor('wls', {
    cell: (info) => {
      const value = info.getValue();
      const wls = {
        W: '승리',
        L: '패배',
        S: '세이브',
        H: '홀드',
      };
      return wls[value as keyof typeof wls] || value;
    },
    header: () => '결과',
  }),
  columnHelper.accessor('w', {
    cell: (info) => info.getValue(),
    header: () => '승',
  }),
  columnHelper.accessor('l', {
    cell: (info) => info.getValue(),
    header: () => '패',
  }),
  columnHelper.accessor('s', {
    cell: (info) => info.getValue(),
    header: () => '세',
  }),
  columnHelper.accessor('inn', {
    cell: (info) => info.getValue(),
    header: () => '이닝',
  }),
  columnHelper.accessor('pa', {
    cell: (info) => info.getValue(),
    header: () => '타자',
  }),
  columnHelper.accessor('bf', {
    cell: (info) => info.getValue(),
    header: () => '투구 수',
  }),
  columnHelper.accessor('ab', {
    cell: (info) => info.getValue(),
    header: () => '타수',
  }),
  columnHelper.accessor('hit', {
    cell: (info) => info.getValue(),
    header: () => '피안타',
  }),
  columnHelper.accessor('hr', {
    cell: (info) => info.getValue(),
    header: () => '피홈런',
  }),
  columnHelper.accessor('bbhp', {
    cell: (info) => info.getValue(),
    header: () => '사구',
  }),
  columnHelper.accessor('kk', {
    cell: (info) => info.getValue(),
    header: () => '삼진',
  }),
  columnHelper.accessor('r', {
    cell: (info) => info.getValue(),
    header: () => '실점',
  }),
  columnHelper.accessor('er', {
    cell: (info) => info.getValue(),
    header: () => '자책',
  }),
  columnHelper.accessor(
    (row) => {
      const era = (row.accmEr * 9) / (row.accmInn2 / 3);
      return isNaN(era) ? '-' : era.toFixed(2);
    },
    {
      id: 'era',
      cell: (info) => info.getValue(),
      header: () => '평균 자책점',
    },
  ),
] as ColumnDef<PitchersType>[];

const PitcherRecordTable = ({ data }: PitcherRecordTableProps) => {
  return (
    <DataTable
      data={data}
      columns={columns}
      bodyCellClassName="border-b border-gray-600 text-center"
    />
  );
};

export default PitcherRecordTable;
