import {
  TKTPitcherRankingTable,
  TTotalPitcherRankingTable,
} from '@/types/PlayerRanking';
import { ColumnDef, createColumnHelper } from '@tanstack/react-table';

const totalColumnHelper = createColumnHelper<TTotalPitcherRankingTable>();

export const totalPitcherColumns = [
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
  totalColumnHelper.accessor('era', {
    cell: (info) => info.getValue(),
    header: '평균자책점',
    sortDescFirst: true,
  }),
  totalColumnHelper.accessor('gamenum', {
    cell: (info) => info.getValue(),
    header: '경기',
    sortDescFirst: true,
  }),
  totalColumnHelper.accessor('w', {
    cell: (info) => info.getValue(),
    header: '승',
    sortDescFirst: true,
  }),
  totalColumnHelper.accessor('l', {
    cell: (info) => info.getValue(),
    header: '패',
    sortDescFirst: true,
  }),
  totalColumnHelper.accessor('sv', {
    cell: (info) => info.getValue(),
    header: '세이브',
    sortDescFirst: true,
  }),
  totalColumnHelper.accessor('hold', {
    cell: (info) => info.getValue(),
    header: '홀드',
    sortDescFirst: true,
  }),
  totalColumnHelper.accessor('wra', {
    cell: (info) => info.getValue(),
    header: '승률',
    sortDescFirst: true,
  }),
  totalColumnHelper.accessor('inn', {
    cell: (info) => info.getValue(),
    header: '이닝',
    sortDescFirst: true,
  }),
  totalColumnHelper.accessor('hit', {
    cell: (info) => info.getValue(),
    header: '피안타',
    sortDescFirst: true,
  }),
  totalColumnHelper.accessor('hr', {
    cell: (info) => info.getValue(),
    header: '피홈런',
    sortDescFirst: true,
  }),
  totalColumnHelper.accessor('bb', {
    cell: (info) => info.getValue(),
    header: '볼넷',
    sortDescFirst: true,
  }),
  totalColumnHelper.accessor('hp', {
    cell: (info) => info.getValue(),
    header: '사구',
    sortDescFirst: true,
  }),
  totalColumnHelper.accessor('kk', {
    cell: (info) => info.getValue(),
    header: '탈삼진',
    sortDescFirst: true,
  }),
  totalColumnHelper.accessor('r', {
    cell: (info) => info.getValue(),
    header: '실점',
    sortDescFirst: true,
  }),
  totalColumnHelper.accessor('er', {
    cell: (info) => info.getValue(),
    header: '자책점',
    sortDescFirst: true,
  }),
] as ColumnDef<TTotalPitcherRankingTable>[];

const ktColumnHelper = createColumnHelper<TKTPitcherRankingTable>();

export const ktPitcherColumns = [
  ktColumnHelper.accessor('playerName', {
    cell: (info) => info.getValue(),
    header: '선수명',
  }),
  ktColumnHelper.accessor('teamName', {
    cell: (info) => info.getValue(),
    header: '팀명',
  }),
  ktColumnHelper.accessor('era', {
    cell: (info) => info.getValue(),
    header: '평균자책점',
    sortDescFirst: true,
  }),
  ktColumnHelper.accessor('gamenum', {
    cell: (info) => info.getValue(),
    header: '경기',
    sortDescFirst: true,
  }),
  ktColumnHelper.accessor('w', {
    cell: (info) => info.getValue(),
    header: '승',
    sortDescFirst: true,
  }),
  ktColumnHelper.accessor('l', {
    cell: (info) => info.getValue(),
    header: '패',
    sortDescFirst: true,
  }),
  ktColumnHelper.accessor('sv', {
    cell: (info) => info.getValue(),
    header: '세이브',
    sortDescFirst: true,
  }),
  ktColumnHelper.accessor('hold', {
    cell: (info) => info.getValue(),
    header: '홀드',
    sortDescFirst: true,
  }),
  ktColumnHelper.accessor('wra', {
    cell: (info) => info.getValue(),
    header: '승률',
    sortDescFirst: true,
  }),
  ktColumnHelper.accessor('inBa', {
    cell: (info) => info.getValue(),
    header: '이닝',
    sortDescFirst: true,
  }),
  ktColumnHelper.accessor('hit', {
    cell: (info) => info.getValue(),
    header: '피안타',
    sortDescFirst: true,
  }),
  ktColumnHelper.accessor('hr', {
    cell: (info) => info.getValue(),
    header: '피홈런',
    sortDescFirst: true,
  }),
  ktColumnHelper.accessor('bb', {
    cell: (info) => info.getValue(),
    header: '볼넷',
    sortDescFirst: true,
  }),
  ktColumnHelper.accessor('hp', {
    cell: (info) => info.getValue(),
    header: '사구',
    sortDescFirst: true,
  }),
  ktColumnHelper.accessor('kk', {
    cell: (info) => info.getValue(),
    header: '탈삼진',
    sortDescFirst: true,
  }),
  ktColumnHelper.accessor('r', {
    cell: (info) => info.getValue(),
    header: '실점',
    sortDescFirst: true,
  }),
  ktColumnHelper.accessor('er', {
    cell: (info) => info.getValue(),
    header: '자책점',
    sortDescFirst: true,
  }),
] as ColumnDef<TKTPitcherRankingTable>[];
