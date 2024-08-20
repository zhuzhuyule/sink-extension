import { linksAtom } from '@src/util/atom';
import { useAtomValue } from 'jotai';
import LinkTag from './LinkTag';

export const Links = () => {
  const links = useAtomValue(linksAtom);
  return (
    <div className='grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4'>
      {links
        ? links.map(link => <LinkTag url={link.url} shortKey={link.slug} />)
        : ''}
    </div>
  );
};
