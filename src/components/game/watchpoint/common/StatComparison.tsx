import StatRow from './StatRow';

type StatComparisonProps = {
  stats: Array<{
    label: string;
    away: string | number;
    home: string | number;
  }>;
};

const StatComparison = ({ stats }: StatComparisonProps) => {
  return (
    <section className="w-full">
      {stats.map((stat, index) => (
        <StatRow
          key={index}
          label={stat.label}
          away={stat.away}
          home={stat.home}
        />
      ))}
    </section>
  );
};

export default StatComparison;
