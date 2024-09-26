import { createColumnHelper, ColumnDef } from '@tanstack/react-table';

import { TTeamRankingPitcherTable } from '@/types/TeamRanking';

const pitcherColumnHelper = createColumnHelper<TTeamRankingPitcherTable>();

export const teamRankingPitcherColumns = [
  pitcherColumnHelper.accessor('teamName', {
    cell: (info) => info.getValue(),
    header: () => '팀명',
  }),
  pitcherColumnHelper.accessor('sh', {
    cell: (info) => info.getValue(),
    header: () => '희타',
  }),
  pitcherColumnHelper.accessor('sf', {
    cell: (info) => info.getValue(),
    header: () => '희비',
  }),
  pitcherColumnHelper.accessor('bb', {
    cell: (info) => info.getValue(),
    header: () => '볼넷',
  }),
  pitcherColumnHelper.accessor('ib', {
    cell: (info) => info.getValue(),
    header: () => '고의4구',
  }),
  pitcherColumnHelper.accessor('bbhp', {
    cell: (info) => info.getValue(),
    header: () => '사구',
  }),
  pitcherColumnHelper.accessor('kk', {
    cell: (info) => info.getValue(),
    header: () => '탈삼진',
  }),
  pitcherColumnHelper.accessor('bk', {
    cell: (info) => info.getValue(),
    header: () => '보크',
  }),
  pitcherColumnHelper.accessor('r', {
    cell: (info) => info.getValue(),
    header: () => '실점',
  }),
  pitcherColumnHelper.accessor('er', {
    cell: (info) => info.getValue(),
    header: () => '자책점',
  }),
  pitcherColumnHelper.accessor('wp', {
    cell: (info) => info.getValue(),
    header: () => '폭투',
  }),
  pitcherColumnHelper.accessor('wra', {
    cell: (info) => info.getValue(),
    header: () => '승률',
  }),
  pitcherColumnHelper.accessor('bs', {
    cell: (info) => info.getValue(),
    header: () => '블론세이브',
  }),
  pitcherColumnHelper.accessor('whip', {
    cell: (info) => info.getValue(),
    header: () => 'WHIP',
  }),
  pitcherColumnHelper.accessor('oavg', {
    cell: (info) => info.getValue(),
    header: () => '피안타율',
  }),
  pitcherColumnHelper.accessor('qs', {
    cell: (info) => info.getValue(),
    header: () => 'QS',
  }),
] as ColumnDef<TTeamRankingPitcherTable>[];
