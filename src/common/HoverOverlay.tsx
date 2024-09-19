import { ReactNode } from 'react';

import { cn } from '@/utils/cn';

type HoverOverlayProps = {
  children: ReactNode;
  className?: string;
};

const HoverOverlay = ({ children, className = '' }: HoverOverlayProps) => {
  return (
    <div
      className={cn(
        'absolute inset-0 flex items-center justify-center bg-black bg-opacity-65 opacity-0 transition-opacity duration-300 hover:opacity-100',
        className,
      )}
    >
      {children}
    </div>
  );
};

export default HoverOverlay;
