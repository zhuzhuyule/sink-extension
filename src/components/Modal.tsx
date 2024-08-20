import { ComponentChild } from 'preact';

export const Modal = ({
  isOpen,
  onClose,
  children,
  mask = true,
  maskClosable = true,
  showCloseButton,
}: {
  children: ComponentChild;
  isOpen: boolean;
  onClose: () => void;
  mask?: boolean;
  maskClosable?: boolean;
  showCloseButton?: boolean;
}) => {
  return (
    <div
      className={`${isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0'} ${mask ? 'bg-black bg-opacity-50' : 'bg-transparent'} fixed inset-0 z-50 flex flex-col items-center justify-center transition-opacity duration-500`}
      onClick={maskClosable ? onClose : undefined}
    >
      <div
        className='scale-100 transform rounded-lg bg-white p-4 shadow-lg transition-transform duration-300'
        onClick={e => e.stopPropagation()}
      >
        {showCloseButton && (
          <button
            className='absolute right-2 top-2 text-gray-500 transition-all hover:text-gray-700'
            onClick={onClose}
          >
            ✖
          </button>
        )}
        {children}
      </div>
    </div>
  );
};
