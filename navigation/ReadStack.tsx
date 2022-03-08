import { ParamListBase } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Chapter } from '../screens/Chapter';

export interface ReadStackParamList extends ParamListBase {
  Chapter: undefined;
}

const Stack = createNativeStackNavigator<ReadStackParamList>();

export function ReadStack() {
  return (
    <Stack.Navigator initialRouteName="Chapter">
      <Stack.Screen name="Chapter" component={Chapter} />
    </Stack.Navigator>
  );
}
