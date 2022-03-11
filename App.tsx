import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import { RootStack } from './navigation/RootStack';
import { ActionSheetProvider } from '@expo/react-native-action-sheet';
import { BookNavigationProvider } from './providers/BookNavigationProvider';
import { ApolloProvider } from '@apollo/client';
import { apolloClient } from './api/apollo';

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <ApolloProvider client={apolloClient}>
        <SafeAreaProvider>
          <ActionSheetProvider>
            <BookNavigationProvider>
              <>
                <RootStack />
                <StatusBar style="dark" />
              </>
            </BookNavigationProvider>
          </ActionSheetProvider>
        </SafeAreaProvider>
      </ApolloProvider>
    );
  }
}
