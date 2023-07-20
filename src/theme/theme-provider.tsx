import React, {useState, useEffect, ReactNode} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ThemeContext, TSupportedThemes} from '@theme/theme-context';
import {
  THEME_DARK_VALUE,
  THEME_KEY,
  THEME_LIGHT_VALUE,
} from '@constants/async-storage';
import {useColorScheme} from 'react-native';
import {colors} from 'src/config/colors';

type Props = {
  children: ReactNode;
};

function isTheme(object: unknown): object is TSupportedThemes {
  return object !== null && typeof object === 'string';
}

export function ThemeProvider({children}: Props) {
  const colorScheme = useColorScheme();
  //for using a single theme use light theme
  const [theme, setTheme] = useState(colorScheme || 'light');

  useEffect(() => {
    const loadTheme = async () => {
      try {
        const existingTheme: unknown = await AsyncStorage.getItem(THEME_KEY);

        if (isTheme(existingTheme)) {
          setTheme(existingTheme);
        }
      } catch (error) {
        // Unable to load theme, just skip it, dark theme will be used.
      } finally {
        // RNBootSplash.hide();
      }
    };

    loadTheme();
  }, []);

  const toggleTheme = async () => {
    const updatedTheme =
      theme === 'dark' ? THEME_LIGHT_VALUE : THEME_DARK_VALUE;
    await AsyncStorage.setItem(THEME_KEY, updatedTheme);
    setTheme(updatedTheme);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme: colors[theme],
        toggleTheme,
        currentTheme: theme,
      }}>
      {children}
    </ThemeContext.Provider>
  );
}
