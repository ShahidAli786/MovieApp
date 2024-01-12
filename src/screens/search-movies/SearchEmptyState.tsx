import {View, Text} from 'react-native';
import React from 'react';
import {StyleSheet} from 'react-native';
import {useTheme} from '@theme/useTheme';
import Icon from 'react-native-vector-icons/Feather';
import {fonts} from '@config/fonts';

export default function SearchEmptyState() {
  const theme = useTheme();
  return (
    <View style={[styles.card, {backgroundColor: theme.card}]}>
      <View style={[styles.box, {backgroundColor: theme.primary}]}>
        <Icon name="search" size={30} color={theme.titleText} />
      </View>
      <Text style={[styles.title, {color: theme.titleText}]}>
        No results to show{' '}
      </Text>
      <Text style={[styles.description, {color: theme.titleText}]}>
        Please check spelling or try different keywords{' '}
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    margin: 16,
    borderColor: 'red',
    gap: 10,
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 50,
    borderRadius: 5,
  },
  title: {
    fontSize: 16,
    ...fonts.semiBold,
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
  },
  box: {
    height: 50,
    width: 50,
    borderRadius: 5,

    justifyContent: 'center',
    alignItems: 'center',
  },
});
