import { ResponsiveBar } from '@nivo/bar';

import { TCrowdRankingData } from '@/types/GameCrowdRanking';
import { GraphCommonProperties } from '@/data/GraphProperties';
import { getGraphMaxValue } from '@/utils/parseNumber';
import GraphTooltipCrowdRank from './GraphTooltipCrowdRank';

const GameCrowdRankingGraph = ({
  graphInfo,
}: {
  graphInfo: TCrowdRankingData[];
}) => {
  const maxCrowd = Math.max(...graphInfo.map((item) => item.crowd));
  const maxValue = getGraphMaxValue(maxCrowd);
  return (
    <ResponsiveBar
      {...GraphCommonProperties}
      data={graphInfo.map((item) => ({
        teamName: item.teamName,
        crowd: item.crowd,
      }))}
      keys={['crowd']}
      indexBy="teamName"
      colors={(d) => (d.data.teamName === 'KT' ? '#d60c0c' : '#717781')}
      margin={{ top: 60, right: 50, left: 120, bottom: 50 }}
      maxValue={maxValue}
      minValue={0}
      valueFormat={(value) =>
        `${new Intl.NumberFormat('en-US').format(value)}명`
      }
      axisLeft={{
        format: (value) => new Intl.NumberFormat('en-US').format(value),
        ticksPosition: 'before',
      }}
      padding={0.2}
      tooltip={GraphTooltipCrowdRank}
    />
  );
};
export default GameCrowdRankingGraph;
