import { h } from 'preact';

import refreshSvg from '@src/assets/refresh.svg';
import addSvg from '@src/assets/add.svg';
import settingSvg from '@src/assets/setting.svg';
import githubSvg from '@src/assets/github.svg';
import { Logo } from '@src/assets/img/logo';
import { NewShortURL } from './NewShortURL';
import { Svg } from '@src/components/Svg';

export default function Popup() {
  return (
    <div class='w-full min-w-[512px] px-4 pt-4'>
      <div class='mt-4 w-full'>
        <div class='flex w-full flex-col items-center justify-center'>
          <NewShortURL />
          <p>No shortcut found.</p>
        </div>
        <hr class='MuiDivider-root MuiDivider-horizontal css-w2e6ki !mb-2 !mt-4 opacity-40' />
        <div class='mb-2 flex w-full flex-row items-center justify-between'>
          <div class='flex flex-row items-center justify-start'>
            <button
              class='MuiIconButton-root MuiIconButton-variantPlain MuiIconButton-colorNeutral MuiIconButton-sizeSm css-13t3rmv'
              type='button'
            >
              <Svg src={settingSvg} />
            </button>
            <a
              href='https://github.com/yourselfhosted/slash'
              target='_blank'
              class='MuiIconButton-root MuiIconButton-variantPlain MuiIconButton-colorNeutral MuiIconButton-sizeSm css-13t3rmv'
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
