import 'dotenv/config';
import { ConfigContext } from '@expo/config';

export default ({ config }: ConfigContext): any => ({
  ...config,
  extra: {
    apiUrl: process.env.API_URL ?? '',
  },
});
