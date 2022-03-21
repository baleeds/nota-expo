import { ToastConfig } from 'react-native-toast-message';
import { ToastMessage } from '../components/ToastMessage';

export const toastConfig: ToastConfig = {
  success: ({ text1 }) => {
    return <ToastMessage message={text1 ?? ''} type="success" />;
  },
  info: ({ text1 }) => {
    return <ToastMessage message={text1 ?? ''} type="default" />;
  },
  error: ({ text1 }) => {
    return <ToastMessage message={text1 ?? ''} type="error" />;
  },
};
