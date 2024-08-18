import githubSvg from '@src/assets/github.svg';
import settingSvg from '@src/assets/setting.svg';
import webSvg from '@src/assets/web.svg';
import { Svg } from '@src/components/Svg';
import { NewShortURL } from './NewShortURL';
import { Logo } from '@src/assets/img/logo';
import { SplitLine } from '@src/components/SplitLine';
import { useSettings } from '@src/util/useSettings';
import { MY_GITHUB } from '@src/constant';

export default function Popup() {
  const optionsUrl = chrome.runtime.getURL('src/options/index.html');
  const { instanceUrl } = useSettings();

  return (
    <div class='w-full min-w-[450px] px-4 pt-4'>
      <div class='flex items-center justify-center text-lg'>
        <Logo size={30} />
        <h2 class='ml-2 font-bold'>Skin</h2>
      </div>
      <SplitLine />
      <div class='w-full'>
        <div class='flex w-full flex-col items-center justify-center'>
          <NewShortURL />
        </div>
        <SplitLine />
        <div class='mb-2 flex w-full items-center justify-between'>
          <div class='flex items-center justify-start gap-2'>
            <a href={optionsUrl} target='_blank'>
              <Svg src={settingSvg} alt="Open the setting page" />
            </a>
            <a href={instanceUrl} target='_blank' >
              <Svg src={webSvg} alt="Go to my Skin" />
            </a>
            <a href={MY_GITHUB} target='_blank'>
              <Svg src={githubSvg} alt="Go to Github" />
            </a>
          </div>
          <p className='text-right text-xs text-gray-500'>
            Create by{' '}
            <a className='text-blue-500' href={MY_GITHUB}>
              zhuzhuyule
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
