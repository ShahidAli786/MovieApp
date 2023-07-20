import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {MainTabsParamsList} from './types';
import Home from '@screens/home/Home';
import Settings from '@screens/settings/Settings';
import Movies from '@screens/movies/Movies';

const Tab = createBottomTabNavigator<MainTabsParamsList>();

type tabIconProps = {
  focused: boolean;
  color: string;
  size: number;
};

const renderHomeTabIcon = ({color, focused, size}: tabIconProps) => (
  <Ionicons
    name={focused ? 'home' : 'home-outline'}
    color={color}
    size={size}
  />
);
const renderSettingsTabIcon = ({color, focused, size}: tabIconProps) => (
  <Ionicons
    name={focused ? 'settings' : 'settings-outline'}
    color={color}
    size={size}
  />
);

const renderMoviesTabIcon = ({color, focused, size}: tabIconProps) => (
  <Ionicons
    name={focused ? 'film' : 'film-outline'}
    color={color}
    size={size}
  />
);

export default function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
      }}>
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: renderHomeTabIcon,
        }}
        name="home"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarIcon: renderMoviesTabIcon,
          title: 'Movies',
        }}
        name="movies"
        component={Movies}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: renderSettingsTabIcon,
        }}
        name="settings"
        component={Settings}
      />
    </Tab.Navigator>
  );
}
