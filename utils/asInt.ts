export const asInt = (str: any): number | undefined => {
  const maybeInt = str * 1;
  if (typeof maybeInt === 'number') {
    return maybeInt;
  }
  return undefined;
};
