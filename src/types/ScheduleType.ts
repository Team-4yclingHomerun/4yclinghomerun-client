export type ScheduleData = {
  place: string;
  date: string;
  time: string;
  homeTeamImage: string;
  awayTeamImage: string;
  homeTeamName: string;
  awayTeamName: string;
};

export type ScheduleItems = {
  schedules: ScheduleData[];
};
