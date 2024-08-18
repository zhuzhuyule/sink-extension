import { copyToClipboard } from '@src/util';
import { useAvatar } from '@src/util/useAvatar';
import { h } from 'preact';
import { useState } from 'preact/hooks';

import copySvg from '@src/assets/copy.svg';
import success from '@src/assets/success.svg';
import openUrl from '@src/assets/openUrl.svg';
import { useSettings } from '@src/util/useSettings';
import { Svg } from '@src/components/Svg';

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
            <Svg class="rounded-full overflow-hidden" src={avatarUrl} alt={shortKey} />
          </span>
          <div className='w-[250px] flex-1 overflow-hidden'>
            <div className='flex items-center'>
              <div className='text-lg mr-1 truncate font-bold leading-5'>
                {shortKey}
              </div>
              {copied ? (
                <Svg src={success} size={20} className='ml-1 shrink-0' />
              ) : (
                <Svg
                  src={copySvg}
                  onClick={handleCopy}
                  size={20}
                  className='ml-1 shrink-0 cursor-pointer'
                />
              )}
            </div>
            <div className='w-full line-clamp-1 overflow-hidden text-sm text-gray-500' al={url}>
              {url}
            </div>
          </div>
          <a
            href={url}
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center'
          >
            <Svg size={30} src={openUrl} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Tag;
