import { Logo } from '@src/assets/img/logo';

const Devtools = () => {
  return (
    <div className='flex h-screen flex-1 flex-col justify-center bg-[#673ab8] p-8 text-center text-lg'>
      <Logo />
      <p className='text-white'>Hello Vite + Preact!</p>
      <p className='text-white'>
        <a
          className='border-b-2'
          href='https://preactjs.com/'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn Preact
        </a>
      </p>
      <p data-testid='devtools_text' className='p-6 text-3xl text-purple-400'>
        Dev tools panel
      </p>
    </div>
  );
};

export default Devtools;
