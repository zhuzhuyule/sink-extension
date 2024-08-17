import { Logo } from '@assets/img/logo';
import { useEffect, useState } from 'preact/hooks';

const Popup = () => {
  const [password, setPassword] = useState('')
  useEffect(() => {
    chrome.storage.local.get(['password'], item => setPassword(item.password))
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
