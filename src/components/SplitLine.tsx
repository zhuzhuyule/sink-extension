export const SplitLine = ({
  className,
  padding = 'py-4',
  ...props
}: JSX.HTMLAttributes<HTMLDivElement> & {padding?: string}) => {
  return (
    <div {...props} class={padding}>
      <div class={`${props.class || className || ''} 'w-full border-t border-t-slate-300'`}></div>
    </div>
  );
};
