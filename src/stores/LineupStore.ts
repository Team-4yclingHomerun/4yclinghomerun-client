import { create } from 'zustand';

import {
  WatchPointGameScoreType,
  WatchPointPlayerLineupType,
  PitchInfoType,
  TopPlayerInfoType,
} from '@/types/WatchPointType';

type LineupData = {
  homeLineup: WatchPointPlayerLineupType[];
  visitLineup: WatchPointPlayerLineupType[];
  gameInfo: WatchPointGameScoreType;
  homePitcherInfo: PitchInfoType;
  awayPitcherInfo: PitchInfoType;
  homeTopPlayerInfo: TopPlayerInfoType;
  awayTopPlayerInfo: TopPlayerInfoType;
};

type LineupStore = LineupData & {
  setLineupData: (data: LineupData) => void;
  isKtwiz: (isHome: boolean) => boolean;
};

export const useLineupStore = create<LineupStore>((set, get) => ({
  homeLineup: [],
  visitLineup: [],
  gameInfo: {} as WatchPointGameScoreType,
  homePitcherInfo: {} as PitchInfoType,
  awayPitcherInfo: {} as PitchInfoType,
  homeTopPlayerInfo: {} as TopPlayerInfoType,
  awayTopPlayerInfo: {} as TopPlayerInfoType,
  setLineupData: (data) => set(data),
  isKtwiz: (isHome) => {
    const { gameInfo } = get();
    return isHome ? gameInfo.home === 'KT' : gameInfo.visit === 'KT';
  },
}));
