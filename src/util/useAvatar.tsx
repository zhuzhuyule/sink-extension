import { useMemo } from 'preact/hooks'

export const useAvatar = (url: string) => {
  return useMemo(()=> {
    const uri = new URL(url);
    return `https://unavatar.io/${uri.host}?fallback=https://sink.cool/sink.png`
  }, [url])
}
