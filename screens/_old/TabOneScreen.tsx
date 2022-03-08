import { StyleSheet, Text, View } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { RootTabScreenProps } from '../types';
import Colors from '../../constants/Colors';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  const text: string[] = [
    'This is text number one that is really long and stuff.',
    'Text two is quite short.',
    'Although the second is short, the third is pretty long.',
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} />
      {/*<EditScreenInfo path="/screens/TabOneScreen.tsx" />*/}
      <View style={styles.textContainer}>
        <Text style={styles.textContainer}>
          {text.map((t, i) => (
            <Text
              style={[styles.text, i > 0 ? styles.active : undefined]}
              onPress={() =>
                navigation.navigate('Modal', {
                  textId: i,
                })
              }
            >
              {t}
            </Text>
          ))}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  textContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    lineHeight: 20,
  },
  text: {
    padding: 4,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  active: {
    backgroundColor: '#dcdcdc',
  },
});
