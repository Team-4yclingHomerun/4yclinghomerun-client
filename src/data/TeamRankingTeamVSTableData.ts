import { createColumnHelper, ColumnDef } from '@tanstack/react-table';

import { TTeamRankingTeamVSTable } from '@/types/TeamRanking';

const teamVSColumnHelper = createColumnHelper<TTeamRankingTeamVSTable>();

export const teamRankingTeamVSColumns = [
  teamVSColumnHelper.accessor('teamName', {
    header: () => '팀명',
    cell: (info) => info.getValue(),
  }),
  teamVSColumnHelper.accessor('teamName', {
    header: () => '팀 이름',
    cell: (info) => info.getValue(),
  }),
  teamVSColumnHelper.accessor('vsTeamCode', {
    header: () => '상대 팀 코드',
    cell: (info) => info.getValue(),
  }),
  teamVSColumnHelper.accessor('win', {
    header: () => '승리',
    cell: (info) => info.getValue(),
  }),
  teamVSColumnHelper.accessor('drawn', {
    header: () => '무승부',
    cell: (info) => info.getValue(),
  }),
  teamVSColumnHelper.accessor('lose', {
    header: () => '패배',
    cell: (info) => info.getValue(),
  }),
] as ColumnDef<TTeamRankingTeamVSTable>[];
