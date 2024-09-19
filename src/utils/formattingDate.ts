type DateOptions = {
  year: 'numeric';
  month: '2-digit';
  day: '2-digit';
  hour?: '2-digit';
  minute?: '2-digit';
  second?: '2-digit';
  hour12?: boolean;
};

/**
 * 밀리초 단위 타임스탬프를 한국 날짜 형식으로 변환하는 함수
 * @param {number} updDttm - 밀리초 단위 타임스탬프
 * @param {boolean} includeTime - 시간 포함 여부 (기본값: false)
 * @returns {string} - 변환된 날짜 문자열
 */

function formatTimeStamp(
  updDttm: number,
  includeTime: boolean = false,
): string {
  const date = new Date(updDttm);
  const options: DateOptions = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  };

  // 시간 포함 옵션
  if (includeTime) {
    options.hour = '2-digit';
    options.minute = '2-digit';
    options.second = '2-digit';
    options.hour12 = false; // 24시간 형식
  }

  let dateString = date.toLocaleDateString('ko-KR', options);

  if (dateString.endsWith('.')) {
    dateString = dateString.slice(0, -1);
  }

  if (includeTime) {
    const timeString = date.toLocaleTimeString('ko-KR', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    });
    return `${dateString} ${timeString}`;
  }

  return dateString;
}

export { formatTimeStamp };
