import { ColumnDef, createColumnHelper } from '@tanstack/react-table';

import { TPitcherYearRecord } from '@/types/player';

const YearRecordTable = ({ items }: { items: TPitcherYearRecord[] }) => {
  const columnHelper = createColumnHelper<TPitcherYearRecord>();

  const column = [
    columnHelper.accessor('gyear', {
      cell: (info) => info.getValue(),
      header: () => '연도',
    }),
    columnHelper.accessor('teamName', {
      cell: (info) => info.getValue(),
      header: () => '팀',
    }),
    columnHelper.accessor('w', {
      cell: (info) => info.getValue(),
      header: () => '승',
    }),
    columnHelper.accessor('l', {
      cell: (info) => info.getValue(),
      header: () => '패',
    }),
    columnHelper.accessor('era', {
      cell: (info) => info.getValue(),
      header: () => '평균자책점',
    }),
    columnHelper.accessor('gamenum', {
      cell: (info) => info.getValue(),
      header: () => '경기수',
    }),
    columnHelper.accessor('bf', {
      cell: (info) => info.getValue(),
      header: () => '타석수',
    }),
    columnHelper.accessor('wCg', {
      cell: (info) => info.getValue(),
      header: () => '완투',
    }),
    columnHelper.accessor('sho', {
      cell: (info) => info.getValue(),
      header: () => '완봉',
    }),
    columnHelper.accessor('sv', {
      cell: (info) => info.getValue(),
      header: () => '세이브',
    }),
    columnHelper.accessor('innDisplay', {
      cell: (info) => info.getValue(),
      header: () => '이닝',
    }),
    columnHelper.accessor('hit', {
      cell: (info) => info.getValue(),
      header: () => '피안타',
    }),
    columnHelper.accessor('r', {
      cell: (info) => info.getValue(),
      header: () => '실점',
    }),
    columnHelper.accessor('er', {
      cell: (info) => info.getValue(),
      header: () => '자책점',
    }),
    columnHelper.accessor('hr', {
      cell: (info) => info.getValue(),
      header: () => '피홈런',
    }),
    columnHelper.accessor('hp', {
      cell: (info) => info.getValue(),
      header: () => '사구',
    }),
    columnHelper.accessor('bb', {
      cell: (info) => info.getValue(),
      header: () => '볼넷',
    }),
    columnHelper.accessor('kk', {
      cell: (info) => info.getValue(),
      header: () => '탈삼진',
    }),
  ] as ColumnDef<TPitcherYearRecord>[];
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
