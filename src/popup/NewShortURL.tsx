import { useAvatar } from '@src/util/useAvatar';
import { useEffect, useLayoutEffect, useMemo, useState } from 'preact/hooks';

import CopySvg from '@src/assets/copy.svg?react';
import FlashSvg from '@src/assets/flash.svg?react';
import SuccessSvg from '@src/assets/success.svg?react';
import { Svg } from '@src/components/Svg';
import { copyToClipboard, debounce, request, throttle } from '@src/util';
import { useSettings } from '@src/util/useSettings';

import { Button } from '@src/components/Button';
import { LoadingIcon } from '@src/components/LoadingIcon';
import { FormError } from '@src/options/FormError';
import { ILink } from '@src/util/useLinks';
import QRModal from './QRModal';
import { link } from 'fs';

export const NewShortURL = ({ links }: { links: ILink[] }) => {
  const [editLink, setEditLink] = useState<ILink | null>();
  const [isLoging, setIsLoging] = useState(false);
  const [isLoadSlug, setIsLoadSlug] = useState(false);
  const [url, setUrl] = useState('');
  const [key, setKey] = useState('');
  const [copied, setCopied] = useState(false);
  const { instanceUrl } = useSettings();
  const [errors, setErrors] = useState<{
    key?: string;
    url?: string;
    login?: string;
  }>({});

  const warning = links.find(link => link.url === url && url !== editLink?.url);

  useLayoutEffect(() => {
    setErrors({});
  }, [key, url]);

  useEffect(() => {
    chrome.tabs.query({ active: true, currentWindow: true }).then(([tab]) => {
      if (tab?.url) {
        try {
          setUrl(tab.url);
          const item = links.find(link => link.url === tab.url);
          setEditLink(item);
          item && setKey(item.slug);
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

  const handleKeyChange = (e: any) => setKey(e.target.value);
  const handleUrlChange = (e: any) => setUrl(e.target.value);
  const validateForm = () => {
    const newErrors: { key?: string; url?: string } = {};
    if (!url) {
      newErrors.url = 'Please input original url';
    }
    if (!key) {
      newErrors.key = 'Please input short key';
    } else if (links.some(link => link.slug === key)) {
      newErrors.key = 'The slug has existed, please change it!';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = async (e: Event) => {
    e.preventDefault();
    if (validateForm()) {
      setIsLoging(true);
      const link = {
        url,
        slug: key,
      };
      request(editLink ? '/api/link/edit' : '/api/link/create', {
        method: editLink ? 'PUT' : 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(link),
      })
        .then(data => {
          if (data.statusCode === 409) {
            setErrors({ key: 'The slug key has been existed!' });
          }
        })
        .catch()
        .finally(() => {
          setIsLoging(false);
        });
    }
  };

  const handleRquest = debounce(
    'slug-request',
    () => {
      setIsLoadSlug(true);
      request(`/api/link/ai?url=${url}`)
        .then(data => {
          data?.slug && setKey(data.slug);
        })
        .catch()
        .finally(() => setIsLoadSlug(false));
    },
    2000
  );

  return (
    <div className='flex w-full flex-col items-center justify-center'>
      <div className='flex w-full items-center justify-center'>
        <Svg
          src={avatarUrl}
          alt={key}
          className='mr-2 h-10 w-10 select-none overflow-hidden rounded-full object-cover shadow-lg'
        />
        <div className='flex-1'>
          <div className='flex items-center justify-start overflow-hidden'>
            <div className='mr-[2px] truncate text-base font-bold leading-5'>
              {`${instanceUrl}/`}
            </div>
            <input
              value={key}
              onInput={handleKeyChange}
              placeholder='[Short Key]'
              className='flex-1 border-b border-b-gray-200 p-0 text-base shadow-sm focus:border-gray-400 focus:outline-none focus:ring-gray-400'
            />
            {copied ? (
              <SuccessSvg className='ml-1 h-6 w-6 cursor-pointer text-green-500' />
            ) : (
              <CopySvg
                onClick={handleCopy}
                className='ml-1 h-6 w-6 cursor-pointer'
                alt='Copy the short link'
              />
            )}
            <QRModal text={`${instanceUrl}/${key}`} />
          </div>
          <FormError error={errors.key} />
        </div>
      </div>
      <div className='mt-1 flex w-full items-center justify-center'>
        <input
          type='text'
          value={url}
          onInput={handleUrlChange}
          placeholder='https://example.com'
          className='flex-1 border-b border-b-gray-200 p-0 px-1 text-base font-thin text-gray-400 shadow-sm focus:border-gray-400 focus:text-gray-700 focus:outline-none focus:ring-gray-400'
        />
        {isLoadSlug ? (
          <LoadingIcon size={24} />
        ) : (
          <FlashSvg
            onClick={() => handleRquest()}
            className='ml-1 h-6 w-6 cursor-pointer'
            alt='Quick generate slug'
          />
        )}
        <QRModal text={url} />
      </div>
      <div className='self-start'>
        {warning ? (
          <p className='mt-1 text-xs text-yellow-400'>
            The url has been existed with '<b>{warning.slug}</b>'
          </p>
        ) : null}
        <FormError error={errors.url} />
        <FormError error={errors.login} />
      </div>
      <Button
        className='mt-3 w-full'
        loading={isLoging}
        onClick={e => handleSubmit(e)}
      >
        {editLink?.url == url ? 'Edit' : 'Add'}
      </Button>
    </div>
  );
};
