import {TextStyle, Platform, StyleSheet} from 'react-native';
import {fonts} from './fonts';

const defaultTextStyle: TextStyle = {
  textAlign: 'left',
  backgroundColor: 'transparent',
  ...Platform.select({
    android: {
      includeFontPadding: false,
    },
  }),
};

export default StyleSheet.create({
  textRegular: {
    ...defaultTextStyle,
    ...fonts.regular,
    // ...Platform.select({
    //   ios: {
    //     fontFamily: 'Poppins',
    //     fontWeight: '400',
    //   },
    //   android: {
    //     fontFamily: 'Poppins-Regular',
    //   },
    // }),
  },
  textMedium: {
    ...defaultTextStyle,
    ...fonts.medium,
  },
  textSemibold: {
    ...defaultTextStyle,
    ...fonts.semiBold,
  },
  textBold: {
    ...defaultTextStyle,
    ...fonts.bold,
  },
  title: {
    ...defaultTextStyle,
    ...fonts.semiBold,
    fontSize: 40,
  },
});
