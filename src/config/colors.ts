// common colors
const mentions = {
  error: '#EB0000',
  success: '#00DE3E',
  primary: '#1866FF',
  secondary: '#00122D',
  primaryText: '#000000',
  secondaryText: '#808080',
  white: '#ffffff',
};

//colors for light and dark theme
export const colors = {
  light: {
    backgroundColor: '#fff',
    cardBackground: '#f6f6f6',
    titleText: '#0d0e12',
    card: '#f9f9f9',
    ...mentions,
  },
  dark: {
    backgroundColor: '#080808',
    cardBackground: '#080808',
    titleText: '#f9f9f9',
    card: '#232D3F',
    ...mentions,
  },
};
