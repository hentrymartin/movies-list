import { StackScreenProps } from '@react-navigation/stack';
import { MovieItem } from '../MoviesListView/MoviesListView.types';

export type MovieDetailsProps = {
  route: {
    params: {
      movie: MovieItem;
    }
  }
};
