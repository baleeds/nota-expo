import { validateTokenDate } from './validateTokenDate';
import { getAccessToken } from './getAccessToken';

export const isAccessTokenValid = async () => {
  const token = await getAccessToken();

  if (!token) {
    return false;
  }

  return validateTokenDate(token);
};
