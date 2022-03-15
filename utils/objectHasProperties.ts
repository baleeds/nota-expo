export const objectHasProperties = (
  obj: { [key: string]: any } | undefined
): boolean => {
  if (!obj) {
    return false;
  }

  return Object.keys(obj).length > 0;
};
