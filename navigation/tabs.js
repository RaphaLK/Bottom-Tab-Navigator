import * as React from 'react';
import { Text, View } from 'react-native'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainter } from '@react-navigation/native';

import FavScreen from '../screens/Favorites';
import Restaurants from '../screens/Restaurants';
import Shopping from '../screens/Shopping';
import Profile from '../screens/User';
import Movies from '../screens/Movies';
import Events from '../screens/Events';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Shopping" component={Shopping} />
      <Tab.Screen name="Restaurants" component={Restaurants} />
      <Tab.Screen name="My Profile" component={Profile} />
      <Tab.Screen name="Movies" component={Movies} />
      <Tab.Screen name="Favorites" component={FavScreen} />
      <Tab.Screen name="Events" component={ Events }/>
    </Tab.Navigator>
  );
}

export default Tabs;