type StatRowProps = {
  label: string;
  home: string | number;
  away: string | number;
};

const StatRow = ({ label, home, away }: StatRowProps) => (
  <div className="grid grid-cols-3 gap-4 border-b border-gray-600 px-4 py-2">
    <div className="text-right">{away}</div>
    <div className="text-center font-extrabold text-red-400">{label}</div>
    <div className="text-left">{home}</div>
  </div>
);

export default StatRow;
