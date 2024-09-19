// 박스스코어 스케줄 타입
export type BoxScoreGameScheduleType = {
  broadcast: string;
  cancelFlag: string; // '0' | '1'?
  crowdCn: number;
  endFlag: string;
  gameDate: number;
  gday: number;
  gmkey: string;
  gmonth: number;
  gtime: string;
  gyear: string;
  home: string;
  homeKey: string;
  homeLogo: string;
  hscore: number;
  stadium: string;
  stadiumKey: string;
  visit: string;
  visitKey: string;
  visitLogo: string;
  vscore: number;
};

// 박스스코어 scoreboard 타입
export type BoxScoreScoreBoardType = {
  ballfour: string;
  bhome: number;
  bhomeName: string;
  error: string;
  gameDate: number;
  hit: string;
  run: string;
  score1: string;
  score10: string;
  score11: string;
  score12: string;
  score2: string;
  score3: string;
  score4: string;
  score5: string;
  score6: string;
  score7: string;
  score8: string;
  score9: string;
};

// 주요 기록 타입
export type EtcGamesType = {
  gday: string;
  gmkey: string;
  how: string;
  result: string;
  seq: number;
};

// 타자 기록
export type BattersType = {
  accmAb: number; // accmHit / accmAb = 타율
  accmHit: number;
  changeinn: string;
  gday: string;
  gmkey: string;
  inn1: string;
  inn2: string;
  inn3: string;
  inn4: string;
  inn5: string;
  inn6: string;
  inn7: string;
  inn8: string;
  inn9: string;
  name: string;
  hit: number; // 안타
  rbi: number; // 타점
  run: number; // 득점
  ab: number; // 타수
  oneturn: string; // 타순
  tb: string;
  pcode: string;
  position: string;
};

// 투수 기록
export type PitchersType = {
  ab: number; // 타수
  accmEr: number; // 누적 자책점
  accmInn2: number; // 누적 이닝
  // 평균 자책점 계산 방법: (accmEr*9) / (accmInn2/3)
  changeinn: string; // 교체 이닝
  bbhp: number; // 사구
  bf: number; // 투구 수
  er: number; // 자책점
  game: number; // 경기 수
  gday: string;
  gmkey: string;
  hit: number; // 피안타
  hr: number; // 피홈런
  inn: number; // 이닝
  kk: number; // 탈삼진
  l: number; // 패배
  w: number; // 승리
  name: string; // 이름
  pa: number; // 타자 수
  pcode: string; // 선수 코드
  s: number; // 세이브
  r: number; // 실점
  wls: 'W' | 'L' | 'S' | 'H' | null; // 승리, 패배, 세이브, 홀드
};
