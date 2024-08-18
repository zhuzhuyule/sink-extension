import { useEffect } from 'preact/hooks';
import QRCode from 'qrcode';

export const QRImage = ({ text }: { text: string }) => {
  useEffect(() => {
    QRCode.toCanvas(document.getElementById('canvas'), text);
  }, [text]);
  return <canvas id='canvas'></canvas>;
};
