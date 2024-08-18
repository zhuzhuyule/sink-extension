import githubSvg from '@src/assets/github.svg';
import settingSvg from '@src/assets/setting.svg';
import { Svg } from '@src/components/Svg';
import { NewShortURL } from './NewShortURL';
import { Logo } from '@src/assets/img/logo';
import { SplitLine } from '@src/components/SplitLine';

export default function Popup() {
  const optionsUrl = chrome.runtime.getURL('src/options/index.html');

  return (
    <div class='w-full min-w-[512px] px-4 pt-4'>
      <div class='flex items-center justify-center text-lg'>
        <Logo size={30} />
        <h2 class='ml-2 font-bold'>Skin</h2>
      </div>
      <SplitLine />
      <div class='w-full'>
        <div class='flex w-full flex-col items-center justify-center'>
          <NewShortURL />
        </div>
        <hr class='MuiDivider-root MuiDivider-horizontal css-w2e6ki !mb-2 !mt-4 opacity-40' />
        <div class='mb-2 flex w-full flex-row items-center justify-between'>
          <div class='flex flex-row items-center justify-start'>
            <a href={optionsUrl} target='_blank'>
              <Svg src={settingSvg} />
            </a>
            <a
              href='https://github.com/zhuzhuyule/skin-extension'
              target='_blank'
            >
              <Svg src={githubSvg} />
            </a>
          </div>
          <div class='flex flex-row items-center justify-end'>
            <a
              class='flex flex-row items-center justify-start text-sm text-blue-600 underline hover:opacity-80'
              href='https://ause.cc'
              target='_blank'
            >
              <span class='mr-1'>Go to my Slash</span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
                class='lucide lucide-external-link h-auto w-4'
              >
                <path d='M15 3h6v6' />
                <path d='M10 14L21 3' />
                <path d='M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6' />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
