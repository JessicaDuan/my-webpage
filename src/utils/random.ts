export const getRandomInteger = (min: number, max: number) => Math.round(Math.random() * (max - min + 1) + min);

export const getRandomDecimal = () => Math.round(Math.random() * 10) / 10;

export const getRandomFromList = (origList: any[], count: number) => {
  origList.sort(() => 0.5 - Math.random());
  return origList.slice(0, count);
};
