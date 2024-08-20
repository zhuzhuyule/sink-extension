import { LoginForm } from './LoginForm';

import ComputerSvg from '@src/assets/computer.svg?react';
import { Logo } from '@src/assets/img/logo';
import { SplitLine } from '@src/components/SplitLine';
import { useAtom, useAtomValue } from 'jotai';
import { linksAtom, optionLoginModalAtom } from '../../util/atom';
import { Links } from './Links';

const Options = () => {
  const [isHidden, setHidden] = useAtom(optionLoginModalAtom);
  const links = useAtomValue(linksAtom);

  return (
    <div className='flex h-screen w-screen overflow-y-auto bg-gray-100 p-8'>
      <div
        className={`fixed left-[50vw] top-[50vh] -translate-x-1/2 -translate-y-1/2 transform transition-all duration-300 ease-in-out ${
          isHidden ? 'scale-0 opacity-0' : 'scale-100 opacity-100'
        }`}
      >
        <LoginForm />
      </div>
      <div className='m-5 flex flex-1 flex-col'>
        <h2 className='flex items-center justify-start gap-4 text-center text-2xl font-bold'>
          <Logo />
          Links
          {links && (
            <ComputerSvg
              className='ml-auto h-10 w-10 cursor-pointer text-green-500'
              onClick={() => setHidden(false)}
            />
          )}
        </h2>
        <SplitLine />
        <Links />
      </div>
    </div>
  );
};

export default Options;
