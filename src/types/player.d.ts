export interface ICoachListReponse {
  data: {
    list: TCoach[];
  };
}

export type TCoach = {
  backnum: string;
  birth: string; // "YYYY.MM.DD" 형식
  career: string;
  gyear: string; // 연도
  height: string; // "180 cm" 형식
  heightWeight: string; // "180 cm,78 kg" 형식
  hittype: string; // "우언우타"
  mobilePlayerImg1: string; // 이미지 URL
  mobilePlayerImg2: string; // 이미지 URL
  orderSeq: string; // 순서
  pcode: string; // 선수 코드
  playerName: string; // 선수 이름
  playerPrvwImg: string; // 미리보기 이미지 URL
  playerPrvwImg2: string; // 미리보기 이미지 URL
  playerPrvwImg3: string; // 미리보기 이미지 URL
  position: string; // 포지션
  teamCode: string; // 팀 코드
  teamName: string; // 팀 이름
  weight: string; // "78 kg" 형식
};

export interface ICoachDetailReponse {
  data: {
    coachstep: TCoachDetail;
  };
}

export type TCoachDetail = {
  backnum: string;
  birth: string;
  career: string;
  career2: string;
  engName: string;
  gyear: string;
  height: string;
  heightWeight: string;
  hittype: string;
  mobilePlayerImg1: string;
  mobilePlayerImg2: string;
  pcode: string;
  playerName: string;
  playerPrvwImg: string;
  playerPrvwImg2: string;
  playerPrvwImg3: string;
  position: string;
  teamCode: string;
  teamName: string;
  weight: string;
};

export interface IPlayerListResponse {
  data: TPlayer[];
}

export type TPlayer = {
  backnum: string; // 등번호
  energybar: number; // 에너지 바 점수
  energybarName: string; // 에너지 바 이름
  gyear: string; // 연도
  hasFanpage: string; // 팬페이지 여부 ("Y" 또는 "N")
  hittype: string; // 타격 유형
  mobilePlayerImg: string; // 모바일 플레이어 이미지 URL
  mobilePlayerImg1: string; // 추가 모바일 이미지 URL
  mobilePlayerImg2: string; // 추가 모바일 이미지 URL
  pcode: string; // 선수 코드
  playerName: string; // 선수 이름
  playerPrvwImg: string; // 미리보기 이미지 URL
  position: string; // 포지션
  rank: number; // 순위
  rankName: string; // 순위 이름
  teamName: string; // 팀 이름
};

export interface IPitcherDetailReponse {
  data: {
    gameplayer: TPlayerDetail; // 선수 정보
    recentgamerecordlist: TPitcherGameRecord[]; // 최근 경기 기록
    recentgamerecordlistfutures: TPitcherGameRecord[]; // 미래 경기 기록
    seasonsummary: TPitcherSeasonSummary; // 시즌 요약
    seasonsummaryfutures: TPitcherSeasonSummary; // 미래 시즌 요약
    yearrecordlist: TPitcherYearRecord[]; // 연도별 기록
  };
}

export type TPlayerDetail = {
  backnum: string; // 등번호
  birth: string; // 생년월일
  bloodGroups: string; // 혈액형
  bornPlace: string; // 출생지
  career: string; // 경력
  career2: string; // 추가 경력
  debutYear: string; // 데뷔 연도
  energybar: number; // 에너지 바 점수
  energybarName: string; // 에너지 바 이름
  engName: string; // 영어 이름
  gyear: string; // 현재 연도
  hasFanpage: string; // 팬페이지 여부
  height: string; // 키
  hittype: string; // 타격 유형
  mobilePlayerImg: string; // 모바일 선수 이미지
  mobilePlayerImg1: string; // 모바일 선수 이미지 1
  mobilePlayerImg2: string; // 모바일 선수 이미지 2
  money: string; // 연봉
  pcode: string; // 선수 코드
  playerName: string; // 선수 이름
  playerPrvwImg: string; // 선수 미리보기 이미지
  playerPrvwImg1: string; // 선수 미리보기 이미지 1
  playerPrvwImg2: string; // 선수 미리보기 이미지 2
  playerPrvwImg3: string; // 선수 미리보기 이미지 3
  position: string; // 포지션
  position2: string; // 추가 포지션
  promise: string; // 약속
  rank: number; // 순위
  rankName: string; // 순위 이름
  teamCode: string; // 팀 코드
  teamName: string; // 팀 이름
  weight: string; // 몸무게
};

