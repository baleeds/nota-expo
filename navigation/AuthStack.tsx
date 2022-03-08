import { NavigationContainer, ParamListBase } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Chapter } from '../screens/Chapter';
import { Login } from '../screens/Login';

export interface AuthStackParamList extends ParamListBase {
  Login: undefined;
}

const Stack = createNativeStackNavigator<AuthStackParamList>();

export function AuthStack() {
  return (
    <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
}
