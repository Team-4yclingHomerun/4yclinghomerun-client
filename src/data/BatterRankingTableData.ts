import { ColumnDef, createColumnHelper } from '@tanstack/react-table';

import {
  TKTBatterRankingTable,
  TTotalBatterRankingTable,
} from '@/types/PlayerRanking';

const totalColumnHelper = createColumnHelper<TTotalBatterRankingTable>();

export const totalBatterColumns = [
  totalColumnHelper.display({
    id: 'rank',
    header: '순위',
    cell: (info) => info.row.index + 1,
  }),
  totalColumnHelper.accessor('playerName', {
    cell: (info) => info.getValue(),
    header: '선수명',
  }),
  totalColumnHelper.accessor('teamName', {
    cell: (info) => info.getValue(),
    header: '팀명',
  }),
  totalColumnHelper.accessor('hra', {
    cell: (info) => info.getValue(),
    header: '타율',
  }),
  totalColumnHelper.accessor('gamenum', {
    cell: (info) => info.getValue(),
    header: '경기',
  }),
  totalColumnHelper.accessor('ab', {
    cell: (info) => info.getValue(),
    header: '타수',
  }),
  totalColumnHelper.accessor('run', {
    cell: (info) => info.getValue(),
    header: '득점',
  }),
  totalColumnHelper.accessor('hit', {
    cell: (info) => info.getValue(),
    header: '안타',
  }),
  totalColumnHelper.accessor('h2', {
    cell: (info) => info.getValue(),
    header: '2루타',
  }),
  totalColumnHelper.accessor('h3', {
    cell: (info) => info.getValue(),
    header: '3루타',
  }),
  totalColumnHelper.accessor('hr', {
    cell: (info) => info.getValue(),
    header: '홈런',
  }),
  totalColumnHelper.accessor('rbi', {
    cell: (info) => info.getValue(),
    header: '타점',
  }),
  totalColumnHelper.accessor('sb', {
    cell: (info) => info.getValue(),
    header: '도루',
  }),
  totalColumnHelper.accessor('bb', {
    cell: (info) => info.getValue(),
    header: '볼넷',
  }),
  totalColumnHelper.accessor('hp', {
    cell: (info) => info.getValue(),
    header: '사구',
  }),
  totalColumnHelper.accessor('kk', {
    cell: (info) => info.getValue(),
    header: '삼진',
  }),
  totalColumnHelper.accessor('slg', {
    cell: (info) => info.getValue(),
    header: '장타율',
  }),
  totalColumnHelper.accessor('bra', {
    cell: (info) => info.getValue(),
    header: '출루율',
  }),
] as ColumnDef<TTotalBatterRankingTable>[];

const ktColumnHelper = createColumnHelper<TKTBatterRankingTable>();

export const ktBatterColumns = [
  ktColumnHelper.accessor('playerName', {
    header: '선수명',
    cell: (info) => info.getValue(),
  }),
  ktColumnHelper.accessor('teamName', {
    header: '팀명',
    cell: (info) => info.getValue(),
  }),
  ktColumnHelper.accessor('hra', {
    header: '타율',
    cell: (info) => Number(info.getValue()).toFixed(3),
  }),
  ktColumnHelper.accessor('gamenum', {
    header: '경기',
    cell: (info) => info.getValue(),
  }),
  ktColumnHelper.accessor('ab', {
    header: '타수',
    cell: (info) => info.getValue(),
  }),
  ktColumnHelper.accessor('run', {
    header: '득점',
    cell: (info) => info.getValue(),
  }),
  ktColumnHelper.accessor('hit', {
    header: '안타',
    cell: (info) => info.getValue(),
  }),
  ktColumnHelper.accessor('h2', {
    header: '2루타',
    cell: (info) => info.getValue(),
  }),
  ktColumnHelper.accessor('h3', {
    header: '3루타',
    cell: (info) => info.getValue(),
  }),
  ktColumnHelper.accessor('hr', {
    header: '홈런',
    cell: (info) => info.getValue(),
  }),
  ktColumnHelper.accessor('rbi', {
    header: '타점',
    cell: (info) => info.getValue(),
  }),
  ktColumnHelper.accessor('sb', {
    header: '도루',
    cell: (info) => info.getValue(),
  }),
  ktColumnHelper.accessor('bb', {
    header: '볼넷',
    cell: (info) => info.getValue(),
  }),
  ktColumnHelper.accessor('hp', {
    header: '사구',
    cell: (info) => info.getValue(),
  }),
  ktColumnHelper.accessor('kk', {
    header: '삼진',
    cell: (info) => info.getValue(),
  }),
  ktColumnHelper.accessor('slg', {
    header: '장타율',
    cell: (info) => Number(info.getValue()).toFixed(3),
  }),
  ktColumnHelper.accessor('bra', {
    header: '출루율',
    cell: (info) => Number(info.getValue()).toFixed(3),
  }),
] as ColumnDef<TKTBatterRankingTable>[];
