import jwtDecode from 'jwt-decode';

export const validateTokenDate = (token: string): boolean => {
  const decodedToken = jwtDecode<{ [key: string]: number }>(token);

  if (!decodedToken) {
    return false;
  }

  const now = new Date();
  return now.getTime() < decodedToken.exp * 1000;
};
