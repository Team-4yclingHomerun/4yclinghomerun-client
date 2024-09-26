export const getGraphMaxValue = (maxNumber: number): number => {
  if (maxNumber === 0) return 0;

  const strValue = maxNumber.toString();
  const length = strValue.length;

  if (length <= 1) return maxNumber;

  const nextDigit = parseInt(strValue[1]);

  if (nextDigit >= 5) {
    const factor = Math.pow(10, length - 1);
    return Math.ceil(maxNumber / factor) * factor;
  }

  const factor = Math.pow(10, length - 2);
  return Math.ceil(maxNumber / factor) * factor;
};
