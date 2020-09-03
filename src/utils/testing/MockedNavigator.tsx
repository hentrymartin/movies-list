import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

/**
 * This component is to mock the navigator for testing enviroment
 * @param param0 
 */
const MockedNavigator = ({component, params = {}}: {
  component: React.FC;
  params?: any;
}) => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="MockedScreen"
        component={component}
        initialParams={params}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default MockedNavigator;