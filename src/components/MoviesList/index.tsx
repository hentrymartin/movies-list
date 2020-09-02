import React, { useEffect } from 'react';
import { FlatList, ActivityIndicator, View } from 'react-native';
import { observer } from 'mobx-react-lite';

import { useMst } from '../../models/root';
import Movie from '../MovieItem';
import { MovieItem } from '../../screens/MoviesListView/MoviesListView.types';
import { ActivityIndicatorWrapper, ListFooter } from './MoviesList.styles';

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
          <ActivityIndicatorWrapper>
            <ActivityIndicator animating={loading} size="large" color="#00ff00" />
          </ActivityIndicatorWrapper>
        )
      }
      <FlatList
        contentContainerStyle={{
        }}
        data={list as MovieItem[]}
        renderItem={({ item }: { item: MovieItem}) => (<Movie movie={item} />)}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.1}
        ListFooterComponent={<ListFooter />}
      />
    </View>
  );
});

export default MoviesList;
