import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './routes';
import { Provider, rootStore } from './models/root';

const MovieListApp = () => {
  return (
    <Provider value={rootStore}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </Provider>
  )
};

export default MovieListApp;
