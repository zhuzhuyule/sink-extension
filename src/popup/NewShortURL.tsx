import { useAvatar } from '@src/util/useAvatar';
import { useEffect, useState } from 'preact/hooks';

import copySvg from '@src/assets/copy.svg';
import flashSvg from '@src/assets/flash.svg';
import successSvg from '@src/assets/success.svg';
import { Svg } from '@src/components/Svg';
import { copyToClipboard, debounce, request } from '@src/util';
import { useSettings } from '@src/util/useSettings';

import QRModal from './QRModal';
import { FormError } from '@src/options/FormError';

export const NewShortURL = () => {
  const [isLoging, setIsLoging] = useState(false);
  const [url, setUrl] = useState('');
  const [key, setKey] = useState('');
  const [copied, setCopied] = useState(false);
  const { instanceUrl } = useSettings();
  const [errors, setErrors] = useState<{
    key?: string;
    url?: string;
    login?: string;
  }>({});

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

  const handleKeyChange = (e: any) => setKey(e.target.value);
  const handleUrlChange = (e: any) => setUrl(e.target.value);
  const validateForm = () => {
    const newErrors: { key?: string; url?: string } = {};
    if (!url) {
      newErrors.url = 'Please input original url';
    }
    if (!key) {
      newErrors.key = 'Please input short key';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = (e: Event) => {
    e.preventDefault();
    if (validateForm()) {
      // setIsLoging(true);
      // const link = {
      //   url: formData.url,
      //   slug: formData.slug,
      //   ...(formData.optional || []),
      //   expiration: formData.optional?.expiration
      //     ? date2unix(formData.optional?.expiration, 'end')
      //     : undefined,
      // };
      // const { link: newLink } = await useAPI(
      //   isEdit ? '/api/link/edit' : '/api/link/create',
      //   {
      //     method: isEdit ? 'PUT' : 'POST',
      //     body: link,
      //   }
      // );
    }
  };

  return (
    <div class='flex w-full flex-col items-center justify-center'>
      <div className='flex w-full items-center justify-center'>
        <Svg
          src={avatarUrl}
          alt={key}
          class='mr-2 h-10 w-10 select-none overflow-hidden rounded-full object-cover shadow-lg'
        />
        <div class='flex-1'>
          <div className='flex items-center justify-start overflow-hidden'>
            <div className='mr-[2px] truncate text-base font-bold leading-5'>
              {`${instanceUrl}/`}
            </div>
            <input
              type='text'
              value={key}
              onInput={handleKeyChange}
              placeholder='[Short Key]'
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
            <QRModal text={`${instanceUrl}/${key}`} />
          </div>
          <FormError error={errors.key} />
        </div>
      </div>
      <div class='mt-1 flex w-full items-center justify-center'>
        <input
          type='text'
          value={url}
          onInput={handleUrlChange}
          placeholder='https://example.com'
          className='flex-1 border-b border-b-gray-200 p-0 px-1 text-base text-gray-400 shadow-sm focus:border-gray-400 focus:text-gray-700 focus:outline-none focus:ring-gray-400'
        />
        <Svg
          src={flashSvg}
          onClick={() => {
            debounce(
              'slug-request',
              () => {
                request(`/api/link/ai?url=${url}`)
                  .then(data => {
                    data?.slug && setKey(data.slug);
                  })
                  .catch();
              },
              2000
            )()
          }}
          className='ml-1 cursor-pointer'
          alt='Quick generate slug'
        />
        <QRModal text={url} />
      </div>
      <div>
        <FormError error={errors.url} />
        <FormError error={errors.login} />
      </div>
      <button
        // disabled={isLoging}
        className={`mt-3 w-full self-end rounded-md border border-transparent bg-gray-800 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-gray-900 focus:outline-none`}
        onClick={handleSubmit}
      >
        Add
      </button>
    </div>
  );
};
