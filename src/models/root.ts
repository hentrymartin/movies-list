import { useContext, createContext } from "react";
import { types, Instance, onSnapshot } from "mobx-state-tree";

import { Categories } from './categories';

const RootModel = types.model({
  categories: Categories,
});

export const rootStore = RootModel.create({
  categories: {
    items: [],
  },
});

onSnapshot(rootStore, snapshot => console.log("Snapshot: ", snapshot));

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
