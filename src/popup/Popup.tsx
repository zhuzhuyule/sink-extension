
import { Logo } from '@src/assets/img/logo';
import { NewShortURL } from './NewShortURL';
import { Footer } from '@src/components/Footer';


export default function Popup() {
  return (
    <div className='w-full min-w-[450px] p-5 pb-1'>
      <div className='flex items-center justify-center text-lg'>
        <Logo size={30} />
        <h2 className='ml-2 font-bold'>Skin</h2>
      </div>
      <div className='w-full mt-2'>
        <div className='flex w-full flex-col items-center justify-center'>
          <NewShortURL />
        </div>
      </div>
      <Footer hideGift hideGithub />
    </div>
  );
}
