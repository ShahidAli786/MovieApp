import {useContext} from 'react';
import {ThemeContext} from '@theme/theme-context';
/**
 *
 * @returns
 * This hooks returns the current theme for eg light or dark
 */
export function useCurrentTheme() {
  const themeContext = useContext(ThemeContext);

  return themeContext.currentTheme;
}
