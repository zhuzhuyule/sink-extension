import { LoginForm } from './LoginForm';

import ComputerSvg from '@src/assets/computer.svg?react';
import { Logo } from '@src/assets/img/logo';
import WebSvg from '@src/assets/web.svg?react';
import { JumpLink } from '@src/components/JumpLink';
import { Modal } from '@src/components/Modal';
import { SplitLine } from '@src/components/SplitLine';
import { SETTING } from '@src/constant';
import { useAtom, useAtomValue } from 'jotai';
import { useEffect, useRef, useState } from 'preact/hooks';
import { linksAtom, optionLoginModalAtom } from '../../util/atom';
import { Links } from './Links';
import { Footer } from '@src/components/Footer';

const Options = () => {
  const [isHidden, setHidden] = useAtom(optionLoginModalAtom);
  const links = useAtomValue(linksAtom);
  const [instanceUrl, setInstanceUrl] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (!isHidden) {
    }
  }, [isHidden]);

  useEffect(() => {
    chrome.storage.local.get(SETTING.KEY, res => {
      setInstanceUrl(res[SETTING.KEY][SETTING.INSTANCE_URL]);
    });
  }, [isHidden]);

  return (
    <div className='flex h-screen w-screen justify-center overflow-y-auto bg-gray-100 p-8'>
      <Modal
        isOpen={!isHidden}
        onClose={() => links && setHidden(true)}
        mask={false}
        maskClosable={!!links}
        showCloseButton={!!links}
      >
        <LoginForm />
      </Modal>
      <div className='m-5 flex max-w-7xl flex-1 flex-col'>
        <h2 className='flex items-center justify-start gap-4 text-center text-2xl font-bold'>
          <Logo />
          Links
          {links && (
            <div className='ml-auto flex items-center'>
              {instanceUrl && (
                <JumpLink link={`${instanceUrl}/dashboard/links`}>
                  <WebSvg className='mr-2 h-9 w-9 cursor-pointer text-gray-600' />
                </JumpLink>
              )}
              <ComputerSvg
                className='h-10 w-10 cursor-pointer text-green-500 hover:opacity-80'
                onClick={() => setHidden(false)}
              />
            </div>
          )}
        </h2>
        <SplitLine />
        <Links />
        <SplitLine />
        <Footer hideSetting hideWeb hideGift />
      </div>
    </div>
  );
};

export default Options;
