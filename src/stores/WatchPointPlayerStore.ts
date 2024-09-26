import { create } from 'zustand';

import {
  NaverWatchPointTopPlayerData,
  NaverWatchPointPitcherData,
} from '@/types/WatchPointType';

type PlayerData = {
  homeTopPlayer: NaverWatchPointTopPlayerData | null;
  awayTopPlayer: NaverWatchPointTopPlayerData | null;
  homePitcher: NaverWatchPointPitcherData | null;
  awayPitcher: NaverWatchPointPitcherData | null;
};

type PlayerDataStore = PlayerData & {
  setTopPlayers: (
    home: NaverWatchPointTopPlayerData,
    away: NaverWatchPointTopPlayerData,
  ) => void;
  setPitchers: (
    home: NaverWatchPointPitcherData,
    away: NaverWatchPointPitcherData,
  ) => void;
};

const usePlayerDataStore = create<PlayerDataStore>((set) => ({
  homeTopPlayer: null,
  awayTopPlayer: null,
  homePitcher: null,
  awayPitcher: null,
  setTopPlayers: (home, away) => {
    set({ homeTopPlayer: home, awayTopPlayer: away });
  },
  setPitchers: (home, away) => {
    set({ homePitcher: home, awayPitcher: away });
  },
}));

export { usePlayerDataStore };
