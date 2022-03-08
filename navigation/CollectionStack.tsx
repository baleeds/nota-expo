import { ParamListBase } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MyCollection } from '../screens/MyCollection';

export interface CollectionStackParamList extends ParamListBase {
  MyCollection: undefined;
}

const Stack = createNativeStackNavigator<CollectionStackParamList>();

export function CollectionStack() {
  return (
    <Stack.Navigator initialRouteName="MyCollection">
      <Stack.Screen name="MyCollection" component={MyCollection} />
    </Stack.Navigator>
  );
}
