import { createColumnHelper, ColumnDef } from '@tanstack/react-table';

import { TTeamRankingYearTable } from '@/types/TeamRanking';

const yearColumnHelper = createColumnHelper<TTeamRankingYearTable>();

export const teamRankingYearColumns = [
  yearColumnHelper.accessor('rank', {
    cell: (info) => info.getValue(),
    header: () => '순위',
  }),
  yearColumnHelper.accessor('teamName', {
    cell: (info) => info.getValue(),
    header: () => '팀명',
  }),
  yearColumnHelper.accessor('game', {
    cell: (info) => info.getValue(),
    header: () => '경기 수',
  }),
  yearColumnHelper.accessor('win', {
    cell: (info) => info.getValue(),
    header: () => '승',
  }),
  yearColumnHelper.accessor('lose', {
    cell: (info) => info.getValue(),
    header: () => '패',
  }),
  yearColumnHelper.accessor('drawn', {
    cell: (info) => info.getValue(),
    header: () => '무',
  }),
  yearColumnHelper.accessor('wra', {
    cell: (info) => info.getValue(),
    header: () => '승률',
  }),
  yearColumnHelper.accessor('ab', {
    cell: (info) => new Intl.NumberFormat('en-US').format(info.getValue()),
    header: () => '타수',
  }),
  yearColumnHelper.accessor('continue1', {
    cell: (info) => info.getValue(),
    header: () => '연속',
  }),
  yearColumnHelper.accessor('bra', {
    cell: (info) => info.getValue(),
    header: () => '출루율',
  }),
  yearColumnHelper.accessor('lra', {
    cell: (info) => info.getValue(),
    header: () => '장타율',
  }),
  yearColumnHelper.accessor('hra', {
    cell: (info) => info.getValue(),
    header: () => '타율',
  }),
  yearColumnHelper.accessor('er', {
    cell: (info) => info.getValue(),
    header: () => '자책점',
  }),
  yearColumnHelper.accessor('run', {
    cell: (info) => info.getValue(),
    header: () => '득점',
  }),
  yearColumnHelper.accessor('r', {
    cell: (info) => info.getValue(),
    header: () => '실점',
  }),
  yearColumnHelper.accessor('hr', {
    cell: (info) => info.getValue(),
    header: () => '홈런',
  }),
] as ColumnDef<TTeamRankingYearTable>[];