export type TPitcherGameRecord = {
  bb: number; // 볼넷
  displayDate: string; // 경기 날짜
  er: number; // 자책점
  hit: number; // 안타
  hp: number; // 희생플라이
  hr: number; // 홈런
  inn2: number; // 이닝 수
  innDisplay: string; // 이닝 표현
  kk: number; // 삼진
  matchTeamCode: string; // 상대 팀 코드
  matchTeamName: string; // 상대 팀 이름
  oavg: string; // 상대 타율
  pa: number; // 타석 수
  r: number; // 점수
  sv: number; // 세이브
  wl: string; // 승패 기록
  wls: string; // 승패 상태
};

export type TPitcherSeasonSummary = {
  babip: string; // BABIP
  bb: number; // 볼넷 수
  bf: number; // 상대 타자 수
  bk: number; // 보크 수
  bs: number; // 블론 세이브 수
  er: number; // 자책점
  era: string; // 평균 자책점
  err: number; // 에러 수
  fip: string; // FIP
  fo: number; // 땅볼 수
  gamenum: number; // 경기 수
  go: number; // 땅볼 아웃 수
  gyear: string; // 시즌 연도
  havg: string; // 피안타율
  hit: number; // 안타 수
  hold: number; // 홀드 수
  hp: number; // 희생플라이 수
  hr: number; // 홈런 수
  ib: number; // 고의사구 수
  inn2: number; // 이닝 수
  innDisplay: string; // 이닝 표현
  kbb: string; // 삼진 대비 볼넷 비율
  kk: number; // 삼진 수
  l: number; // 패배 수
  oavg: string; // 상대 타율
  pcode: string; // 선수 코드
  playerName: string; // 선수 이름
  qs: number; // 퀄리티 스타트 수
  qsPlus: number; // 퀄리티 스타트 플러스 수
  r: number; // 점수
  ravg: string; // 점수 평균
  sf: number; // 희생 플라이 수
  sh: number; // 희생 번트 수
  sho: number; // 완봉 수
  start: number; // 선발 수
  sv: number; // 세이브 수
  svo: number; // 세이브 기회 수
  tugucount: number; // 투구 수
  turfSave: number; // 턴 세이브 수
  w: number; // 승리 수
  wCg: number; // 완봉 승 수
  war: string; // WAR
  whip: string; // WHIP
  winShares: string; // 승리 공유 수
  wl: string; // 승패 기록
  wp: number; // 워크 수
  wra: string; // WRA
};

export type TPitcherYearRecord = {
  bb: number; // 볼넷 수
  bf: number; // 상대 타자 수
  er: number; // 자책점
  era: string; // 평균 자책점
  gamenum: number; // 경기 수
  gyear: string; // 시즌 연도
  hit: number; // 안타 수
  hold: number; // 홀드 수
  hp: number; // 희생플라이 수
  hr: number; // 홈런 수
  inn2: number; // 이닝 수
  innDisplay: string; // 이닝 표현
  kk: number; // 삼진 수
  l: number; // 패배 수
  r: number; // 점수
  sho: number; // 완봉 수
  sv: number; // 세이브 수
  teamCode: string; // 팀 코드
  teamName: string; // 팀 이름
  w: number; // 승리 수
  wCg: number; // 완투 승 수
  wra: string; // WRA
};

export interface IHitterDetailReponse {
  data: {
    gameplayer: TPlayerDetail; // 선수 정보
    recentgamerecordlist: THitterGameRecord[]; // 최근 경기 기록
    recentgamerecordlistfutures: THitterGameRecord[]; // 미래 경기 기록
    seasonsummary: THitterSeasonSummary; // 시즌 요약
    seasonsummaryfutures: THitterSeasonSummary; // 미래 시즌 요약
    yearrecordlist: THittrtYearRecord[]; // 연도별 기록
  };
}

export type THitterGameRecord = {
  ab: number; // 타수
  bb: number; // 볼넷
  bra: string; // 타율
  cs: number; // 도루 실패
  displayDate: string; // 경기 날짜 (표시용)
  gd: number; // 경기 일자
  h2: number; // 2루타
  h3: number; // 3루타
  hit: number; // 안타 수
  hp: number; // 몸에 맞는 볼
  hr: number; // 홈런 수
  hra: string; // 홈런 비율
  kk: number; // 삼진 수
  matchTeamCode: string; // 상대 팀 코드
  matchTeamName: string; // 상대 팀 이름
  rbi: number; // 타점
  run: number; // 득점
  sb: number; // 도루 성공
};

