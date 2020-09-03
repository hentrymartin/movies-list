import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';

import { getItem } from '../../utils/storage';
import Movie from '../../components/MovieItem';

import { MovieItem } from '../MoviesListView/MoviesListView.types';
import { ListFooter } from '../../components/MoviesList/MoviesList.styles';

/**
 * This shows the list of favourites from async storage
 * @param param0 
 */
const FavouritesList = ({ navigation }: { navigation: {
  addListener: (event: string, callback: () => void) => void;
}}) => {
  const [favourites, setFavourites] = useState<MovieItem[]>([]);

  const onSetFavourites = async () => {
    const favourites = await getItem('@favourites') as MovieItem[] || [];
    setFavourites(favourites);
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', onSetFavourites);
    onSetFavourites();
    return unsubscribe;
  }, [navigation]);

  return (
    <FlatList
      data={favourites as MovieItem[]}
      renderItem={({ item }: { item: MovieItem}) => (<Movie movie={item} detailsRouteName="Favourite Movie Details" />)}
      ListFooterComponent={<ListFooter />}
    />
  );
};

export default FavouritesList;
