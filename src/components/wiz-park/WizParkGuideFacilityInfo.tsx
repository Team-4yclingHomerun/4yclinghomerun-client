import { cn } from '@/utils/cn';

const WizParkGuideFacilityInfo = ({
  img,
  label,
  engLabel,
}: {
  img: string;
  label: string;
  engLabel: string;
}) => (
  <div className="flex items-center gap-3">
    <img src={img} className="size-10" />
    <div
      className={cn(
        'items-center text-left text-sm',
        label.length > 10 && 'tracking-tighter',
      )}
    >
      <p>{label}</p>
      <p className="text-xs text-gray-400">{engLabel}</p>
    </div>
  </div>
);

export default WizParkGuideFacilityInfo;