// Season Summary 타입 정의
export type THitterSeasonSummary = {
  ab: number; // 타수
  babip: string; // BABIP (타율 기반 지표)
  bb: number; // 볼넷
  bbkk: string; // 볼넷 대 삼진 비율
  bra: string; // 타율
  cs: number; // 도루 실패
  finalHit: number; // 최종 안타 수
  gamenum: number; // 경기 수
  gd: number; // 경기 일자
  gyear: string; // 경기 연도
  h2: number; // 2루타
  h3: number; // 3루타
  hit: number; // 안타 수
  hp: number; // 몸에 맞는 볼
  hr: number; // 홈런 수
  hra: string; // 홈런 비율
  ib: number; // 고의 볼넷 수
  kk: number; // 삼진 수
  ops: string; // OPS (출루율 + 장타율)
  opsPlus: string; // OPS+ (리그 평균 대비)
  pa: number; // 타석 수
  pcode: string; // 선수 코드
  rbi: number; // 타점
  run: number; // 득점
  sb: number; // 도루 성공
  sbTryCn: number; // 도루 시도 수
  sba: string; // 도루 성공 비율
  sf: number; // 희생 플라이
  sh: number; // 희생 번트
  slg: string; // SLG (슬러그ging 비율)
  spHra: string; // 스프링 홈런 비율
  war: string; // WAR (대체 선수 대비 승리 기여도)
  winShares: string; // Win Shares
  woba: string; // wOBA (가중 출루율)
  wraa: string; // wRAA (가중 득점 기여도)
  xbhrun: string; // 2루타 및 3루타 수
};

export type THittrtYearRecord = {
  ab: number; // 타수
  bb: number; // 볼넷
  bra: string; // 타율
  cs: number; // 도루 실패
  gamenum: number; // 경기 수
  gd: number; // 경기 일자
  gyear: string; // 경기 연도
  h2: number; // 2루타
  h3: number; // 3루타
  hit: number; // 안타 수
  hp: number; // 몸에 맞는 볼
  hr: number; // 홈런 수
  hra: string; // 홈런 비율
  kk: number; // 삼진 수
  rbi: number; // 타점
  run: number; // 득점
  sb: number; // 도루 성공
  slg: string; // SLG (슬러그ging 비율)
  teamCode: string; // 팀 코드
  teamName: string; // 팀 이름
};

export interface ICheerListReponse {
  data: {
    list: TCheer[];
  };
}

export type TCheer = {
  delYn: string; // 삭제 여부 ("Y" 또는 "N")
  imgPath: string; // 이미지 경로
  imgPrvwPath: string; // 미리보기 이미지 경로
  leaderBirthDay: string; // 생일 ("YYYY.MM.DD" 형식)
  leaderBloodGroups: string; // 혈액형
  leaderCareer: string; // 경력
  leaderEngName: string; // 영어 이름
  leaderGreeting: string; // 인사말
  leaderHeight: string; // 키 (cm)
  leaderHobby: string; // 취미
  leaderLikePlayer: string; // 좋아하는 선수
  leaderMotto: string; // 좌우명
  leaderName: string; // 이름
  leaderNickName: string; // 별명
  leaderPosition: string; // 포지션
  leaderSeq: number; // 순서
  leaderType: string; // 리더 타입
  listImgPath: string; // 리스트 이미지 경로
  regDttm: number; // 등록 날짜 (timestamp)
  regr: string; // 등록자
  snsId: string; // SNS ID
  snsMemberId: string; // SNS 회원 ID
  thumbOffImgPath: string; // 썸네일 오프 이미지 경로
  thumbOnImgPath: string; // 썸네일 온 이미지 경로
  titleImgPath: string; // 타이틀 이미지 경로
  updDttm: number; // 업데이트 날짜 (timestamp)
  updr: string; // 수정자
  webviewDetailImgPath: string; // 웹뷰 상세 이미지 경로
  webviewListImgPath: string; // 웹뷰 리스트 이미지 경로
};

export type TCard = TCoach & TPlayer & TCheer & {};
export type TProfile = TCoachDetail & TPlayerDetail & {};
