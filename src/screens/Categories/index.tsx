import React, { useEffect } from 'react';
import { observer } from "mobx-react-lite";

import { getGenres } from '../../api/api';
import { useMst } from '../../models/root';
import CategoryItem from '../../components/CategoryItem';
import { ScrollView } from 'react-native-gesture-handler';

const Categories = observer(() => {

  const { categories }  = useMst();

  const { items } = categories;

  useEffect(() => {
    (async () => {
      const {genres: allCategories} = await getGenres();
      categories.setCategories(allCategories);
    })();
  }, []);

  return (
    <ScrollView>
      {
        items.map(category => <CategoryItem category={category} />)
      }
    </ScrollView>
  )
});

export default Categories;
