import { useMemo } from 'preact/hooks';

export const useAvatar = (url: string) => {
  return url
    ? useMemo(
        () =>
          `https://unavatar.io/${new URL(url).host}?fallback=https://sink.cool/sink.png`,
        [url]
      )
    : '';
};
