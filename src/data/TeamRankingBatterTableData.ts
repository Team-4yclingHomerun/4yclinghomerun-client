import { createColumnHelper, ColumnDef } from '@tanstack/react-table';
import { TTeamRankingBatterTable } from '@/types/TeamRanking';

const batterColumnHelper = createColumnHelper<TTeamRankingBatterTable>();

export const teamRankingBatterColumns = [
  batterColumnHelper.accessor('teamName', {
    cell: (info) => info.getValue(),
    header: () => '팀명',
  }),
  batterColumnHelper.accessor('hit', {
    cell: (info) => info.getValue(),
    header: () => '안타',
  }),
  batterColumnHelper.accessor('h2', {
    cell: (info) => info.getValue(),
    header: () => '2루타',
  }),
  batterColumnHelper.accessor('h3', {
    cell: (info) => info.getValue(),
    header: () => '3루타',
  }),
  batterColumnHelper.accessor('hr', {
    cell: (info) => info.getValue(),
    header: () => '홈런',
  }),
  batterColumnHelper.accessor('rbi', {
    cell: (info) => info.getValue(),
    header: () => '타점',
  }),
  batterColumnHelper.accessor('sb', {
    cell: (info) => info.getValue(),
    header: () => '도루',
  }),
  batterColumnHelper.accessor('bb', {
    cell: (info) => info.getValue(),
    header: () => '볼넷',
  }),
  batterColumnHelper.accessor('ib', {
    cell: (info) => info.getValue(),
    header: () => '고의4구',
  }),
  batterColumnHelper.accessor('hp', {
    cell: (info) => info.getValue(),
    header: () => '사구',
  }),
  batterColumnHelper.accessor('kk', {
    cell: (info) => info.getValue(),
    header: () => '삼진',
  }),
  batterColumnHelper.accessor('gd', {
    cell: (info) => info.getValue(),
    header: () => '병살',
  }),
  batterColumnHelper.accessor('slg', {
    cell: (info) => info.getValue(),
    header: () => '장타율',
  }),
  batterColumnHelper.accessor('bra', {
    cell: (info) => info.getValue(),
    header: () => '출루율',
  }),
  batterColumnHelper.accessor('err', {
    cell: (info) => info.getValue(),
    header: () => '실책',
  }),
  batterColumnHelper.accessor('ops', {
    cell: (info) => info.getValue(),
    header: () => 'OPS',
  }),
  batterColumnHelper.accessor('hra', {
    cell: (info) => info.getValue(),
    header: () => '타율',
  }),
] as ColumnDef<TTeamRankingBatterTable>[];
