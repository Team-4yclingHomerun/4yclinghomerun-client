import { useAxios } from '@/hooks/useAxios';

import {
  APITeamRankingBatterTable,
  APITeamRankingGraph,
  APITeamRankingPitcherTable,
  APITeamRankingYearTable,
  TTeamRankingBatterTable,
  TTeamRankingGraph,
  TTeamRankingPitcherTable,
  TTeamRankingYearTable,
} from '@/types/TeamRanking';
import TeamRankingBarGraph from '@/components/game/ranking/team/TeamRankingBarGraph';
import GameRankingSectionFrame from '@/components/game/GameRankingSectionFrame';
import GameRankingTable from '@/components/game/ranking/GameRankingTable';
import TeamRankingPieGraphFrame from '@/components/game/ranking/team/TeamRankingPieGraphFrame';
import SectionHeading from '@/components/common/typography/SectionHeading';
import { teamRankingPitcherColumns } from '@/data/TeamRankingPitcherTableData';
import { teamRankingYearColumns } from '@/data/TeamRankingYearTableData';
import { teamRankingBatterColumns } from '@/data/TeamRankingBatterTableData';
import BarGraphSkeleton from '@/components/game/ranking/BarGraphSkeleton';
import ErrorAlert from '@/components/error/ErrorAlert';
import ErrorBoundary from '@/components/error/ErrorBoundary';

const TeamRankingPage = () => {
  const {
    data: TeamRankingGraphData,
    delayLoading: isGraphLoading,
    isError: isGraphError,
    error: graphError,
  } = useAxios<APITeamRankingGraph, TTeamRankingGraph[]>({
    url: '/game/rank/periodteamrank',
    method: 'GET',
    initialData: { data: { list: [] } },
    shouldFetchOnMount: true,
    processData: (data: APITeamRankingGraph) => data.data.list,
  });

  const {
    data: TeamRankingYearTableData,
    delayLoading: isYearTableLoading,
    isError: isYearTableError,
    error: yearTableError,
  } = useAxios<APITeamRankingYearTable, TTeamRankingYearTable[]>({
    url: '/game/rank/teamrankbyyear',
    method: 'GET',
    initialData: { data: { list: [] } },
    shouldFetchOnMount: true,
    processData: (data: APITeamRankingYearTable) => data.data.list,
  });

  const {
    data: TeamRankingPitcherTableData,
    delayLoading: isPitcherTableLoading,
    isError: isPitcherTableError,
    error: pitcherTableError,
  } = useAxios<APITeamRankingPitcherTable, TTeamRankingPitcherTable[]>({
    url: '/game/rank/pitching',
    method: 'GET',
    initialData: { data: { list: [] } },
    shouldFetchOnMount: true,
    processData: (data: APITeamRankingPitcherTable) => data.data.list,
  });

  const {
    data: TeamRankingBatterTableData,
    delayLoading: isBatterTableLoading,
    isError: isBatterTableError,
    error: batterTableError,
  } = useAxios<APITeamRankingBatterTable, TTeamRankingBatterTable[]>({
    url: '/game/rank/batting',
    method: 'GET',
    initialData: { data: { list: [] } },
    shouldFetchOnMount: true,
    processData: (data: APITeamRankingBatterTable) => data.data.list,
  });

  return (
    <ErrorBoundary
      fallback={
        <ErrorAlert
          type="page"
          errorMsg="페이지를 불러오는 중 오류가 발생했습니다."
        />
      }
    >
      <div className="flex flex-col gap-10">
        <GameRankingSectionFrame
          title="2024 시즌 팀 순위"
          height="h-[50vh]"
          type="graph"
        >
          {isGraphLoading && <BarGraphSkeleton />}
          {isGraphError && graphError ? (
            <ErrorAlert
              type="component"
              errorMsg={graphError}
              containerClassName="h-full"
            />
          ) : (
            Array.isArray(TeamRankingGraphData) && (
              <TeamRankingBarGraph graphInfo={TeamRankingGraphData} />
            )
          )}
        </GameRankingSectionFrame>
        <GameRankingTable<TTeamRankingYearTable>
          title="2024 시즌 팀 기록"
          tableInfo={TeamRankingYearTableData as TTeamRankingYearTable[]}
          columns={teamRankingYearColumns}
          isLoading={isYearTableLoading}
          isError={isYearTableError}
          error={yearTableError}
        />
        <GameRankingTable<TTeamRankingPitcherTable>
          title="2024 시즌 팀 투수 기록"
          tableInfo={TeamRankingPitcherTableData as TTeamRankingPitcherTable[]}
          columns={teamRankingPitcherColumns}
          isLoading={isPitcherTableLoading}
          isError={isPitcherTableError}
          error={pitcherTableError}
        />
        <GameRankingTable<TTeamRankingBatterTable>
          title="2024 시즌 팀 타자 기록"
          tableInfo={TeamRankingBatterTableData as TTeamRankingBatterTable[]}
          columns={teamRankingBatterColumns}
          isLoading={isBatterTableLoading}
          isError={isBatterTableError}
          error={batterTableError}
        />
        <div>
          <SectionHeading title="2024 시즌 팀 간 승패" />
          <TeamRankingPieGraphFrame />
        </div>
      </div>
    </ErrorBoundary>
  );
};
export default TeamRankingPage;
