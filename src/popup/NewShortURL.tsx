import { useAvatar } from '@src/util/useAvatar';
import { useEffect, useState } from 'preact/hooks';

import copySvg from '@src/assets/copy.svg';
import successSvg from '@src/assets/success.svg';
import { Svg } from '@src/components/Svg';
import { copyToClipboard } from '@src/util';
import { useSettings } from '@src/util/useSettings';

import QRCode from 'qrcode';
import QRModal from './QRModal';

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
    copyToClipboard(`${instanceUrl}/${key}`, () => {
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div class='flex w-full flex-col items-center justify-center'>
      <div className='flex w-full items-center justify-center'>
        <span className='text-foreground bg-secondary inline-flex h-10 w-10 shrink-0 select-none items-center justify-center overflow-hidden rounded-full text-xs font-normal'>
          <Svg
            src={avatarUrl}
            alt={key}
            class='overflow-hidden rounded-full object-cover shadow-lg'
          />
        </span>
        <div className='flex flex-1 items-center justify-start overflow-hidden'>
          <div className='mr-[2px] truncate text-base font-bold leading-5'>
            {`${instanceUrl}/`}
          </div>
          <input
            type='text'
            value={key}
            onInput={e => setKey(e.target?.value)}
            placeholder='slug'
            className='flex-1 border-b border-b-gray-200 p-0 text-base shadow-sm focus:border-gray-400 focus:outline-none focus:ring-gray-400'
          />
          {copied ? (
            <Svg
              src={successSvg}
              className='ml-1 cursor-pointer text-green-500'
            />
          ) : (
            <Svg
              src={copySvg}
              disabled
              onClick={handleCopy}
              className='ml-1 cursor-pointer'
              alt='Copy the short link'
            />
          )}
          <QRModal text={`${instanceUrl}/${key}`}/>
        </div>
      </div>
      <div class='mt-1 flex w-full items-center justify-center gap-2'>
        <input
          type='text'
          value={url}
          onInput={e => setUrl(e.target?.value)}
          placeholder='https://example.com'
          className='flex-1 text-gray-400 focus:text-gray-700 border-b border-b-gray-200 p-0 px-1 text-base shadow-sm focus:border-gray-400 focus:outline-none focus:ring-gray-400'
        />
        <QRModal text={url} />
      </div>
      <button
        // disabled={isLoging}
        className={`mt-3 w-full self-end rounded-md border border-transparent bg-gray-800 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-gray-900 focus:outline-none`}
        // onClick={handleSubmit}
      >
        Add
      </button>
    </div>
  );
};
