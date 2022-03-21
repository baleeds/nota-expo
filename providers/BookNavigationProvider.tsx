import React, { useContext, useState } from 'react';

export interface BookNavigationProviderState {
  bookName: string;
  chapterNumber: number;
  change: (args: { bookName: string; chapterNumber: number }) => void;
}

export const BookNavigationContext = React.createContext<BookNavigationProviderState>({
  bookName: 'genesis',
  chapterNumber: 1,
  change: () => {},
});

export function useBookNavigation() {
  const context = useContext<BookNavigationProviderState>(BookNavigationContext);
  return context;
}

export const BookNavigationProvider: React.FC = ({ children }) => {
  const [state, setState] = useState<Pick<BookNavigationProviderState, 'bookName' | 'chapterNumber'>>({
    bookName: 'genesis',
    chapterNumber: 1,
  });

  const contextValue = React.useMemo<BookNavigationProviderState>(
    () => ({
      ...state,
      change: setState,
    }),
    [state, setState],
  );

  return <BookNavigationContext.Provider value={contextValue}>{children}</BookNavigationContext.Provider>;
};
