import { MeFragment } from '../../api/__generated__/apollo-graphql';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AsyncStorageKeys } from '../../constants/AsyncStorageKeys';

export const setLocalStorageAuth = async (accessToken: string, refreshToken: string, user: MeFragment) => {
  try {
    await Promise.all([
      AsyncStorage.setItem(AsyncStorageKeys.accessToken, accessToken),
      AsyncStorage.setItem(AsyncStorageKeys.refreshToken, refreshToken),
      AsyncStorage.setItem(AsyncStorageKeys.currentUser, JSON.stringify(user)),
    ]);
  } catch (e) {
    // do nothing, it will fail on next request.
  }
};
