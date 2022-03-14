import { ParamListBase } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Colors } from '../constants/Colors';
import { Login } from '../screens/Login';

export interface LoginStackParamList extends ParamListBase {
  Login: undefined;
}

const Stack = createNativeStackNavigator<LoginStackParamList>();

export function LoginStack() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false, contentStyle: { backgroundColor: Colors.backgroundWhite } }}
    >
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
}
