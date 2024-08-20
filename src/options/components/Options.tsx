import { LoginForm } from './LoginForm';

import { useAtomValue } from 'jotai';
import { settingModalAtom } from '../atom';

const Options = () => {
  const isShow = useAtomValue(settingModalAtom);

  return (
    <div className='flex min-h-screen items-center justify-center bg-gray-100'>
      <div
        className={`transform transition-all duration-300 ease-in-out ${
          isShow
            ? 'scale-0 opacity-0'
            : 'scale-100 opacity-100'
        }`}
      >
        <LoginForm />
      </div>
    </div>
  );
};

export default Options;
