import { ParamListBase } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MyCollection } from '../screens/MyCollection';
import { Colors } from '../constants/Colors';

export interface CollectionStackParamList extends ParamListBase {
  MyCollection: undefined;
}

const Stack = createNativeStackNavigator<CollectionStackParamList>();

export function CollectionStack() {
  const isLoggedIn = false;

  return (
    <Stack.Navigator
      initialRouteName="MyCollection"
      screenOptions={{ contentStyle: { backgroundColor: Colors.backgroundWhite } }}
    >
      <Stack.Screen name="MyCollection" component={MyCollection} />
    </Stack.Navigator>
  );
}
