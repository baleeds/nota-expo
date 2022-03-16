import { getRefreshToken } from './getRefreshToken';
import { Environment } from '../../constants/Environment';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AsyncStorageKeys } from '../../constants/AsyncStorageKeys';

export const requestNewAccessToken = async () => {
  const refreshToken = await getRefreshToken();

  try {
    const fetchResult = await fetch(Environment.apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `
          mutation {
            refreshToken(refreshToken: "${refreshToken}") {
              result {
                accessToken
                refreshToken
              }
              messages {
                field
                message
              }
            }
          }
        `,
      }),
    });

    const refreshResponse = await fetchResult.json();

    const { accessToken } = refreshResponse?.data?.refreshToken?.result || {};

    if (accessToken) {
      await AsyncStorage.setItem(AsyncStorageKeys.accessToken, accessToken);
      return accessToken;
    }

    return undefined;
  } catch (e) {
    throw new Error('Failed to fetch fresh access token');
  }
};
