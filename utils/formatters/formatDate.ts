import dayjs from 'dayjs';
import { formatFallback } from './formatFallback';

export type FormattedDateType = 'simple' | 'full';

export const formatDate = (date: string | Date | null | undefined, type: FormattedDateType = 'simple'): string => {
  if (!date) return formatFallback(date);

  switch (type) {
    case 'simple':
      return toSimpleDate(date);
    case 'full':
      return formatFallback(toDateTime(date));
  }
};

const toSimpleDate = (date: string | Date) => {
  const currentTime = dayjs();
  const inputTime = dayjs(date);

  if (currentTime.isSame(inputTime, 'day')) {
    return 'Today';
  }
  if (currentTime.week() === inputTime.week()) {
    return inputTime.from(currentTime);
  }
  if (currentTime.year() === inputTime.year()) {
    return inputTime.format('MMM D');
  }

  return inputTime.format('MMM D, YYYY');
};

const toDateTime = (date: string | Date, format: string | undefined = 'M/D/YYYY - h:mm A') => {
  if (!date) {
    return undefined;
  }

  const inputTime = dayjs(date);
  const formattedDate = inputTime.format(format);

  if (formattedDate === 'Invalid Date') {
    return undefined;
  }
  return formattedDate;
};
