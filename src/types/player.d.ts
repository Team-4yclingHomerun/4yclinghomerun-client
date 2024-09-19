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
