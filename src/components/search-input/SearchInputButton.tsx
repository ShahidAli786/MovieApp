import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Touch from '@components/common/Touch';
import {fonts} from '@config/fonts';
import {useTheme} from '@theme/useTheme';

type SearchInputButtonProps = {
  onPress?: () => void;
};

export default function SearchInputButton({onPress}: SearchInputButtonProps) {
  const theme = useTheme();
  return (
    <Touch
      onPress={onPress}
      style={[
        styles.searchContainer,
        {backgroundColor: theme.backgroundColor},
      ]}>
      <View style={styles.inputView}>
        <Text style={styles.text}>Search</Text>
      </View>
    </Touch>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    padding: 16,
  },
  text: {
    fontSize: 16,
    ...fonts.medium,
    color: 'grey',
  },
  inputView: {
    height: 45,
    borderColor: 'gray',
    justifyContent: 'center',
    paddingHorizontal: 10,

    backgroundColor: 'white',
    borderRadius: 5,
    // shadow
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    elevation: 2,
  },
});
