import { ColumnDef } from '@tanstack/react-table';

import {
  ktPitcherColumns,
  totalPitcherColumns,
} from '@/data/PitcherRankingTableData';
import {
  ktBatterColumns,
  totalBatterColumns,
} from '@/data/BatterRankingTableData';
import {
  TKTBatterRankingTable,
  TKTPitcherRankingTable,
  TPlayerRankigTableData,
  TTotalBatterRankingTable,
  TTotalPitcherRankingTable,
} from '@/types/PlayerRanking';

export const TableData: TPlayerRankigTableData[] = [
  {
    tableName: '전체 투수 순위',
    apiUrl: '/game/rank/total/pitcher',
    tableColums: totalPitcherColumns as ColumnDef<TTotalPitcherRankingTable>[],
  },
  {
    tableName: 'kt wiz 투수',
    apiUrl: '/game/rank/kt/pitcher',
    tableColums: ktPitcherColumns as ColumnDef<TKTPitcherRankingTable>[],
  },
  {
    tableName: '전체 타자 순위',
    apiUrl: '/game/rank/total/batter',
    tableColums: totalBatterColumns as ColumnDef<TTotalBatterRankingTable>[],
  },
  {
    tableName: 'kt wiz 타자',
    apiUrl: '/game/rank/kt/batter',
    tableColums: ktBatterColumns as ColumnDef<TKTBatterRankingTable>[],
  },
];

export const TopThreeListData = {
  pitcher: [
    {
      title: '평균자책점',
      url: '/game/rank/pitcher/era/top3', // 투수 평균자책점
      data: 'era',
    },
    {
      title: '승리',
      url: '/game/rank/pitcher/win/top3', // 투수 승리
      data: 'w',
    },
  ],
  batter: [
    {
      title: '타율',
      url: '/game/rank/batter/hra/top3', // 타자 타율
      data: 'hra',
    },
    {
      title: '홈런',
      url: '/game/rank/batter/hr/top3', // 타자 홈런
      data: 'hr',
    },
  ],
};

export const TopFivePlayerListData = {
  pitcher: {
    url: '/game/rank/pitcher/total/top5',
    data: 'era',
  },
  batter: {
    url: '/game/rank/batter/total/top5',
    data: 'hra',
  },
};
