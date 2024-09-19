export type TGameType = {
  [key: number]: {
    team: string;
    time: string;
    home: boolean;
    result?: '승' | '패' | '무' | undefined;
    score?: string;
  };
};
