export function getValidNumInRange(num: number, range: [number, number]) {
  const [min, max] = range;
  if (num > max) return max;
  if (num < min) return min;
  return num;
}
