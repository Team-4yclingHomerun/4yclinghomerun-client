const GuidelinesModalContent = () => {
  return (
    <>
      <header className="flex items-center justify-between rounded-t-md bg-kt-red-2 py-2 pl-5 pr-2 text-white">
        <p className="text-lg font-bold">커뮤니티 운영방침</p>
      </header>
      <main className="h-96 overflow-auto px-5 py-3 text-black">
        <strong>
          쾌적한 게시판 이용을 위해 서비스 이용약관 및 운영정책에 따라 아래와
          같은 채팅 메시지는 검토 후 삭제/제재의 대상임을 확인해주세요.
        </strong>
        <ul className="px-5 py-3">
          <li className="list-decimal">
            욕설을 연상시키는 단어를 포함 모든 글
          </li>
          <p>
            초성 욕설, 개xx 등의 블러처리 욕설을 포함한 모든 범위의 “욕설단어
          </p>
          <li className="list-decimal">과격한 표현이 포함된 게시글</li>
          <p>
            죽여버린다, 패고싶다 등 자극적이고 공격적인 내용 편파적인 내용(유저
            선동, 선수 차별 등)으로 타인에게 불쾌감을 주는 경우
          </p>
          <li className="list-decimal">광고 및 영리성 게시글 </li>
          <p>
            구단과 관계없는 내용의 광고글 및 개인의 영리를 취하는 판매글 (위잽
            내에서의 사전주차 및 티켓 양도, 판매글 등 금지)
          </p>
          <li className="list-decimal">신고글 처리</li>
          <p>
            신고 게시글은 100% 검토대상이며, 검토 후 경고/삭제/이용정지 등의
            제재여부에 따라 조치 경고/삭제 10회 이상 누적 시 운영정책에 따라
            이용정지(단기/영구) 가능
          </p>
        </ul>
        <strong>
          전 연령층이 사용하는 커뮤니티기에, 위즈팬 여러분들의 협조 부탁드립니다
        </strong>
      </main>
    </>
  );
};
export default GuidelinesModalContent;
