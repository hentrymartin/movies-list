import React from 'react';
import 'react-native-gesture-handler';
import Routes from './routes';
import { Provider, rootStore } from './models/root';

const MovieListApp = () => {
  return (
    <Provider value={rootStore}>
      <Routes />
    </Provider>
  )
};

export default MovieListApp;
