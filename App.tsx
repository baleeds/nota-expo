import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import { RootStack } from './navigation/RootStack';
import { ActionSheetProvider } from '@expo/react-native-action-sheet';
import { BookNavigationProvider } from './providers/BookNavigationProvider';
import { ApolloProvider } from '@apollo/client';
import { apolloClient } from './api/apollo';
import { AuthProvider } from './providers/AuthProvider';
import { RootSiblingParent } from 'react-native-root-siblings';

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <ApolloProvider client={apolloClient}>
        <AuthProvider>
          <SafeAreaProvider>
            <ActionSheetProvider>
              <BookNavigationProvider>
                <RootSiblingParent>
                  <>
                    <RootStack />
                    <StatusBar style="dark" />
                  </>
                </RootSiblingParent>
              </BookNavigationProvider>
            </ActionSheetProvider>
          </SafeAreaProvider>
        </AuthProvider>
      </ApolloProvider>
    );
  }
}
