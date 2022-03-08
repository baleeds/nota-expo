import { ParamListBase, RouteProp } from '@react-navigation/native';
import { createDrawerNavigator, DrawerNavigationProp } from '@react-navigation/drawer';
import { Chapter } from '../screens/Chapter';

export interface ChapterStackParamList extends ParamListBase {
  ChapterText: undefined;
}

export type ChapterStackNavProps<T extends keyof ChapterStackParamList> = {
  navigation: DrawerNavigationProp<ChapterStackParamList, T>;
  route: RouteProp<ChapterStackParamList, T>;
};

const Drawer = createDrawerNavigator<ChapterStackParamList>();

export function ChapterStack() {
  return (
    <Drawer.Navigator initialRouteName="ChapterText">
      <Drawer.Screen name="ChapterText" component={Chapter} />
    </Drawer.Navigator>
  );
}
