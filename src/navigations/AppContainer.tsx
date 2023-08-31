import React from 'react';
import {
  DefaultTheme,
  NavigationContainer,
  Theme as NavigationThemeTypes,
} from '@react-navigation/native';
import MainStack from './stacks/MainStack';
import {useTheme} from '@theme/useTheme';
import {StyleSheet, View} from 'react-native';

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
      border: theme.backgroundColor,
    },
  };
  return (
    <View style={[styles.container, {backgroundColor: theme.backgroundColor}]}>
      <NavigationContainer theme={navigationTheme}>
        <MainStack />
      </NavigationContainer>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {flex: 1},
});
