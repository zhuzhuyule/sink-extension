import { useEffect, useState } from 'preact/hooks';
import { request } from '.';
import { useAtom, useSetAtom } from 'jotai';
import { linksAtom, optionLoginModalAtom } from './atom';


export const useLinks = (count: number = 100) => {
  const setHidden = useSetAtom(optionLoginModalAtom)

  const [links, setLinks] = useAtom(linksAtom);
  const [isLoading, setIsLoading] = useState(false);

  const queryLinks = (count = 100, error?: () => void) =>
    request(`/api/link/list?limit=${count}&cursor`)
      .then(data => {
        if (data.statusMessage) {
          throw Error();
        }
        setLinks(data.links);
        setHidden(true)
        return data;
      })
      .catch(() => {
        setLinks(undefined);
        error?.();
      });

  useEffect(() => {
    setIsLoading(true);
    queryLinks(count).finally(() => setIsLoading(false));
  }, [count]);

  return { links, setLinks, queryLinks, isLoading };
};
