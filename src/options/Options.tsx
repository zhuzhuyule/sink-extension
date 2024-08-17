import { Logo } from '@src/assets/img/logo';
import { SETTING } from '@src/constant';
import { h } from 'preact';
import { useState } from 'preact/hooks';

const URL_REG = /^(https?:\/\/)?([a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)+)(:[0-9]{1,5})?(\/.*)?$/

const Options = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [instanceUrl, setInstanceUrl] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{
    instanceUrl?: string;
    password?: string;
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

  const handleSubmit = (e: Event) => {
    e.preventDefault();

    if (validateForm()) {
      setIsLogin(true);
      chrome.storage.local.set({
        [SETTING.KEY]: {
          [SETTING.INSTANCE_URL]: instanceUrl,
          [SETTING.PASSWORD]: password,
        },
      });
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
              {isLogin && (
                <a
                  class='flex flex-row items-center justify-start text-sm text-blue-500 underline hover:opacity-80'
                  href={instanceUrl}
                  target='_blank'
                >
                  <span class='mr-1'>Go to my Skin</span>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    class='lucide lucide-external-link h-auto w-4'
                  >
                    <path d='M15 3h6v6'></path>
                    <path d='M10 14 21 3'></path>
                    <path d='M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6'></path>
                  </svg>
                </a>
              )}
            </label>
            <input
              id='username'
              type='text'
              placeholder='https://example.com'
              value={instanceUrl}
              onChange={handleUsernameChange}
              className='mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-gray-800 focus:outline-none focus:ring-gray-800 sm:text-sm'
            />
            {errors.instanceUrl && (
              <p className='mt-1 text-xs text-red-500'>{errors.instanceUrl}</p>
            )}
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
          {errors.password && (
            <p className='mt-1 text-xs text-red-500'>{errors.password}</p>
          )}
          <button
            type='submit'
            className='w-full rounded-md border border-transparent bg-gray-800 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2'
            onClick={handleSubmit}
          >
            Login
          </button>
        </div>
        <p className='mt-4 text-right text-xs text-gray-500'>
          Create by{' '}
          <a className='text-blue-500' href='https://ause.cc/github'>
            zhuzhuyule
          </a>
        </p>
      </div>
    </div>
  );
};

export default Options;
