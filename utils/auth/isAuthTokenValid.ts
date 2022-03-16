import { validateTokenDate } from './validateTokenDate';

export const isAccessTokenValid = (token: string | undefined | null) => {
  if (!token) {
    return false;
  }

  return validateTokenDate(token);
};
