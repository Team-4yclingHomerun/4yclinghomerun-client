export const parseTeamRankingDate = (dateString: string) => {
  const year = dateString.slice(0, 4);
  const month = Number(dateString.slice(4, 6)) - 1;
  const day = dateString.slice(6, 8);
  return new Date(Number(year), Number(month), Number(day));
};

export function formatDateToKorean(date: Date): string {
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const formattedMonth = month < 10 ? `0${month}` : month;
  const formattedDay = day < 10 ? `0${day}` : day;

  return `${formattedMonth}월 ${formattedDay}일`;
}
