import { Logo } from '@assets/img/logo';
import { SETTING } from '@src/constant';
import { useEffect, useState } from 'preact/hooks';

const Popup = () => {
  const [password, setPassword] = useState('')
  useEffect(() => {
    chrome.storage.local.get([SETTING.KEY], item => setPassword(item[SETTING.PASSWORD]))
  }, [])
  return (
    <div class='w-full bg-[#673ab8] p-8 text-center text-lg'>
      <Logo />
      <p data-testid='popup_text' class='p-6 text-3xl text-purple-400'>
        {password}
      </p>
    </div>
  );
};

export default Popup;
