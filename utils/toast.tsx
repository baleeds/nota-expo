import ToastLib from 'react-native-root-toast';
import { ToastMessageProps, ToastMessage } from '../components/ToastMessage';

export type ToastOptions = {
  duration?: number;
} & ToastMessageProps;

export interface ToastInstance {
  hide: () => void;
}

export function toast(options: ToastOptions): ToastInstance {
  const { duration = 3000, ...toastMessageProps } = options;

  const message = <ToastMessage {...toastMessageProps} />;
  const libInstance = ToastLib.show(message as any as string, {
    duration,
    backgroundColor: undefined,
    shadow: false,
    opacity: 1,
    containerStyle: {
      backgroundColor: undefined,
      padding: 0,
    },
  });

  return {
    hide: () => ToastLib.hide(libInstance),
  };
}
