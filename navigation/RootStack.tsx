import { NavigationContainer, ParamListBase } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainTabsStack } from './MainTabsStack';
import { AuthStack } from './AuthStack';

export interface RootStackParamList extends ParamListBase {
  Main: undefined;
  Auth: undefined;
}

const Stack = createNativeStackNavigator<RootStackParamList>();

export function RootStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Main"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Main" component={MainTabsStack} />
        <Stack.Screen name="Auth" component={AuthStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
