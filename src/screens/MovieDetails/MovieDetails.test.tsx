import React from 'react';
import { render } from '@testing-library/react-native';
import MockedNavigator from '../../utils/testing/mockedNavigator';
import MovieDetails from '.';
import { Movie } from '../../mocks/movies';

describe('<MovieDetails />', () => {
  it('check if it is rendered properly', () => {
    const route = {
      params: {
        movie: Movie,
      },
    };
    const { toJSON } = render(
      <MockedNavigator component={() => <MovieDetails route={route}/>} />
    );

    expect(toJSON()).toMatchSnapshot();
  });
});
