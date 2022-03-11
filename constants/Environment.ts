import Constants from 'expo-constants';

interface EnvironmentVariables {
  apiUrl: string;
}

export const Environment = Constants.manifest?.extra as any as EnvironmentVariables;
