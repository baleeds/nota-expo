import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import { RootStack } from './navigation/RootStack';
import { ActionSheetProvider } from '@expo/react-native-action-sheet';

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <ActionSheetProvider>
          <>
            <RootStack />
            <StatusBar style="dark" />
          </>
        </ActionSheetProvider>
      </SafeAreaProvider>
    );
  }
}
