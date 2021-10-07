import { isEmpty } from './type';

export function hexToRgba(hex: string, alpha?: number) {
  if (!hex.startsWith('#') || (hex.length !== 4 && hex.length !== 7)) throw Error('');
  let hexString = hex.slice(1);
  if (hexString.length === 3) {
    hexString = hexString
      .split('')
      .map((ch) => `${ch}${ch}`)
      .join();
  }
  const r = parseInt(hexString.slice(0, 2), 16);
  const g = parseInt(hexString.slice(2, 4), 16);
  const b = parseInt(hexString.slice(4, 6), 16);
  if (isEmpty(alpha)) {
    return `rgb(${r},${g},${b})`;
  }
  let a = alpha;
  if (a < 0) a = 0;
  if (a > 1) a = 1;
  return `rgba(${r},${g},${b},${a})`;
}
