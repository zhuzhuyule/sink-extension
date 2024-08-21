import { SplitLine } from '@src/components/SplitLine';
import { copyToClipboard, debounce } from '@src/util';
import { linksAtom } from '@src/util/atom';
import { useSettings } from '@src/util/useSettings';
import { useAtomValue } from 'jotai';
import { useState } from 'preact/hooks';

export const Links = () => {
  const links = useAtomValue(linksAtom);
  const { instanceUrl } = useSettings();
  const [text, setText] = useState('');

  if (!links) return null;
  return (
    <div>
      <SplitLine />
      <div>
        <input
          type='text'
          placeholder='Filter by slug'
          value={text}
          onInput={e =>
            debounce(
              'slug-filter',
              str => setText(str),
              500
            )(e.currentTarget.value)
          }
          className='mb-3 block w-full rounded-md border border-gray-300 px-1 py-1 shadow-sm focus:border-gray-800 focus:outline-none focus:ring-gray-800 sm:text-sm'
        />
      </div>
      {links
        .filter(link => link.slug.includes(text))
        .map(link => (
          <span
            key={link.id}
            onClick={() => {
              copyToClipboard(`${instanceUrl}/${link.slug}`, () => {});
            }}
            class='mb-2 mr-2 inline-block cursor-pointer rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700 hover:bg-gray-300'
          >
            {link.slug}
          </span>
        ))}
    </div>
  );
};
