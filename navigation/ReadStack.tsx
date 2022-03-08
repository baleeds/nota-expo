import { ParamListBase } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ChapterStack } from './ChapterStack';

export interface ReadStackParamList extends ParamListBase {
  Chapter: undefined;
}

const Stack = createNativeStackNavigator<ReadStackParamList>();

export function ReadStack() {
  return (
    <Stack.Navigator initialRouteName="Chapter">
      <Stack.Screen name="Chapter" component={ChapterStack} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}
