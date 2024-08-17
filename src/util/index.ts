import { SETTING } from '@src/constant';
import { useEffect, useState } from 'preact/hooks';

export const get = async (api: string, options?: object) => {
  const setting = (await chrome.storage.local.get([SETTING.KEY]))[SETTING.KEY];
  return fetch(
    `${setting[SETTING.INSTANCE_URL]}${api}`,
    Object.assign(options || {}, {
      headers: {
        Authorization: `Bearer ${setting[SETTING.PASSWORD] || ''}`,
      },
    })
  ).then(res => res.json())
}
  

export async function useAPI<T>(api: string, options?: object) {
  const [data, setData] = useState<T>();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    get(api, options)
      .then(res => res.json())
      .then(data => setData(data))
      .finally(() => {
        setIsLoading(false);
      });
  }, [api]);

  return {
    isLoading,
    data,
  };
}
