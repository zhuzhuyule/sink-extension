import { useEffect, useRef } from 'preact/hooks';
import QRCode from 'qrcode';

export const QRImage = ({ text }: { text: string }) => {
  const ref = useRef<HTMLCanvasElement | null>(null);
  useEffect(() => {
    QRCode.toCanvas(document.getElementById('canvas'), text, () => {
      document.body.style.minHeight = `${ref.current!.height + 60}px`;
      document.body.style.minWidth = `${ref.current!.width + 60}px`;
    });
    return () => {
      document.body.style.minHeight = 'unset';
      document.body.style.minWidth = 'unset';
    }
  }, [text]);
  return <canvas ref={ref} id='canvas'></canvas>;
};
