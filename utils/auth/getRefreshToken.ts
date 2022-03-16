import AsyncStorage from '@react-native-async-storage/async-storage';
import { AsyncStorageKeys } from '../../constants/AsyncStorageKeys';

export function getRefreshToken(): Promise<string | null> {
  return AsyncStorage.getItem(AsyncStorageKeys.refreshToken);
}
