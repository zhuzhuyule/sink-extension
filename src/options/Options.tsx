import { Logo } from '@src/assets/img/logo';
import { get } from '@src/util';
import { useSettings } from '@src/util/useSettings';
import { useEffect, useState } from 'preact/hooks';
import { FormError } from './FormError';
import { JumpLink } from './JumpLink';
import LinkTag from './LinkTag';

const URL_REG =
  /^(https?:\/\/)?([a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)+)(:[0-9]{1,5})?(\/.*)?$/;

const Options = () => {
  const [links, setLinks] = useState<{ slug: string; url: string; id: string }[]>();
  const [isLoging, setIsLoging] = useState(false);
  const { instanceUrl, setInstanceUrl, password, setPassword, updateStorage } =
    useSettings();
  const [errors, setErrors] = useState<{
    instanceUrl?: string;
    password?: string;
    login?: string;
  }>({});

  const handleUsernameChange = (e: any) => setInstanceUrl(e.target.value);
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

  const queryLinks = () => {
    get('/api/link/list?limit=30&cursor')
      .then(data => {
        if (data.statusMessage) {
          throw Error();
        }
        setLinks(data.links);
      })
      .catch(() => {
        setLinks(undefined);
        setErrors({ login: 'Please check your instance url/password' });
      });
  };

  useEffect(() => {
    queryLinks();
  }, []);

  const handleSubmit = (e: Event) => {
    e.preventDefault();

    if (validateForm()) {
      setIsLoging(true);
      updateStorage()
        .then(() => queryLinks())
        .finally(() => setIsLoging(false));
    }
  };

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
              htmlFor='username'
              className='flex justify-between text-sm font-medium text-gray-700'
            >
              Instance URL*
              <JumpLink link={links ? instanceUrl : ''} />
            </label>
            <input
              id='username'
              type='text'
              placeholder='https://example.com'
              value={instanceUrl}
              onChange={handleUsernameChange}
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
              onChange={handlePasswordChange}
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
        <p className='mt-4 text-right text-xs text-gray-500'>
          Create by{' '}
          <a className='text-blue-500' href='https://ause.cc/github'>
            zhuzhuyule
          </a>
        </p>
        <div>
      {links?.map(link => <LinkTag key={link.id} shortKey={link.slug} url={link.url} />)}
      </div>
      </div>     
    </div>
  );
};

export default Options;
