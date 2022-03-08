import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ParamListBase } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { Colors } from '../constants/Colors';
import { HomeStack } from './HomeStack';
import { ReadStack } from './ReadStack';
import { CollectionStack } from './CollectionStack';

export interface MainTabsStackParamList extends ParamListBase {
  Home: undefined;
  Read: undefined;
  Collection: undefined;
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
