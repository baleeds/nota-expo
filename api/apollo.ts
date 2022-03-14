import { ApolloClient, concat, HttpLink, InMemoryCache } from '@apollo/client';
import { Environment } from '../constants/Environment';
import introspection from './__generated__/possibleTypes';
import { setContext } from '@apollo/client/link/context';
import { isAccessTokenValid } from '../utils/auth/isAuthTokenValid';
import { getAccessToken } from '../utils/auth/getAccessToken';

const httpLink = new HttpLink({ uri: Environment.apiUrl });

const authLink = setContext(async (_, { headers }) => {
  const isAuthenticated = await isAccessTokenValid();
  if (isAuthenticated) return { headers };

  const token = await getAccessToken();
  return {
    headers: {
      ...headers,
      Authorization: `Bearer ${token ?? ''}`,
    },
  };
});

const cache = new InMemoryCache({
  /**
   * Default behavior for dataIdFromObject is to use `${typename}:${id}`, meaning we
   * have to use a typename string to derive the cache key (data id).
   * Since we are using global ids, an id will never be shared, regardless of typname,
   * so we can drop the typename dependency.
   *
   * By changing the behavior, we get a simpler and less volatile method
   * of generating cache keys
   */
  // dataIdFromObject: (_obj) => ['id'],
  possibleTypes: introspection.possibleTypes,
});

export const apolloClient = new ApolloClient({
  uri: Environment.apiUrl,
  link: concat(authLink, httpLink),
  cache,
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network',
    },
  },
});
