
import { Logo } from '@src/assets/img/logo';
import { NewShortURL } from './NewShortURL';
import { Footer } from '@src/components/Footer';


export default function Popup() {
  return (
    <div class='w-full min-w-[450px] p-5 pb-1'>
      <div class='flex items-center justify-center text-lg'>
        <Logo size={30} />
        <h2 class='ml-2 font-bold'>Skin</h2>
      </div>
      <div class='w-full mt-2'>
        <div class='flex w-full flex-col items-center justify-center'>
          <NewShortURL />
        </div>
      </div>
      <Footer hideGift hideGithub />
    </div>
  );
}
