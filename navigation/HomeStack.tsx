import { ParamListBase } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Feed } from '../screens/Feed';
import { Image, View } from 'react-native';
import { Logo } from '../components/Logo';

export interface HomeStackParamList extends ParamListBase {
  Feed: undefined;
}

const Stack = createNativeStackNavigator<HomeStackParamList>();

export function HomeStack() {
  return (
    <Stack.Navigator initialRouteName="Feed">
      <Stack.Screen
        name="Feed"
        component={Feed}
        options={{
          title: '',
          headerLeft: () => {
            return (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                }}
              >
                <Logo height={24} />
              </View>
            );
          },
        }}
      />
    </Stack.Navigator>
  );
}
