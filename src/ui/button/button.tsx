import { cn } from '@/utils/cn';

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  className?: string;
};

const Button = ({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  size = 'medium',
  disabled = false,
  className = '',
}: ButtonProps) => {
  const baseStyles =
    'rounded-full font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-300';
  const variantStyles = {
    primary:
      'bg-red-500 text-white hover:bg-red-600 text-white focus:ring-red-500',
    secondary:
      'bg-yellow-400 text-black hover:bg-yellow-500 focus:ring-yellow-400',
    danger: 'bg-gray-500 text-white hover:bg-gray-600 focus:ring-gray-500',
  };
  const sizeStyles = {
    small: 'px-3 py-1 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg',
  };

  const combinedStyles = cn(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    className,
  );

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        combinedStyles,
        disabled && 'cursor-not-allowed opacity-50',
      )}
    >
      {children}
    </button>
  );
};

export { Button };
