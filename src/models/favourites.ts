import {
  types,
  cast,
  applySnapshot,
  } from "mobx-state-tree";

import { Movie } from "./movies";
import { MovieItem } from "../screens/MoviesListView/MoviesListView.types";

  export const Favourites = types.model({
    favourites: types.optional(types.array(Movie), []),
    favouriteIds: types.array(types.number),
  }).
  actions(self => ({
    toggleFavourite(item: MovieItem) {
      if (!self.favouriteIds.includes(item.id)) {
        applySnapshot(self.favourites, [...self.favourites, item]);
        self.favouriteIds.push(item.id);
      } else {
        applySnapshot(self.favourites, self.favourites.filter(movie => movie.id === item.id));
        self.favouriteIds = cast(self.favouriteIds.filter(id => id === item.id));
      }
    },
    removeFavourite() {

    }
  }));
