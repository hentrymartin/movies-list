import React, { useEffect } from 'react';
import { observer } from "mobx-react-lite";

import { getGenres } from '../../api/api';
import { useMst } from '../../models/root';
import CategoryItem from '../../components/CategoryItem';
import { ScrollView } from 'react-native-gesture-handler';
import { CategoryItemType } from '../../components/CategoryItem/CategoryItem.props';
import { CategoriesScreenProps } from './Categories.types';

const Categories = observer(({navigation}: CategoriesScreenProps) => {

  const { categories }  = useMst();

  console.log(categories);

  const { items } = categories;

  useEffect(() => {
    (async () => {
      const {genres: allCategories} = await getGenres();
      categories.setCategories(allCategories);
    })();
  }, []);

  const onCategoryClicked = (category: CategoryItemType) => {
    console.log(categories);
    categories.setSelectedCategory(category.id);
    navigation.navigate('MoviesList');
  };

  return (
    <ScrollView>
      {
        items.map(category => <CategoryItem category={category} onPress={() => onCategoryClicked(category)} />)
      }
    </ScrollView>
  )
});

export default Categories;
