import React, { useCallback, useContext, useEffect, useState } from 'react';
import { MeFragment } from '../api/__generated__/apollo-graphql';
import { getUserFromLocalStorage } from '../utils/auth/getUserFromLocalStorage';
import { isAccessTokenValid } from '../utils/auth/isAuthTokenValid';
import { setLocalStorageAuth } from '../utils/auth/setLocalStorageAuth';
import { clearLocalStorageAuth } from '../utils/auth/clearLocalStorageAuth';

export interface IAuthContext {
  isLoading: boolean;
  user?: MeFragment;
  isSessionValid: boolean;
  login: (payload: LoginPayload) => void;
  logout: () => void;
}

export interface LoginPayload {
  user: MeFragment;
  accessToken: string;
  refreshToken: string;
}

export const AuthContext = React.createContext<IAuthContext>({
  isLoading: false,
  user: undefined,
  isSessionValid: false,
  login: () => {},
  logout: () => {},
});

export const useAuth = () => {
  return useContext<IAuthContext>(AuthContext);
};

export const AuthProvider: React.FC = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState<MeFragment | undefined>(undefined);
  const [isSessionValid, setIsSessionValid] = useState(false);

  useEffect(() => {
    const loadFromStorage = async () => {
      const cachedUser = await getUserFromLocalStorage();
      const isValid = await isAccessTokenValid();

      setUser(cachedUser);
      setIsSessionValid(isValid);
      setIsLoading(false);
    };

    loadFromStorage();
  }, []);

  const login = useCallback(
    ({ accessToken, refreshToken, user }: LoginPayload) => {
      setLocalStorageAuth(accessToken, refreshToken, user).then(() => setUser(user));
    },
    [setUser],
  );

  const logout = useCallback(() => {
    clearLocalStorageAuth().then(() => setUser(undefined));
  }, [setUser]);

  const contextValue = React.useMemo(
    () => ({ isLoading, user, isSessionValid, login, logout }),
    [isLoading, user, isSessionValid, login, logout],
  );

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};
