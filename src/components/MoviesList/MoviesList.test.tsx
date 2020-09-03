import React from 'react';
import fetchMock from 'jest-fetch-mock';
import { render, waitForElementToBeRemoved, cleanup } from '@testing-library/react-native';

import MoviesList from '.';
import MstWrapper from '../../utils/testing/MstWrapper';
import { Movies } from '../../mocks/movies';
import MockedNavigator from '../../utils/testing/mockedNavigator';

describe('<MoviesList />', () => {

  beforeEach(() => {
    // This mocks the api call to discover movie
    fetchMock.mockIf(/^https?:\/\/api.themoviedb.org.*$/, (req: Request) => {
      if (req.url.includes('discover/movie')) {
        return new Promise((resolve, reject) => {
          resolve(JSON.stringify({
            page: 1,
            results: Movies,
          }));
        });
      } else {
        return  new Promise((resolve, reject) => {
          resolve(JSON.stringify({
            status: 404,
            body: "Not Found"
          }));
        });
      }
    });
  });

  afterEach(cleanup);

  it('Check for movies list', async () => {
    const { getByTestId, getAllByTestId } = render(
      <MockedNavigator component={() => (
        <MstWrapper>
          <MoviesList />
        </MstWrapper>
      )}/>
    );

    await waitForElementToBeRemoved(() => getByTestId('activity-indicator'));

    const movieItem = getAllByTestId('movie-item');
    expect(movieItem.length).toBe(10);
  });
});
