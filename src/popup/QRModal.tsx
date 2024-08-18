import { Svg } from '@src/components/Svg';
import { h } from 'preact';
import { useEffect, useRef, useState } from 'preact/hooks';
import qrcodeSvg from '@src/assets/qrcode.svg';
import { QRImage } from './QRImage';

export default function QRModal({ text }: { text: string }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div>
      <Svg
        src={qrcodeSvg}
        className='ml-1 cursor-pointer text-green-500'
        alt='Show QR Code'
        onClick={openModal}
      />

      {isOpen && (
        <div
          className='fixed inset-0 z-50 flex flex-col items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300'
          onClick={closeModal}
        >
          <div
            className='scale-100 transform rounded-lg bg-white p-6 shadow-lg transition-transform duration-300'
            onClick={e => e.stopPropagation()}
          >
            <button
              className='absolute right-2 top-2 text-gray-500 transition-all hover:text-gray-700'
              onClick={closeModal}
            >
              ✖
            </button>
            <QRImage text={text} />
          </div>
        </div>
      )}
    </div>
  );
}
