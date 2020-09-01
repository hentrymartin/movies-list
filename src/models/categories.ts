import {
  types,
  Instance,
  SnapshotIn,
  cast,
  getParent,
  destroy
  } from "mobx-state-tree";

  export const Category = types.model({
    id: types.number,
    name: types.string,
  });

  export const Categories = types.model({
    items: types.optional(types.array(Category), []),
  }).
  actions(self => ({
    setCategories(categories: Array<{
      id: number,
      name: string,
    }>) {
      self.items = cast(categories);
    }
  }));
