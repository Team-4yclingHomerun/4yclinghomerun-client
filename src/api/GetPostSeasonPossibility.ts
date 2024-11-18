import { useAxios } from '@/hooks/useAxios';

type TeamData = {
  'Adj.pyth': string;
  'PS odds': string;
  'pyth WL': string;
  기대득점: string;
  기대무승부: string;
  기대순위: string;
  기대승률: string;
  기대승리: string;
  기대실점: string;
  기대패배: string;
  팀: string;
};

type GetPostSeasonPossibilityResponse = {
  data: TeamData[];
};

const GetPostSeasonPossibility = () => {
  const { data, isLoading, isError, error } =
    useAxios<GetPostSeasonPossibilityResponse>({
      method: 'GET',
      url: '/game/oddsWinning',
      initialData: {
        data: [],
      },
      shouldFetchOnMount: true,
    });

  const ktPostSeasonPossibility = data.data.find((team) => team.팀 === 'KT')?.[
    'PS odds'
  ];

  return { isLoading, isError, error, ktPostSeasonPossibility };
};

export { GetPostSeasonPossibility };
