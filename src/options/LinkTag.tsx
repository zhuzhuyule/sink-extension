import { copyToClipboard } from '@src/util';
import { useAvatar } from '@src/util/useAvatar';
import { h } from 'preact';
import { useState } from 'preact/hooks';

import copySvg from '@src/assets/copy.svg';
import linkSvg from '@src/assets/link.svg';
import { useSettings } from '@src/util/useSettings';

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
    <div className='bg-card text-card-foreground rounded-lg border shadow-sm'>
      <div className='flex flex-col space-y-3 p-4'>
        <div className='flex items-center justify-center space-x-3'>
          <span className='text-foreground bg-secondary inline-flex h-10 w-10 shrink-0 select-none items-center justify-center overflow-hidden rounded-full text-xs font-normal'>
            <img
              src={avatarUrl}
              alt={shortKey}
              className='h-full w-full object-cover'
            />
          </span>
          <div className='max-w-[250px] flex-1 overflow-hidden'>
            <div className='flex items-center'>
              <div className='text-md mr-4 truncate font-bold leading-5'>
                {shortKey}
              </div>
              {copied ? (
                'Copied'
              ) : (
                <img
                  src={copySvg}
                  onClick={handleCopy}
                  className='ml-1 h-4 w-4 shrink-0 cursor-pointer'
                />
              )}
            </div>
            <p className='line-clamp-1 overflow-hidden text-sm text-gray-500'>
              {url}
            </p>
          </div>
          <a
            href={url}
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center'
          >
            <img src={linkSvg} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Tag;
