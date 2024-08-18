import { Logo } from '@src/assets/img/logo';
import { NewShortURL } from './NewShortURL';
import { Footer } from '@src/components/Footer';
import { useLinks } from '@src/util/useLinks';
import { LoadingIcon } from '@src/components/LoadingIcon';

export default function Popup() {
  const { links, setLinks, queryLinks, isLoading } = useLinks(1000);
  return (
    <div className='w-full min-w-[450px] p-5 pb-1'>
      <div className='flex items-center justify-center text-lg'>
        <Logo size={30} />
        <h2 className='ml-2 font-bold'>Skin</h2>
      </div>
      <div className='mt-8 w-full'>
        <div className='flex w-full flex-col items-center justify-center'>
          {isLoading ? (
            <LoadingIcon size={30} />
          ) : (
            <>
              {links ? (
                <NewShortURL
                  links={links}
                  refetch={() => {
                    return queryLinks(1000)
                      .then(data => {
                        if (data.statusMessage) {
                          throw Error();
                        }
                        setLinks(data.links);
                        return data;
                      })
                      .catch(() => {
                        setLinks(undefined);
                      });
                  }}
                />
              ) : (
                'Please update the token in the options Page!'
              )}
            </>
          )}
        </div>
      </div>
      <Footer hideGift hideGithub />
    </div>
  );
}
