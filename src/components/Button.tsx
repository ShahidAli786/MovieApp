import {StyleSheet, Text, TextProps} from 'react-native';
import React from 'react';
import {useTheme} from '@theme/useTheme';
import Touch, {ITouchProps} from './common/Touch';
import commonStyle from '@config/commonStyle';
import normalize from '@config/normalize';

interface ButtonProps extends Omit<ITouchProps, 'children'> {
  title?: string;
  textProps?: TextProps;
}

export default function Button({title, textProps, ...props}: ButtonProps) {
  const theme = useTheme();
  return (
    <Touch
      style={({pressed}) => [
        {
          opacity: pressed ? 0.5 : 1,
          backgroundColor: theme.primary,
        },
        styles.button,
      ]}
      {...props}>
      <Text style={[styles.text, {color: theme.white}]} {...textProps}>
        {title}
      </Text>
    </Touch>
  );
}
const styles = StyleSheet.create({
  button: {
    width: '90%',
    height: normalize(50),
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  text: {
    fontSize: normalize(16),
    ...commonStyle.textSemibold,
  },
});
