import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ParamListBase, RouteProp } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { Colors } from '../constants/Colors';
import { HomeStack } from './HomeStack';
import { ReadStack } from './ReadStack';
import { CollectionStack } from './CollectionStack';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export interface MainTabsStackParamList extends ParamListBase {
  Home: undefined;
  Read: undefined;
  Collection: undefined;
}

export interface MainTabStackNavProps<T extends keyof MainTabsStackParamList> {
  navigation: NativeStackNavigationProp<MainTabsStackParamList, T>;
  route: RouteProp<MainTabsStackParamList, T>;
}

const Tabs = createBottomTabNavigator<MainTabsStackParamList>();

export function MainTabsStack() {
  return (
    <Tabs.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          paddingTop: 4,
          paddingBottom: 4,
          backgroundColor: Colors.backgroundLight,
        },
        tabBarActiveTintColor: Colors.secondary,
        tabBarIcon: ({ color, size }) => {
          switch (route.name) {
            case 'Home':
              return <Feather name="home" color={color} size={size} />;
            case 'Read':
              return <Feather name="book-open" color={color} size={size} />;
            case 'Collection':
              return <Feather name="user" color={color} size={size} />;
          }
        },
      })}
    >
      <Tabs.Screen name="Home" component={HomeStack} />
      <Tabs.Screen name="Read" component={ReadStack} />
      <Tabs.Screen name="Collection" component={CollectionStack} />
    </Tabs.Navigator>
  );
}
