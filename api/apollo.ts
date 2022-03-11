import { ApolloClient, InMemoryCache } from '@apollo/client';
import { Environment } from '../constants/Environment';

export const apolloClient = new ApolloClient({
  uri: Environment.apiUrl,
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network',
    },
  },
});
