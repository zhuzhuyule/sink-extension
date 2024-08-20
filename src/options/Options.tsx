import { Logo } from '@src/assets/img/logo';
import webSvg from '@src/assets/web.svg';
import { Footer } from '@src/components/Footer';
import { SplitLine } from '@src/components/SplitLine';
import { request } from '@src/util';
import { useSettings } from '@src/util/useSettings';
import { useEffect, useLayoutEffect, useState } from 'preact/hooks';
import { JumpLink } from '../components/JumpLink';
import { FormError } from './FormError';
import LinkTag from './LinkTag';
import { useLinks } from '@src/util/useLinks';

const URL_REG =
  /^(https?:\/\/)?([a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)+)(:[0-9]{1,5})?(\/.*)?$/;

const Options = () => {
  const { links, queryLinks } = useLinks();
  const [isLoging, setIsLoging] = useState(false);
  const { instanceUrl, setInstanceUrl, password, setPassword, updateStorage } =
    useSettings();
  const [errors, setErrors] = useState<{
    instanceUrl?: string;
    password?: string;
    login?: string;
  }>({});

  const handleInstanceUrlChange = (e: any) => setInstanceUrl(e.target.value);
  const handlePasswordChange = (e: any) => setPassword(e.target.value);
  const validateForm = () => {
    const newErrors: { instanceUrl?: string; password?: string } = {};
    if (!instanceUrl) {
      newErrors.instanceUrl = 'Instance URL is required';
    } else if (!URL_REG.test(instanceUrl)) {
      newErrors.instanceUrl = 'Instance URL is invalid';
    }
    if (!password) {
      newErrors.password = 'Password is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: Event) => {
    e.preventDefault();

    if (validateForm()) {
      setIsLoging(true);
      updateStorage()
        .then(() =>
          queryLinks(100, () => {
            setErrors({ login: 'Please check your instance url/password' });
          })
        )
        .finally(() => setIsLoging(false));
    }
  };

  useLayoutEffect(() => {
    setErrors({});
  }, [instanceUrl, password]);

  return (
    <div className='flex min-h-screen items-center justify-center bg-gray-100'>
      <div className='w-full max-w-md rounded-lg bg-white p-8 shadow-lg'>
        <h2 className='mb-8 flex items-center justify-center gap-4 text-center text-2xl font-bold'>
          <Logo />
          Settings
        </h2>
        <div className='space-y-4'>
          <div>
            <label
              htmlFor='instanceUrl'
              className='flex justify-between text-sm font-medium text-gray-700'
            >
              Instance URL*
              <JumpLink
                link={links ? `${instanceUrl}/dashboard/links` : ''}
                svg={webSvg}
                alt='Go to my Sink'
              />
            </label>
            <input
              id='instanceUrl'
              type='text'
              placeholder='https://example.com'
              value={instanceUrl}
              onInput={handleInstanceUrlChange}
              className='mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-gray-800 focus:outline-none focus:ring-gray-800 sm:text-sm'
            />
            <FormError error={errors.instanceUrl} />
          </div>
          <div>
            <label
              htmlFor='password'
              className='block text-sm font-medium text-gray-700'
            >
              Password*
            </label>
            <input
              id='password'
              type='password'
              placeholder='Your Site Token'
              value={password}
              onInput={handlePasswordChange}
              className='mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-gray-800 focus:outline-none focus:ring-gray-800 sm:text-sm'
            />
          </div>
          <FormError error={errors.password} />
          <FormError error={errors.login} />
          <button
            type='submit'
            disabled={isLoging}
            className={`${links ? 'w-30' : 'w-full'} mt-8 rounded-md border border-transparent bg-gray-800 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2`}
            onClick={handleSubmit}
          >
            {isLoging ? 'Loging...' : links ? 'Update' : 'Login'}
          </button>
        </div>
        <Footer hideSetting hideWeb />
        <SplitLine />
        {links ? '' : 'Not logged in yet'}
        <div className=''>
          {links?.map(link => (
            <LinkTag key={link.id} shortKey={link.slug} url={link.url} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Options;
