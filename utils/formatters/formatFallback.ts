export const formatFallback = (value: string | number | undefined | null): string => {
  return value?.toString() || '–';
};
