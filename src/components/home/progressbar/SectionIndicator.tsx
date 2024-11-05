import { cn } from '@/utils/cn';

type SectionIndicatorProps = {
  title: string;
  section: string;
};

const SectionIndicator = ({ title, section }: SectionIndicatorProps) => {
  const handleSection = () => {
    window.location.hash = section;
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <button
      onClick={handleSection}
      className={cn(
        'absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-[rgba(000,000,000,0.2)] px-2 py-1',
        title === 'FOOTER' && 'top-1/4',
      )}
    >
      <p className="text-lg font-bold text-white">{title}</p>
    </button>
  );
};
export default SectionIndicator;
