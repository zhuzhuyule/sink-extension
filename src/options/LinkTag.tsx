import { copyToClipboard } from '@src/util';
import { useAvatar } from '@src/util/useAvatar';
import { useState } from 'preact/hooks';

import copySvg from '@src/assets/copy.svg';
import openUrl from '@src/assets/openUrl.svg';
import successSvg from '@src/assets/success.svg';
import { Svg } from '@src/components/Svg';
import { useSettings } from '@src/util/useSettings';
import { JumpLink } from '../components/JumpLink';

interface TagProps {
  shortKey: string;
  url: string;
  displayDate?: string;
}

const Tag = ({ shortKey, url, displayDate }: TagProps) => {
  const [copied, setCopied] = useState(false);
  const { instanceUrl } = useSettings();

  const handleCopy = () => {
    setCopied(true);
    copyToClipboard(`${instanceUrl}/${shortKey}`, () => {
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const avatarUrl = useAvatar(url);

  return (
    <div className='bg-card text-card-foreground mt-2 rounded-lg border shadow-sm'>
      <div className='flex flex-col space-y-3 p-4'>
        <div className='flex items-center justify-center space-x-3'>
          <span className='text-foreground bg-secondary inline-flex h-10 w-10 shrink-0 select-none items-center justify-center overflow-hidden rounded-full text-xs font-normal'>
            <Svg
              class='overflow-hidden rounded-full'
              src={avatarUrl}
              alt={shortKey}
            />
          </span>
          <div className='w-[250px] flex-1 overflow-hidden'>
            <div className='flex items-center'>
              <div className='mr-1 truncate text-lg font-bold leading-5'>
                {shortKey}
              </div>
              {copied ? (
                <Svg src={successSvg} size={20} className='ml-1 shrink-0' />
              ) : (
                <Svg
                  src={copySvg}
                  onClick={handleCopy}
                  size={20}
                  className='ml-1 shrink-0 cursor-pointer'
                  alt='Copy short link'
                />
              )}
            </div>
            <div
              className='line-clamp-1 w-full overflow-hidden text-sm text-gray-500'
              alt={url}
            >
              {url}
            </div>
          </div>
          <JumpLink link={url} />
        </div>
      </div>
    </div>
  );
};

export default Tag;
