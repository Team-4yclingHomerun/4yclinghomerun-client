import { ResponsivePie } from '@nivo/pie';

import { TTeamRankingTeamVSTable } from '@/types/TeamRanking';

const TeamRankingPieGraph = ({
  graphInfo,
}: {
  graphInfo: TTeamRankingTeamVSTable;
}) => {
  const getTeamName = (code: string) => {
    switch (code) {
      case 'SS':
        return '삼성';
      case 'OB':
        return '두산';
      case 'WO':
        return '키움';
      case 'LT':
        return '롯데';
      case 'SK':
        return 'SSG';
      case 'HT':
        return 'KIA';
      case 'HH':
        return '한화';
      default:
        return code;
    }
  };

  return (
    <div className="relative">
      <h1 className="absolute top-0 bg-kt-gray-2 px-5 py-2 text-center">
        {getTeamName(graphInfo.vsTeamCode)}
      </h1>
      <div className="size-[360px] border-2 border-kt-gray-2">
        <ResponsivePie
          data={[
            {
              id: '승',
              label: '승',
              value: graphInfo.win,
              color: '#ea0101',
            },
            {
              id: '무',
              label: '무',
              value: graphInfo.drawn,
              color: '#717781',
            },
            {
              id: '패',
              label: '패',
              value: graphInfo.lose,
              color: '#0098af',
            },
          ]}
          margin={{ top: 60, right: 50, bottom: 110, left: 70 }}
          colors={(d) => d.data.color}
          innerRadius={0}
          padAngle={0.7}
          cornerRadius={3}
          borderWidth={1}
          arcLinkLabelsSkipAngle={10}
          arcLinkLabelsStraightLength={3}
          arcLinkLabelsThickness={2}
          arcLinkLabelsColor={{ from: 'color' }}
          arcLabelsSkipAngle={10}
          legends={[
            {
              anchor: 'bottom',
              direction: 'row',
              justify: false,
              translateX: 0,
              translateY: 56,
              itemsSpacing: 0,
              itemWidth: 100,
              itemHeight: 18,
              itemDirection: 'left-to-right',
              itemOpacity: 1,
              symbolSize: 18,
              symbolShape: 'circle',
            },
          ]}
          isInteractive={false}
          theme={{
            text: {
              fontSize: 14,
              fill: '#fff',
            },
          }}
        />
      </div>
    </div>
  );
};
export default TeamRankingPieGraph;
