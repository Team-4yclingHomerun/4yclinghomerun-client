import { PointTooltipProps } from '@nivo/line';

import { formatDateToKorean } from '@/utils/parseDate';
import GraphTooltipFrame from '../GraphTooltipFrame';

const GraphTooltipTeamRank = ({ point }: PointTooltipProps) => {
  const xParseDate = new Date(point.data.xFormatted);
  return (
    <GraphTooltipFrame>
      <p>{formatDateToKorean(xParseDate)}</p>
      <p>KT wiz : {point.data.yFormatted} 위</p>
    </GraphTooltipFrame>
  );
};

export default GraphTooltipTeamRank;
