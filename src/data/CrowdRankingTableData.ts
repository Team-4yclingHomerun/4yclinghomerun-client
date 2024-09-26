import { createColumnHelper, ColumnDef } from '@tanstack/react-table';

import { TCrowdRankingTable } from '@/types/CrowdRanking';

const columnHelper = createColumnHelper<TCrowdRankingTable>();

export const crowdRankingColumns = [
  columnHelper.accessor('rank', {
    cell: (info) => info.getValue(),
    header: () => '순위',
  }),
  columnHelper.accessor('teamName', {
    cell: (info) => info.getValue(),
    header: () => '팀명',
  }),
  columnHelper.accessor('game', {
    cell: (info) => info.getValue(),
    header: () => '경기 수',
  }),
  columnHelper.accessor('crowd', {
    cell: (info) =>
      `${new Intl.NumberFormat('en-US').format(info.getValue())}명`,
    header: () => '누적관중',
  }),
] as ColumnDef<TCrowdRankingTable>[];
