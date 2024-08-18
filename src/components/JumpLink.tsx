import openUrl from '@src/assets/openUrl.svg';
import { Svg } from '@src/components/Svg';
export const JumpLink = ({ link, svg = openUrl, alt = "Open the link" }: { link?: string; svg?: string | JSX.SignalLike<string | undefined>; alt?: string }) => {
  return link ? (
    <a
      className='hover:opacity-60 opacity-90'
      href={link}
      target='_blank'
    >
      <Svg src={svg} alt={alt} />
    </a>
  ) : null;
};
