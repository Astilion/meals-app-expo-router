import { createContext, ReactNode, useState } from 'react';

type FavouritesContextType = {
  ids: string[];
  addFavourite: (id: string) => void;
  removeFavourite: (id: string) => void;
};
type FavouritesContextProps = {
  children: ReactNode;
};
export const FavouritesContext = createContext<FavouritesContextType>({
  ids: [],
  addFavourite: (id) => {},
  removeFavourite: (id) => {},
});

const FavouritesContextProvider = ({ children }: FavouritesContextProps) => {
  const [favouriteMealIds, setFavouriteMealId] = useState<string[]>([]);

  const addFavourite = (id: string) => {
    setFavouriteMealId((currentFavIds) => [...currentFavIds, id]);
  };

  const removeFavourite = (id: string) => {
    setFavouriteMealId((currentFavIds) =>
      currentFavIds.filter((mealId) => mealId !== id),
    );
  };

  const value = {
    ids: favouriteMealIds,
    addFavourite: addFavourite,
    removeFavourite: removeFavourite,
  };
  return (
    <FavouritesContext.Provider value={value}>
      {children}
    </FavouritesContext.Provider>
  );
};

export default FavouritesContextProvider;
