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
  ).then(res => res.json());
};

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

export function copyToClipboard(text: string, cb: (success: boolean) => void) {
  if (navigator.clipboard && window.isSecureContext) {
    // 如果支持 Clipboard API 且在安全上下文中
    navigator.clipboard.writeText(text).then(
      () => cb(true),
      err => cb(false)
    );
  } else {
    // 如果 Clipboard API 不支持，可以使用 fallback 方法
    fallbackCopyTextToClipboard(text, cb);
  }
}

function fallbackCopyTextToClipboard(
  text: string,
  cb: (success: boolean) => void
) {
  const textArea = document.createElement('textarea');
  textArea.value = text;

  // 避免用户看到文本区域
  textArea.style.position = 'fixed';
  textArea.style.top = '0';
  textArea.style.left = '0';

  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    document.execCommand('copy');
    cb(true);
  } catch (err) {
    cb(false);
  }

  document.body.removeChild(textArea);
}
