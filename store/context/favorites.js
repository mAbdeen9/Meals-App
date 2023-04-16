import { createContext, useState } from "react";

export const FavoriteContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

export default FavoriteContextProvider = ({ children }) => {
  const [favoriteMealsId, setFavoriteMealsId] = useState([]);

  const addFavorite = (id) => {
    setFavoriteMealsId((currentMealsIds) => [...currentMealsIds, id]);
  };

  const removeFavorite = (id) => {
    setFavoriteMealsId((currentMealsIds) =>
      currentMealsIds.filter((mealId) => mealId !== id)
    );
  };

  const value = {
    ids: favoriteMealsId,
    addFavorite,
    removeFavorite,
  };

  return (
    <FavoriteContext.Provider value={value}>
      {children}
    </FavoriteContext.Provider>
  );
};
