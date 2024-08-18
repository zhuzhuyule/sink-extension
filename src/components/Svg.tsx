export const Svg = ({ size = 25, style, ...props }: { size?: number } & JSX.HTMLAttributes<HTMLImageElement>) => {
  return <img {...props} style={size ? { ...(style as object), width: size+'px', height: size+'px'} : style} />;
};
