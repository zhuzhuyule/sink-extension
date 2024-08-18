import { useState } from 'preact/hooks';
import { LoadingIcon } from './LoadingIcon';

export const Button = ({
  className,
  onClick,
  children,
  size = 20,
  loading,
  ...props
}: {
  onClick: (e: Event) => void | Promise<void>;
  size?: number;
  loading?: boolean;
} & Omit<JSX.HTMLAttributes<HTMLButtonElement>, 'onClick' | 'loading'>) => {
  const [isLogingState, setIsLoading] = useState(false);
  const isLoging = loading || isLogingState;
  return (
    <button
      {...props}
      disabled={isLoging}
      className={`${props.class || className} flex items-center justify-center rounded-md border border-transparent bg-gray-800 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-gray-900 focus:outline-none`}
      onClick={e => {
        const result = onClick(e);
        if (result instanceof Promise) {
          setIsLoading(true);
          result.finally(() => {
            setIsLoading(false);
          });
        }
      }}
    >
      {isLoging ? <LoadingIcon size={size} /> : children}
    </button>
  );
};
