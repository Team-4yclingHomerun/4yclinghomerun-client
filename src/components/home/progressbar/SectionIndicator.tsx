import { cn } from '@/utils/cn';

const SectionIndicator = ({ title }: { title: string }) => {
  return (
    <div
      className={cn(
        'absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-[rgba(000,000,000,0.2)] px-2 py-1',
        title === 'FOOTER' && 'top-1/4',
      )}
    >
      <p className="text-lg font-bold text-white">{title}</p>
    </div>
  );
};
export default SectionIndicator;
