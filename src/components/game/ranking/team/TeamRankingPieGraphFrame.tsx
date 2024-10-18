import { useAxios } from '@/hooks/useAxios';
import {
  APITeamRankingTeamVSTable,
  TTeamRankingTeamVSTable,
} from '@/types/TeamRanking';
import TeamRankingPieGraph from './TeamRankingPieGraph';
import PieGraphSkeleton from '../PieGraphSkeleton';
import ErrorAlert from '@/components/error/ErrorAlert';
import ErrorBoundary from '@/components/error/ErrorBoundary';

const TeamRankingPieGraphFrame = () => {
  const { data, delayLoading, isError, error } = useAxios<
    APITeamRankingTeamVSTable,
    TTeamRankingTeamVSTable[]
  >({
    url: '/game/rank/teamvs',
    method: 'GET',
    initialData: { data: { list: [] } },
    shouldFetchOnMount: true,
    processData: (data: APITeamRankingTeamVSTable) =>
      data.data.list.filter((item) => item.teamCode === 'KT'),
  });

  if (delayLoading) {
    return <PieGraphSkeleton />;
  }
  if (isError && error) {
    return (
      <ErrorAlert
        errorMsg={error}
        type="component"
        containerClassName="w-full p-20"
      />
    );
  }

  return (
    <ErrorBoundary
      fallback={
        <ErrorAlert
          errorMsg="페이지를 불러오는 중 오류가 발생했습니다."
          type="component"
          containerClassName="w-full p-20"
        />
      }
    >
      <div className="mx-auto grid grid-cols-3 gap-4">
        {Array.isArray(data) &&
          data.map((item) => (
            <TeamRankingPieGraph
              key={`${item.teamCode}-${item.vsTeamCode}-${item.teamName}-${item.teamCode}`}
              graphInfo={item}
            />
          ))}
      </div>
    </ErrorBoundary>
  );
};
export default TeamRankingPieGraphFrame;
