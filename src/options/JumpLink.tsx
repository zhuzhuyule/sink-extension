import openUrl from '@src/assets/openUrl.svg';
import { Svg } from '@src/components/Svg';
export const JumpLink = ({ link }: { link?: string }) => {
  return link ? (
    <a
      class='flex flex-row items-center justify-start text-sm text-blue-500 underline hover:opacity-80'
      href={link}
      target='_blank'
    >
      <span class='mr-1'>Go to my Skin</span>
      <Svg src={openUrl} />
    </a>
  ) : null;
};
