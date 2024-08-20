import { LoginForm } from './LoginForm';

import { useAtomValue } from 'jotai';
import { settingModalAtom } from '../../util/atom';
import { Links } from './Links';

const Options = () => {
  const isShow = useAtomValue(settingModalAtom);

  return (
    <div className='flex h-screen w-screen bg-gray-100 p-8'>
      <div
        className={`fixed left-[50vw] top-[50vh] -translate-x-1/2 -translate-y-1/2 transform transition-all duration-300 ease-in-out ${
          isShow ? 'scale-0 opacity-0' : 'scale-100 opacity-100'
        }`}
      >
        <LoginForm />
      </div>
      <Links />
    </div>
  );
};

export default Options;
