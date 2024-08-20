import webSvg from '@src/assets/web.svg';
import { Footer } from '@src/components/Footer';
import { useLinks } from '@src/util/useLinks';
import { useSettings } from '@src/util/useSettings';
import { useLayoutEffect, useState } from 'preact/hooks';
import { JumpLink } from '../../components/JumpLink';
import { FormError } from './FormError';
import { Header } from './Header';

const URL_REG =
  /^(https?:\/\/)?([a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)+)(:[0-9]{1,5})?(\/.*)?$/;

export const LoginForm = () => {
  const [isLoging, setIsLoging] = useState(false);
  const { links, queryLinks } = useLinks();
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
    <div className='w-[450px] rounded-lg bg-white p-8'>
      <Header title='Settings' />
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
    </div>
  );
};
