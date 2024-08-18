import openUrl from '@src/assets/openUrl.svg';
import { Svg } from '@src/components/Svg';
export const JumpLink = ({ link }: { link?: string }) => {
  return link ? (
    <a
      class='flex flex-row items-center justify-start text-sm text-blue-500 underline hover:opacity-80'
      href={link}
      target='_blank'
    >
      <Svg src={openUrl} alt='Go to my Skin' />
    </a>
  ) : null;
};
