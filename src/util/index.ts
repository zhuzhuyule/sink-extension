import { SETTING } from '@src/constant';
import { useEffect, useState } from 'preact/hooks';

const DEBOUNCE_KEY: Record<string, number> = {};
const THROTTLE_KEY: Record<
  string,
  {
    isWaiting: boolean;
    lastArgs: any;
  }
> = {};

export const debounce = (
  key: string,
  cb: (...param: any) => void,
  duration: number = 100
) => {
  return function (...args: any) {
    if (!DEBOUNCE_KEY[key] || Date.now() - DEBOUNCE_KEY[key] > duration) {
      DEBOUNCE_KEY[key] = Date.now();
      cb(...args);
    }
  };
};

export const throttle = (
  key: string,
  cb: (...param: any) => void,
  duration: number = 500
) => {
  if (!THROTTLE_KEY[key]) {
    THROTTLE_KEY[key] = {
      isWaiting: false,
      lastArgs: null,
    };
  }

  return function (...args: any) {
    if (THROTTLE_KEY[key].isWaiting) {
      THROTTLE_KEY[key].lastArgs = args;
    } else {
      THROTTLE_KEY[key].isWaiting = true;
      cb(...args);
      setTimeout(() => {
        if (THROTTLE_KEY[key].lastArgs) {
          cb(...THROTTLE_KEY[key].lastArgs);
        }
        THROTTLE_KEY[key].isWaiting = false;
        THROTTLE_KEY[key].lastArgs = null;
      }, duration);
    }
  };
};

export const request = async (api: string, options?: RequestInit) => {
  const setting = (await chrome.storage.local.get([SETTING.KEY]))[SETTING.KEY];
  return fetch(`${setting[SETTING.INSTANCE_URL]}${api}`, {
    ...options,
    headers: {
      ...options?.headers,
      Authorization: `Bearer ${setting[SETTING.PASSWORD] || ''}`,
    },
  }).then(res => {
    return res.json().catch(() => null);
  });
};

export async function useAPI<T>(api: string, options?: object) {
  const [data, setData] = useState<T>();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    request(api, options)
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
