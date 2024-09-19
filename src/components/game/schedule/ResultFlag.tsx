import { cn } from '@/utils/cn';

type ResultFlagProps = {
  outcome: '승' | '패' | '무' | '취';
};

const ResultFlag = ({ outcome }: ResultFlagProps) => {
  const resultStyles: Record<
    string,
    { bg: string; label: string; textColor?: string }
  > = {
    승: { bg: 'bg-red-700', label: '승리' },
    패: { bg: 'bg-blue-700', label: '패배' },
    무: { bg: 'bg-gray-300', label: '무', textColor: 'text-black' },
    취: { bg: 'bg-zinc-900', label: '취소' },
  };

  const style = resultStyles[outcome] || {
    bg: 'bg-slate-600',
    label: '경기 전',
  };

  return (
    <span
      className={cn(
        `flex items-center justify-center rounded-md border border-gray-200 p-1 text-xs ${style.textColor || 'text-white'}`,
        style.bg,
      )}
    >
      {style.label}
    </span>
  );
};

export default ResultFlag;
