import React from 'react';
import PopularSection, { RatingLevel } from '.';
import { Movie } from '../../mocks/movies';
import { render } from '@testing-library/react-native';
import { getRatingLevel } from '../../utils';
import MockedNavigator from '../../utils/testing/mockedNavigator';

describe('<PopularSection />', () => {
  const movie = Movie;
  it('check for voting average', () => {
    const { getByText } = render(
      <MockedNavigator component={() => <PopularSection movie={movie} />}/>
    );
    expect(getByText(movie.vote_average.toString())).toBeTruthy();
  });

  it('check for rating level', () => {
    const rating = getRatingLevel(movie);
    expect(rating).toBe(RatingLevel.bad);
  });
});
