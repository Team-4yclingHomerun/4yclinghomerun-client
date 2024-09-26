import { useAxios } from '@/hooks/useAxios';
import {
  TPlayerRankingTopThree,
  TTopThreePlayerListData,
} from '@/types/PlayerRanking';

export const TopThreePlayerRankingApi = (listData: TTopThreePlayerListData) => {
  const { data, delayLoading, isError, error } = useAxios<
    { data: { list: [] } },
    TPlayerRankingTopThree[]
  >({
    url: listData.url,
    method: 'GET',
    initialData: { data: { list: [] } },
    shouldFetchOnMount: true,
    processData: (data) => {
      const field = listData.data;

      return data.data.list.map((player: TPlayerRankingTopThree, index) => ({
        rank: index + 1,
        playerName: player.playerName,
        playerPrvwImg: player.playerPrvwImg,
        [field]: player[field as keyof TPlayerRankingTopThree],
      })) as TPlayerRankingTopThree[];
    },
  });

  return { data, delayLoading, isError, error };
};
