import { LoginForm } from './LoginForm';

import ComputerSvg from '@src/assets/computer.svg?react';
import { Logo } from '@src/assets/img/logo';
import { SplitLine } from '@src/components/SplitLine';
import { useAtom, useAtomValue } from 'jotai';
import { linksAtom, optionLoginModalAtom } from '../../util/atom';
import { Links } from './Links';
import { Modal } from '@src/components/Modal';

const Options = () => {
  const [isHidden, setHidden] = useAtom(optionLoginModalAtom);
  const links = useAtomValue(linksAtom);

  return (
    <div className='flex h-screen w-screen overflow-y-auto bg-gray-100 p-8'>
      <Modal
        isOpen={!isHidden}
        onClose={() => links && setHidden(true)}
        mask={false}
        maskClosable={!!links}
        showCloseButton={!!links}
      >
        <LoginForm />
      </Modal>
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
