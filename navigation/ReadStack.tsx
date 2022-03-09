import { ParamListBase } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ChapterStack } from './ChapterStack';
import { MainTabStackNavProps } from './MainTabsStack';

export interface ReadStackParamList extends ParamListBase {
  Chapter: undefined;
}

const Stack = createNativeStackNavigator<ReadStackParamList>();

export function ReadStack(_props: MainTabStackNavProps<'Read'>) {
  return (
    <Stack.Navigator initialRouteName="Chapter">
      <Stack.Screen name="Chapter" component={ChapterStack} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}
