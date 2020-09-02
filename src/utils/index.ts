import { setItem, getItem } from "./storage";
import { MovieItem } from "../screens/MoviesListView/MoviesListView.types";

export const onAddToStorage = async (movie: MovieItem, setFavourite: (favourite: boolean) => void) => {
  const favourites = await getItem('@favourites') as MovieItem[] || [];
  const favouriteIds = await getItem('@favouriteIds') as number[] || [];
  if (favouriteIds.includes(movie.id)) {
    setFavourite(false);
    const removed = favourites.filter(item => item.id !== movie.id);
    setItem('@favourites', removed);
    setItem('@favouriteIds', removed.map(item => item.id));
  } else {
    setFavourite(true);
    favourites.push(movie);
    favouriteIds.push(movie.id);
    setItem('@favourites', favourites);
    setItem('@favouriteIds', favouriteIds);
  }
};