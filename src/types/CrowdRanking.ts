export type TCrowdRankingSelectYearProps = {
  selectedYear: number;
  isOpenSelectYears: boolean;
  years: number[];
  handlePreviousYear: () => void;
  handleNextYear: () => void;
  handleOpenSelectYears: () => void;
  handleYearClick: (year: number) => void;
};

export type TCrowdRankingGraph = {
  crowd: number;
  teamName: string;
};

export interface TCrowdRankingTable extends TCrowdRankingData {
  rank: number;
}

export type APICrowdRankingData = {
  data: { list: TCrowdRankingData[] };
};

export interface TCrowdRankingData {
  crowd: number;
  game: number;
  teamCode: string;
  teamName: string;
}
