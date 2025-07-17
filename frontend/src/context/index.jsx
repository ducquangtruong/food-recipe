import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [searchParam, setSearchParam] = useState("");
  const [loading, setLoading] = useState(false);
  const [recipeList, setRecipeList] = useState([]);
  const [recipeDetailsData, setRecipeDetailsData] = useState(null);
  const [favoritesList, setFavoritesList] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await fetch(
        `http://localhost:8080/api/v1/recipes?search=${searchParam}`
      );
      const data = await res.json();
      if (data) {
        setRecipeList(data);
        setLoading(false);
        setSearchParam("");
      }
    } catch (e) {
      console.log(e);
      setLoading(false);
      setSearchParam("");
    }
  };

  function handleAddToFavorite(currentItem) {
    const newFavoritesList = [...favoritesList];
    const index = newFavoritesList.findIndex(
      (item) => item.id === currentItem.id
    );

    if (index === -1) {
      newFavoritesList.push(currentItem);
    } else {
      newFavoritesList.splice(index);
    }

    setFavoritesList(newFavoritesList);
  }

  console.log(favoritesList);

  return (
    <GlobalContext.Provider
      value={{
        searchParam,
        loading,
        recipeList,
        recipeDetailsData,
        favoritesList,
        setRecipeDetailsData,
        setSearchParam,
        handleSubmit,
        handleAddToFavorite,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
