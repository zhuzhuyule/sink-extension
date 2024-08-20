import { SplitLine } from '@src/components/SplitLine';
import { Header } from './Header';
import { Logo } from '@src/assets/img/logo';
import { useAtomValue } from 'jotai';
import { linksAtom } from '@src/util/atom';
import LinkTag from './LinkTag';
import ComputerSvg from '@src/assets/computer.svg?react';

export const Links = () => {
  const links = useAtomValue(linksAtom);
  return (
    <div className='m-5 flex flex-1 flex-col'>
      <h2 className='flex items-center justify-start gap-4 text-center text-2xl font-bold'>
        <Logo />
        Links
        {links && <ComputerSvg className='ml-auto w-10 h-10 cursor-pointer text-green-500' />}
      </h2>
      <SplitLine />
      <div className='grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4'>
        {links
          ? links.map(link => <LinkTag url={link.url} shortKey={link.slug} />)
          : ''}
      </div>
    </div>
  );
};
