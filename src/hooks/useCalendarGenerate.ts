const useCalendarGenerate = (year: number, month: number) => {
  const weekdays = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const firstDay = new Date(year, month - 1, 1).getDay();
  const daysInMonth = new Date(year, month, 0).getDate();

  // 달력에 표시할 날짜 배열 생성
  const days: (number | null)[][] = []; // 각 주에 대한 배열
  // 1부터 마지막 날짜까지의 배열 생성
  const flatDays: number[] = Array.from(
    { length: daysInMonth },
    (_, i) => i + 1,
  );

  let dayCounter = 1;
  // 최대 6주에 대한 반복
  for (let i = 0; i < 6; i++) {
    const week: (number | null)[] = Array(7).fill(null); // 각 주는 null로 초기화
    for (
      let j = i === 0 ? firstDay : 0; // 첫 주의 경우, 첫 주 시작 요일부터 시작 아니면 0부터 시작
      j < 7 && dayCounter <= daysInMonth;
      j++
    ) {
      week[j] = dayCounter++;
    }
    days.push(week);
    if (dayCounter > daysInMonth) break; // 날짜가 다 찼으면 종료
  }

  return { days, weekdays, flatDays };
};

export { useCalendarGenerate };
