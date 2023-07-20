import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainStackParamsList} from './types';
import Login from '@screens/login/Login';
import OnBoarding from '@screens/on-boarding/OnBoarding';
import MainTabs from '@navigations/MainTabs';
import MoviesList from '@screens/movies-list/MoviesList';

const Stack = createNativeStackNavigator<MainStackParamsList>();

export default function MainStack() {
  return (
    <Stack.Navigator initialRouteName="OnBoarding">
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="OnBoarding"
        component={OnBoarding}
      />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="MainTabs"
        component={MainTabs}
      />
      <Stack.Screen
        options={({route}) => ({title: route.params.title})}
        name="MoviesList"
        component={MoviesList}
      />
    </Stack.Navigator>
  );
}
