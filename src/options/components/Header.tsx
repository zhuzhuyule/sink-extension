import { Logo } from '@src/assets/img/logo';

export const Header = ({title}:{title: string}) => {
  return (
    <h2 className='mb-8 flex items-center justify-center gap-4 text-center text-2xl font-bold'>
      <Logo />
      {title}
    </h2>
  );
};
