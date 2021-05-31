import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Home, Signup} from './screens';
import RouteKeys from './constants/routeKeys';

const Stack = createStackNavigator();
const AppRoutes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen component={Signup} name={RouteKeys.SIGNUP} />
        <Stack.Screen component={Home} name={RouteKeys.HOME} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppRoutes;
