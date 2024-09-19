import { TeamInfo } from './TeamInfo';
import { TGameType } from '@/types/GameType';

const gameData: TGameType = {
  4: { team: 'LOTTE', time: '18:30', home: false, result: '패', score: '5:7' },
  5: { team: 'LOTTE', time: '18:30', home: false, result: '승', score: '12:2' },
  6: { team: 'NC', time: '18:30', home: false, result: '승', score: '9:3' },
  7: { team: 'DOOSAN', time: '17:00', home: true, result: '패', score: '12:2' },
  10: { team: 'NC', time: '18:30', home: true, result: '승', score: '8:11' },
  11: { team: 'NC', time: '18:30', home: true },
  12: { team: 'NC', time: '18:30', home: true },
  14: { team: 'DOOSAN', time: '17:00', home: false },
  16: { team: 'KIA', time: '14:00', home: true },
  17: { team: 'KIWOOM', time: '14:00', home: false },
  18: { team: 'SAMSUNG', time: '14:00', home: true },
  19: { team: 'SAMSUNG', time: '18:30', home: true },
  21: { team: 'SSG', time: '17:00', home: true },
  22: { team: 'SSG', time: '14:00', home: true },
  24: { team: 'LOTTE', time: '18:30', home: true },
  27: { team: 'KIWOOM', time: '18:30', home: true },
  28: { team: 'KIWOOM', time: '17:00', home: true },
};

const getTeamInfo = (teamCode: string) => {
  return TeamInfo.find((team) => team.code === teamCode);
};

export { gameData, getTeamInfo };
