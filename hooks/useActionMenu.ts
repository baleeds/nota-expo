import { useActionSheet } from '@expo/react-native-action-sheet';
import { useCallback } from 'react';

interface ActionSheetItem {
  displayName: string;
  action: () => void;
  hide?: boolean;
}

interface ActionSheetArgs {
  showCancel?: boolean;
  cancelText?: string;
}

const getActionSheetOptions = (itemsRegardlessOfHideStatus: ActionSheetItem[], args: ActionSheetArgs = {}) => {
  const items = itemsRegardlessOfHideStatus.filter((i) => i.hide !== true);
  const { showCancel = true, cancelText = 'Cancel' } = args;

  const options = items.map((i) => i.displayName);
  if (showCancel) options.push(cancelText);

  return [
    {
      options,
      cancelButtonIndex: showCancel ? options.length - 1 : undefined,
    },
    (index: number | undefined) => {
      items[index ?? -1]?.action();
    },
  ] as const;
};

export function useActionMenu(items: ActionSheetItem[], args?: ActionSheetArgs) {
  const { showActionSheetWithOptions } = useActionSheet();

  const show = useCallback(() => {
    const [options, handler] = getActionSheetOptions(items, args);
    showActionSheetWithOptions(options, handler);
  }, [showActionSheetWithOptions, items, args]);

  return { show };
}
