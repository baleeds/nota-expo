import { NavigationProp, ParamListBase, RouteProp } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from '../screens/Login';
import { SignUp } from '../screens/SignUp';

export interface AuthStackParamList extends ParamListBase {
  Login: undefined;
  SignUp: undefined;
}

export type AuthStackNavProps<T extends keyof AuthStackParamList> = {
  navigation: NavigationProp<AuthStackParamList, T>;
  route: RouteProp<AuthStackParamList, T>;
};

const Stack = createNativeStackNavigator<AuthStackParamList>();

export function AuthStack() {
  return (
    <Stack.Navigator initialRouteName="SignUp" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
}
