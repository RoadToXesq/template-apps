export const onlyNumbers = (text: string): string => {
  const numbers = text.match(/\d+/g);

  return numbers ? numbers.join('') : '';
};
