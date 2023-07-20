import React from 'react';
import {
  DefaultTheme,
  NavigationContainer,
  Theme as NavigationThemeTypes,
} from '@react-navigation/native';
import MainStack from './stacks/MainStack';
import {useTheme} from '@theme/useTheme';

export default function AppContainer() {
  const theme = useTheme();

  // defined navigation theme
  const navigationTheme: NavigationThemeTypes = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: theme.backgroundColor,
      card: theme.backgroundColor,
      text: theme.titleText,
      primary: theme.primary,
      border: 'transparent',
    },
  };
  return (
    <NavigationContainer theme={navigationTheme}>
      <MainStack />
    </NavigationContainer>
  );
}
