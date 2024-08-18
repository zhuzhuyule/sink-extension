import { useEffect, useState } from 'preact/hooks';
import { request } from '.';

export interface ILink {
  id: string;
  url: string;
  slug: string;
  createdAt: number;
  updatedAt: number;
}

export const useLinks = (count: number = 100) => {
  const [links, setLinks] = useState<ILink[]>();
  const [isLoading, setIsLoading] = useState(false);

  const queryLinks = (count = 100, error?: () => void) =>
    request(`/api/link/list?limit=${count}&cursor`)
      .then(data => {
        if (data.statusMessage) {
          throw Error();
        }
        setLinks(data.links);
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
