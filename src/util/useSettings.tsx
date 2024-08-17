import { SETTING } from '@src/constant';
import { useState, useEffect } from 'preact/hooks';

export const useSettings = () => {
  const [instanceUrl, setInstanceUrl] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    chrome.storage.local.get([SETTING.KEY]).then(item => {
      setInstanceUrl(item[SETTING.KEY][SETTING.INSTANCE_URL]);
      setPassword(item[SETTING.KEY][SETTING.PASSWORD]);
    });
  }, []);

  return {
    instanceUrl,
    setInstanceUrl,
    password,
    setPassword,
    updateStorage: () =>
      chrome.storage.local.set({
        [SETTING.KEY]: {
          [SETTING.INSTANCE_URL]: instanceUrl,
          [SETTING.PASSWORD]: password,
        },
      }),
  };
};
