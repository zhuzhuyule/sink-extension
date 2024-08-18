import { useAvatar } from '@src/util/useAvatar';
import { useEffect, useState } from 'preact/hooks';

import copySvg from '@src/assets/copy.svg';
import openUrlSvg from '@src/assets/openUrl.svg';
import { copyToClipboard } from '@src/util';
import { useSettings } from '@src/util/useSettings';
import { Svg } from '@src/components/Svg';

export const NewShortURL = () => {
  const [url, setUrl] = useState('');
  const [key, setKey] = useState('');
  const [copied, setCopied] = useState(false);
  const { instanceUrl } = useSettings();

  useEffect(() => {
    chrome.tabs.query({ active: true, currentWindow: true }).then(([tab]) => {
      if (tab?.url) {
        try {
          setUrl(tab.url);
        } catch {}
      }
    });
  }, []);

  const avatarUrl = useAvatar(url);

  const handleCopy = () => {
    setCopied(true);
    copyToClipboard(`${url}/${key}`, () => {
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div class='flex w-full flex-col items-center justify-center'>
      <div className='flex w-full items-center justify-center space-x-3'>
        <span className='text-foreground bg-secondary inline-flex h-10 w-10 shrink-0 select-none items-center justify-center overflow-hidden rounded-full text-xs font-normal'>
          <Svg src={avatarUrl} alt={key} class='object-cover' />
        </span>
        <div className='flex flex-1 items-center justify-center overflow-hidden'>
          <div className='text-md mr-[2px] truncate font-bold leading-5'>
            {`${instanceUrl}/`}
          </div>
          <input
            type='text'
            value={key}
            onInput={e => setKey(e.target?.value)}
            placeholder='slug'
            className='flex-1 rounded-md border border-gray-300 px-1 py-1 shadow-sm focus:border-gray-800 focus:outline-none focus:ring-gray-800 sm:text-sm'
          />
          {copied ? (
            'Copied'
          ) : (
            <Svg
              src={copySvg}
              onClick={handleCopy}
              className='ml-1 cursor-pointer'
            />
          )}
          <a href={url} target='_blank' rel='noopener noreferrer'>
            <Svg
              src={openUrlSvg}
              className='ml-1 shrink-0'
              // style={{ transform: 'scaleX(-1)' }}
            />
          </a>
        </div>
      </div>

      <div class='flex w-full items-center justify-center gap-2'>
        <div className='text-sm font-medium text-gray-700'>URL:</div>
        <input
          type='text'
          value={url}
          onInput={e => setUrl(e.target?.value)}
          placeholder='https://example.com'
          className='flex-1 rounded-md border border-gray-300 px-2 py-1 shadow-sm focus:border-gray-800 focus:outline-none focus:ring-gray-800 sm:text-sm'
        />
      </div>
      <p>No shortcut found.</p>
    </div>
  );
};
