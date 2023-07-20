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
    titleText: '#0d0e12',
    ...mentions,
  },
  dark: {
    backgroundColor: '#080808',
    titleText: '#f9f9f9',
    ...mentions,
  },
};
