import { ParamListBase, RouteProp } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ChapterStack } from './ChapterStack';
import { MainTabStackNavProps } from './MainTabsStack';
import { formatTextAddress } from '../utils/formatters/formatTextAddress';
import { useBookNavigation } from '../providers/BookNavigationProvider';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { Verse } from '../screens/Verse';

export interface ReadStackParamList extends ParamListBase {
  Chapter: undefined;
  Verse: { verseId: number };
}

export type ReadStackNavProps<T extends keyof ReadStackParamList> = {
  navigation: DrawerNavigationProp<ReadStackParamList, T>;
  route: RouteProp<ReadStackParamList, T>;
};

const Stack = createNativeStackNavigator<ReadStackParamList>();

export function ReadStack(_props: MainTabStackNavProps<'Read'>) {
  const { bookName, chapterNumber } = useBookNavigation();

  return (
    <Stack.Navigator initialRouteName="Chapter">
      <Stack.Screen name="Chapter" component={ChapterStack} options={{ headerShown: false }} />
      <Stack.Screen
        name="Verse"
        component={Verse}
        options={({ route }) => ({
          title: formatTextAddress(bookName, chapterNumber, route.params.verseId),
        })}
      />
    </Stack.Navigator>
  );
}
