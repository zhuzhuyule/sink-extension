import openUrl from '@src/assets/openUrl.svg';
import { Svg } from '@src/components/Svg';
import { ComponentChild } from 'preact';
export const JumpLink = ({
  link,
  svg = openUrl,
  alt = 'Open the link',
  children,
}: {
  link?: string;
  svg?: string | JSX.SignalLike<string | undefined>;
  alt?: string;
  children?: ComponentChild;
}) => {
  return link ? (
    <a className='opacity-90 hover:opacity-60' href={link} target='_blank'>
      {children || <Svg src={svg} alt={alt} />}
    </a>
  ) : null;
};
