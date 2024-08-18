export const SplitLine = ({
  className,
  padding = 'py-4',
  ...props
}: JSX.HTMLAttributes<HTMLDivElement> & {padding?: string}) => {
  return (
    <div {...props} className={padding}>
      <div className={`${props.class || className || ''} 'w-full border-t border-t-slate-300'`}></div>
    </div>
  );
};
