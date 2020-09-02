import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Categories from '../screens/Categories';
import MoviesListView from '../screens/MoviesListView';
import MovieDetails from '../screens/MovieDetails';
import FavouritesList from '../screens/FavouritesList';


const ListStack = createStackNavigator();

const ListScreen = () => {
  return (
    <ListStack.Navigator>
      <ListStack.Screen name="Categories" component={Categories} />
      <ListStack.Screen name="Movies List" component={MoviesListView} />
      <ListStack.Screen name="Movie Details" component={MovieDetails} />
    </ListStack.Navigator>
  );
};

const FavouritesStack = createStackNavigator();

const FavouritesScreen = () => (
  <FavouritesStack.Navigator>
    <FavouritesStack.Screen name="Favourites" component={FavouritesList} />
    <ListStack.Screen name="Favourite Movie Details" component={MovieDetails} />
  </FavouritesStack.Navigator>
);

const Tab = createBottomTabNavigator();

const Routes = () => (
  <NavigationContainer>
    <Tab.Navigator tabBarOptions={{
      activeTintColor: '#e91e63',
      labelStyle: {
        fontSize: 16,
      }
    }}>
      <Tab.Screen name="Categories" component={ListScreen} />
      <Tab.Screen name="Favourites" component={FavouritesScreen} />
    </Tab.Navigator>
  </NavigationContainer>
);

export default Routes;