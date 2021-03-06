import { ParamListBase, RouteProp } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ChapterStack } from './ChapterStack';
import { MainTabStackNavProps } from './MainTabsStack';
import { formatTextAddress } from '../utils/formatters/formatTextAddress';
import { useBookNavigation } from '../providers/BookNavigationProvider';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { Verse } from '../screens/Verse';
import { VerseBookmarkButton } from '../components/VerseBookmarkButton';
import { Annotate } from '../screens/Annotate';
import { AnnotateHeaderRight } from '../components/AnnotateHeaderRight';
import { VerseLoader } from '../components/VerseLoader';
import { AnnotationFragment } from '../api/__generated__/apollo-graphql';

export interface ReadStackParamList extends ParamListBase {
  Chapter: undefined;
  Verse: { verseNumber: number };
  Annotate: { verseNumber: number; annotation?: Pick<AnnotationFragment, 'id' | 'text'> };
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
          title: formatTextAddress(bookName, chapterNumber, route.params.verseNumber),
          headerRight: () => (
            <VerseLoader bookName={bookName} chapterNumber={chapterNumber} verseNumber={route.params.verseNumber}>
              {({ verse }) => <VerseBookmarkButton verse={verse} />}
            </VerseLoader>
          ),
        })}
      />
      <Stack.Screen
        name="Annotate"
        component={Annotate}
        options={({ route, navigation }) => ({
          title: '',
          headerBackTitle: formatTextAddress(bookName, chapterNumber, route.params.verseNumber),
          headerRight: () => <AnnotateHeaderRight route={route} navigation={navigation} />,
        })}
      />
    </Stack.Navigator>
  );
}
