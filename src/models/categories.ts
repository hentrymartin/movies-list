import {
  types,
  cast,
  } from "mobx-state-tree";

  export const Category = types.model({
    id: types.number,
    name: types.string,
  });

  export const Categories = types.model({
    items: types.optional(types.array(Category), []),
    id: types.maybe(types.number),
  }).
  actions(self => ({
    setCategories(categories: Array<{
      id: number,
      name: string,
    }>) {
      self.items = cast(categories);
    },
    setSelectedCategory(id: number) {
      self.id = cast(id);
    }
  }))
  .views(self => ({
    getGenreById(id?: number) {
      return self.items.filter(item => item.id === id)[0];
    },
  }));
