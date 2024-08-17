export const JumpLink = ({ link }: { link?: string }) => {
  return link ? (
    <a
      class='flex flex-row items-center justify-start text-sm text-blue-500 underline hover:opacity-80'
      href={link}
      target='_blank'
    >
      <span class='mr-1'>Go to my Skin</span>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
        class='lucide lucide-external-link h-auto w-4'
      >
        <path d='M15 3h6v6'></path>
        <path d='M10 14 21 3'></path>
        <path d='M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6'></path>
      </svg>
    </a>
  ) : null;
};
