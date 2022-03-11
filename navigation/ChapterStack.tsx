import { ParamListBase, RouteProp } from '@react-navigation/native';
import { createDrawerNavigator, DrawerNavigationProp } from '@react-navigation/drawer';
import { Chapter } from '../screens/Chapter';
import { formatTextAddress } from '../utils/formatters/formatTextAddress';
import { ChapterSelector } from '../components/ChapterSelector';
import { useBookNavigation } from '../providers/BookNavigationProvider';
import { ChapterHeaderRight } from '../components/ChapterHeaderRight';
import { Colors } from '../constants/Colors';

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
    <Drawer.Navigator initialRouteName="ChapterText" drawerContent={ChapterSelector}>
      <Drawer.Screen
        name="ChapterText"
        component={Chapter}
        options={({ navigation, route }) => ({
          title: '',
          headerLeft: () => <ChapterHeaderRight navigation={navigation} route={route} />,
          drawerStyle: {
            width: 250, // If changing this, make sure that the chapter options still render correctly.
          },
        })}
      />
    </Drawer.Navigator>
  );
}
