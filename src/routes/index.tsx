import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Categories from '../screens/Categories';
import MoviesListView from '../screens/MoviesListView';

const Stack = createStackNavigator();

const Routes = () => (
  <Stack.Navigator initialRouteName="Categories">
    <Stack.Screen name="Categories" component={Categories} />
    <Stack.Screen name="MoviesList" component={MoviesListView} />
  </Stack.Navigator>
);

export default Routes;