import AsyncStorage from '@react-native-async-storage/async-storage';
import { AsyncStorageKeys } from '../../constants/AsyncStorageKeys';

export const clearLocalStorageAuth = () => {
  return Promise.all([
    AsyncStorage.removeItem(AsyncStorageKeys.accessToken),
    AsyncStorage.removeItem(AsyncStorageKeys.refreshToken),
    AsyncStorage.removeItem(AsyncStorageKeys.currentUser),
  ]);
};
