import { NavigationProp, ParamListBase, RouteProp } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Colors } from '../constants/Colors';
import { Login } from '../screens/Login';
import { SignUp } from '../screens/SignUp';

export interface LoginStackParamList extends ParamListBase {
  Login: undefined;
  SignUp: undefined;
}

export type LoginStackNavProps<T extends keyof LoginStackParamList> = {
  navigation: NavigationProp<LoginStackParamList, T>;
  route: RouteProp<LoginStackParamList, T>;
};

const Stack = createNativeStackNavigator<LoginStackParamList>();

export function LoginStack() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false, contentStyle: { backgroundColor: Colors.backgroundWhite } }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
}
