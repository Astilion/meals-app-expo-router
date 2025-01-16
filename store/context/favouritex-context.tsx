import { createContext, ReactNode } from 'react';

type FavouritesContextType = {
  ids: string[];
  addFavourite: (id: string) => void;
  removeFavourite: (id: string) => void;
};
type FavouritesContextProps = {
  children: ReactNode;
};
const FavouritesContext = createContext<FavouritesContextType>({
  ids: [],
  addFavourite: (id) => {},
  removeFavourite: (id) => {},
});

const FavouritesContextProvider = ({ children }: FavouritesContextProps) => {
  return <FavouritesContext.Provider>{children}</FavouritesContext.Provider>;
};

export default FavouritesContextProvider;
