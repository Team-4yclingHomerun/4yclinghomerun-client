export const GraphCommonProperties = {
  animate: true,
  enableSlices: false as const,
  enableGridX: false,
  enableGridY: false,
  useMesh: true,
  theme: {
    text: {
      fontSize: 14,
      fill: '#eceef2',
    },
    axis: {
      ticks: {
        text: {
          fill: '#717781',
        },
      },
      domain: {
        line: {
          stroke: '#717781',
          strokeWidth: 2,
        },
      },
    },
    grid: {
      line: {
        stroke: '#35383E',
        strokeWidth: 2,
      },
    },
  },
};

export const LineGraphProperties = {
  enablePoints: true,
  enablePointLabel: true,
  enableCrosshair: false,
  colors: ['#D60C0C'],
  pointSize: 10,
  pointBorderWidth: 2,
  pointColor: '#D60C0C',
  pointBorderColor: { from: 'serieColor' },
};
