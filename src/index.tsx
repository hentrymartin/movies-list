import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text, StatusBar, SafeAreaView } from 'react-native';
import Routes from './routes';

const MovieListApp = () => {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  )
};

export default MovieListApp;
