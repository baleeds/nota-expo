import { MeFragment } from '../../api/__generated__/apollo-graphql';
import * as Yup from 'yup';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AsyncStorageKeys } from '../../constants/AsyncStorageKeys';

const meFragmentSchema = Yup.object().shape({
  id: Yup.string().required(),
  email: Yup.string().required(),
  // isAdmin: Yup.boolean().required(),
});

export const getUserFromLocalStorage = async (): Promise<MeFragment | undefined> => {
  const currentUserString = await AsyncStorage.getItem(AsyncStorageKeys.currentUser);

  if (!currentUserString) {
    return undefined;
  }

  try {
    const user = JSON.parse(currentUserString);
    if (meFragmentSchema.isValidSync(user)) {
      return user;
    }
  } catch {
    return undefined;
  }
};
