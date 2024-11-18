import { cn } from '@/utils/cn';
import { BiMessageAltError } from 'react-icons/bi';

const ErrorAlert = ({
  errorMsg,
  type,
  containerClassName,
}: {
  errorMsg: string;
  type: 'page' | 'component';
  containerClassName?: string;
}) => {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center',
        type === 'component' && 'rounded-md bg-[rgba(245,250,255,0.15)]',
        containerClassName && containerClassName,
      )}
    >
      <BiMessageAltError size={80} color="#717781" />
      <p className="mt-3 font-bold text-kt-gray-2">{errorMsg}</p>
    </div>
  );
};

export default ErrorAlert;
