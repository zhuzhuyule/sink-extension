import { linksAtom } from '@src/util/atom';
import { useAtomValue } from 'jotai';
import LinkTag from './LinkTag';

export const Links = () => {
  const links = useAtomValue(linksAtom);
  return (
    <div>
      {links ? (
        <>
          <div className='grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4'>
            {links.map(link => (
              <LinkTag key={link.slug} url={link.url} shortKey={link.slug} />
            ))}
          </div>
          <div className='mb-4 mt-8 text-center text-gray-400'>No more links</div>
        </>
      ) : (
        'No links found'
      )}
    </div>
  );
};
