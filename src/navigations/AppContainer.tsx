import React from 'react';
import {
  DefaultTheme,
  NavigationContainer,
  Theme as NavigationThemeTypes,
} from '@react-navigation/native';
import MainStack from './stacks/MainStack';
import {useTheme} from '@theme/useTheme';
import {StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Touch from '@components/common/Touch';
import {useToggleTheme} from '@theme/useToggleTheme';
import {useCurrentTheme} from '@theme/useCurrentTheme';

export default function AppContainer() {
  const theme = useTheme();
  const toggleTheme = useToggleTheme();
  const currentTheme = useCurrentTheme();
  // defined navigation theme
  const navigationTheme: NavigationThemeTypes = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: theme.cardBackground,
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
      <Touch
        onPress={toggleTheme}
        style={[styles.floatingButton, {backgroundColor: theme.titleText}]}>
        <Icon
          name={currentTheme === 'dark' ? 'sun' : 'moon'}
          size={30}
          color={theme.primary}
        />
      </Touch>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {flex: 1},
  floatingButton: {
    position: 'absolute',
    width: 50,
    height: 50,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 30,
    right: 20,
  },
});
