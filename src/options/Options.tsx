import { Logo } from '@src/assets/img/logo';
import { h } from 'preact';
import { useState } from 'preact/hooks';

const Options = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [instanceUrl, setInstanceUrl] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ instanceUrl?: string; password?: string }>({});

  const handleUsernameChange = (e: any) => setInstanceUrl(e.target.value);
  const handlePasswordChange = (e: any) => setPassword(e.target.value);
  const validateForm = () => {
      const newErrors: { instanceUrl?: string; password?: string } = {};

      if (!instanceUrl) {
        newErrors.instanceUrl = 'Inststance URL is required';
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
        chrome.storage.local.set({'settings': {
          instanceUrl,
          password
        }})
      }
    };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-8 text-center flex justify-center items-center gap-4">
          <Logo />
          Settings
        </h2>
        <div className="space-y-4">
          <div>
            <label htmlFor="username" className="flex text-sm font-medium text-gray-700 justify-between">
              Instance URL*
              {
                isLogin && <a 
                  class="text-sm flex flex-row justify-start items-center underline text-blue-500 hover:opacity-80" 
                  href={instanceUrl} target="_blank"
                >
                  <span class="mr-1">Go to my Skin</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link w-4 h-auto"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
                </a>
              }
            </label>
            <input
              id="username"
              type="text"
              placeholder="https://example.com"
              value={instanceUrl}
              onChange={handleUsernameChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-800 focus:border-gray-800 sm:text-sm"
            />
            {errors.instanceUrl && <p className="text-red-500 text-xs mt-1">{errors.instanceUrl}</p>}
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password*
            </label>
            <input
              id="password"
              type="password"
              placeholder="Your Site Token"
              value={password}
              onChange={handlePasswordChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-800 focus:border-gray-800 sm:text-sm"
              />
            </div>
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
            <button
              type="submit"
              className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2"
              onClick={handleSubmit}
            >
            Login
          </button>
        </div>
        <p className="text-xs text-gray-500 mt-4 text-right">
          Create by <a className="text-blue-500" href="https://ause.cc/github">zhuzhuyule</a>
        </p>
      </div>
    </div>
  );
};

export default Options;
