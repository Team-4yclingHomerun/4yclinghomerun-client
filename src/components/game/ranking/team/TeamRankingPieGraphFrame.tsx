import { TTeamRankingTeamVSTable } from '@/types/TeamRanking';
import TeamRankingPieGraph from './TeamRankingPieGraph';

const TeamRankingPieGraphFrame = ({
  graphInfo,
}: {
  graphInfo: TTeamRankingTeamVSTable[];
}) => {
  return (
    <div className="mx-auto grid grid-cols-3 gap-4">
      {graphInfo.map((item) => (
        <TeamRankingPieGraph
          key={`${item.teamCode}-${item.vsTeamCode}-${item.teamName}-${item.teamCode}`}
          graphInfo={item}
        />
      ))}
    </div>
  );
};
export default TeamRankingPieGraphFrame;
