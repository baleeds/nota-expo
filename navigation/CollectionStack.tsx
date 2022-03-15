import { ParamListBase } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MyCollection } from '../screens/MyCollection';
import { Button } from '../components/Button';
import { useAuth } from '../providers/AuthProvider';

export interface CollectionStackParamList extends ParamListBase {
  MyCollection: undefined;
}

const Stack = createNativeStackNavigator<CollectionStackParamList>();

export function CollectionStack() {
  const { logout } = useAuth();

  return (
    <Stack.Navigator initialRouteName="MyCollection">
      <Stack.Screen
        name="MyCollection"
        component={MyCollection}
        options={{
          title: 'Collection',
          headerRight: () => (
            <Button type="ghostSecondary" onPress={logout}>
              Log out
            </Button>
          ),
        }}
      />
    </Stack.Navigator>
  );
}
