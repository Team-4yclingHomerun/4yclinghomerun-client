import { ResponsiveLine } from '@nivo/line';

import { TTeamRankingGraph } from '@/types/TeamRanking';
import { parseTeamRankingDate } from '@/utils/parseDate';
import {
  GraphCommonProperties,
  LineGraphProperties,
} from '@/data/GraphProperties';
import GraphTooltipTeamRank from './GraphTooltipTeamRank';

const TeamRankingBarGraph = ({
  graphInfo,
}: {
  graphInfo: TTeamRankingGraph[];
}) => {
  return (
    <ResponsiveLine
      {...GraphCommonProperties}
      {...LineGraphProperties}
      data={[
        {
          id: 'KT wiz 순위',
          data: graphInfo.map((item) => ({
            x: parseTeamRankingDate(item.date),
            y: item.rank,
          })),
        },
      ]}
      margin={{ top: 60, right: 50, bottom: 110, left: 70 }}
      curve="linear"
      xScale={{
        type: 'time',
        format: '%m월 %d일',
        useUTC: false,
        precision: 'day',
      }}
      axisLeft={{
        tickValues: 10,
        tickSize: 5,
        tickPadding: 10,
        tickRotation: 0,
        legendOffset: -40,
      }}
      axisBottom={{
        format: '%m월 %d일',
        tickRotation: -45,
        tickValues: 'every day',
        tickPadding: 10,
      }}
      yScale={{
        type: 'linear',
        min: 1,
        max: 10,
        reverse: true,
      }}
      pointLabel={(e) => e.data.y + '위'}
      tooltip={GraphTooltipTeamRank}
    />
  );
};
export default TeamRankingBarGraph;
