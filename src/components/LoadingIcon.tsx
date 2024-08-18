import LoadingSvg from '@src/assets/loading.svg?react';

export const LoadingIcon = ({size = 25, ...props}: JSX.HTMLAttributes<HTMLDivElement> & {size?: number}) => {

  return (
    <div
      {...props}
      alt='Loading'
      className={`${props.class || props.className || ''}  animate-spin inline-block`}
    >
      <LoadingSvg style={{ height: size + 'px', width: size + 'px'}}/>
    </div>
  );
};
