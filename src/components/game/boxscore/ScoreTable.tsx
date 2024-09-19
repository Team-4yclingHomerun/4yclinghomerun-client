import { createColumnHelper, ColumnDef } from '@tanstack/react-table';

import { BoxScoreScoreBoardType } from '@/types/BoxScoreType';
import { DataTable } from '@/ui/table/DataTable';

type ScoreTableProps = {
  scoreBoard: BoxScoreScoreBoardType[];
};

const columnHelper = createColumnHelper<BoxScoreScoreBoardType>(); // type-safe한 방식으로 column을 생성하기 위한 helper

// column 정의
const columns = [
  // columnHelper.accessor는 데이터 객체의 key를 받아 column을 생성함
  columnHelper.accessor('bhomeName', {
    cell: (info) => info.getValue(),
    header: () => '팀',
  }),
  ...Array.from({ length: 9 }, (_, i) =>
    columnHelper.accessor(`score${i + 1}` as keyof BoxScoreScoreBoardType, {
      cell: (info) => info.getValue(),
      header: () => `${i + 1}회`,
    }),
  ),
  columnHelper.accessor('run', {
    cell: (info) => info.getValue(),
    header: () => 'R',
  }),
  columnHelper.accessor('hit', {
    cell: (info) => info.getValue(),
    header: () => 'H',
  }),
  columnHelper.accessor('error', {
    cell: (info) => info.getValue(),
    header: () => 'E',
  }),
  columnHelper.accessor('ballfour', {
    cell: (info) => info.getValue(),
    header: () => 'B',
  }),
] as ColumnDef<BoxScoreScoreBoardType>[];

const ScoreTable = ({ scoreBoard }: ScoreTableProps) => {
  return (
    <DataTable
      data={scoreBoard}
      columns={columns}
      containerClassName="bg-kt-gray-1 bg-opacity-60"
      headerRowClassName="bg-opacity-70 uppercase"
      bodyCellClassName="text-center"
    />
  );
};

export default ScoreTable;
