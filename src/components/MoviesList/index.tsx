import React, { useEffect } from 'react';
import { FlatList, ActivityIndicator, View } from 'react-native';
import { observer } from 'mobx-react-lite';

import { useMst } from '../../models/root';
import Movie from '../MovieItem';
import { MovieItem } from '../../screens/MoviesListView/MoviesListView.types';
import { ActivityIndicatorWrapper, ListFooter } from './MoviesList.styles';

/**
 * Movies list component which displays the movies data from server. 
 */
const MoviesList = observer(() => {
  const {
    categories:{ id },
    moviesList: { list, page, getMoviesById, loading, resetValues }
  } = useMst();

  useEffect(() => {
    (async () => {
      if (id === 0) return;
      getMoviesById(page, id);
    })();

    return () => {
      resetValues();
    };
  }, [id]);

  const onEndReached = () => {
    getMoviesById(page + 1, id);
  };

  return (
    <View>
      {
        loading && (
          <ActivityIndicatorWrapper testID="activity-indicator">
            <ActivityIndicator animating={loading} size="large" color="#00ff00" />
          </ActivityIndicatorWrapper>
        )
      }
      <FlatList
        testID="flat-list"
        data={list as MovieItem[]}
        renderItem={({ item }: { item: MovieItem}) => (<Movie movie={item} detailsRouteName="Movie Details" />)}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.1}
        ListFooterComponent={<ListFooter />}
      />
    </View>
  );
});

export default MoviesList;
