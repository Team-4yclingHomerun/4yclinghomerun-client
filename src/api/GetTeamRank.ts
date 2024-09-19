import { useAxios } from '@/hooks/useAxios';

type KtWizTeamRankData = {
  game: number;
  rank: number;
  teamName: string;
  wldName: string;
  wra: string;
};

interface GetTeamRankResponse {
  data: {
    ktWizTeamRank: KtWizTeamRankData;
  };
}

const GetTeamRank = () => {
  const { data, isLoading, isError, error } = useAxios<GetTeamRankResponse>({
    url: '/game/ktwizteamrank',
    method: 'GET',
    initialData: {
      data: {
        ktWizTeamRank: {
          game: 0,
          rank: 0,
          teamName: '',
          wldName: '',
          wra: '',
        },
      },
    },
    shouldFetchOnMount: true,
  });

  return { data, isLoading, isError, error };
};

export { GetTeamRank };
