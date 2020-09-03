import React from 'react';
import { render } from '@testing-library/react-native';

import MovieItem from '.';
import { Movie } from '../../mocks/movies';
import MockedNavigator from '../../utils/testing/mockedNavigator';

describe('<MovieItem />', () => {
  it('Check movie title', () => {
    const { getByText } = render(
      <MockedNavigator component={() => <MovieItem movie={Movie} detailsRouteName="Movie Details"/>}/>
    );
    expect(getByText(Movie.title)).toBeTruthy();
  });
});
