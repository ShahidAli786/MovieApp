import {createContext} from 'react';
import {THEME_DARK_VALUE, THEME_LIGHT_VALUE} from '@constants/async-storage';

import {colors} from 'src/config/colors';

export type TSupportedThemes = keyof typeof colors;

export type TColors = (typeof colors)[TSupportedThemes];

export interface Themes {
  [THEME_DARK_VALUE]: TColors;
  [THEME_LIGHT_VALUE]: TColors;
}

interface ThemeContextInterface {
  theme: TColors;
  toggleTheme: () => void;
  currentTheme: TSupportedThemes;
}

export const ThemeContext = createContext<ThemeContextInterface>({
  theme: colors[THEME_LIGHT_VALUE],
  toggleTheme: () => {
    throw new Error('toggleTheme is not implemented');
  },
  currentTheme: THEME_LIGHT_VALUE,
});
