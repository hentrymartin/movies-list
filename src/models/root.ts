import { useContext, createContext } from "react";
import { types, Instance, onSnapshot } from "mobx-state-tree";

import { Categories } from './categories';
import { MoviesList } from "./movies";
import { Favourites } from "./favourites";

const RootModel = types.model({
  categories: Categories,
  moviesList: MoviesList,
  favourites: Favourites,
});

export const rootStore = RootModel.create({
  categories: {
    items: [],
  },
  moviesList: {
    list: [],
    name: '',
    page: 1,
    loading: false,
  },
  favourites: {}
});

export type RootInstance = Instance<typeof RootModel>;
const RootStoreContext = createContext<null | RootInstance>(null);

export const Provider = RootStoreContext.Provider;

export const useMst = () => {
  const store = useContext(RootStoreContext);
  if (store === null) {
    throw new Error("Please add some values to the store. Store cannot be null.");
  }
  return store;
}
