import { Logo } from '@src/assets/img/logo';
import { h } from 'preact';
import { useState } from 'preact/hooks';

const Options = () => {
  const [hostUrl, setHostUrl] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e: any) => setHostUrl(e.target.value);
  const handlePasswordChange = (e: any) => setPassword(e.target.value);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-8 text-center flex justify-center items-center gap-4">
          <Logo />
          Settings
        </h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Instance URL
            </label>
            <input
              id="username"
              type="text"
              placeholder="https://example.com"
              value={hostUrl}
              onChange={handleUsernameChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-800 focus:border-gray-800 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
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
            <button
              type="submit"
              className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2"
            >
            Login
          </button>
        </form>
        <p className="text-xs text-gray-500 mt-4 text-right">
          Create by <a href="">zhuzhuyule</a>
        </p>
      </div>
    </div>
  );
};

export default Options;
