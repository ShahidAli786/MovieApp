import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import _ from 'lodash';
import moment from 'moment';
import numeral from 'numeral';
import normalize from '@config/normalize';
import {useTheme} from '@theme/useTheme';

type Props = {
  info: any;
};

export default function Info({info}: Props) {
  const theme = useTheme();
  const director = _.filter(info.casts.crew, {
    department: 'Directing',
    job: 'Director',
  });
  const releaseDate = moment(info.release_date).format('LL');
  const budget =
    info.budget === 0 ? 'n/a' : numeral(info.budget).format('$ 0,0');

  return (
    <ScrollView nestedScrollEnabled style={styles.container}>
      <View style={styles.overview}>
        <Text style={[styles.label, {color: theme.titleText}]}>Overview</Text>
        <Text style={[styles.overviewText, {color: theme.titleText}]}>
          {info.overview}
        </Text>
      </View>
      <View style={[styles.labelRow]}>
        <Text style={[styles.label, {color: theme.titleText}]}>
          Release Date
        </Text>
        <Text style={[styles.value, {color: theme.titleText}]}>
          {releaseDate}
        </Text>
      </View>
      <View style={styles.labelRow}>
        <Text style={[styles.label, {color: theme.titleText}]}>
          Directed By
        </Text>
        <Text style={[styles.value, {color: theme.titleText}]}>
          {director[0].name}
        </Text>
      </View>
      <View style={styles.labelRow}>
        <Text style={[styles.label, {color: theme.titleText}]}>Budget</Text>
        <Text style={[styles.value, {color: theme.titleText}]}>{budget}</Text>
      </View>
      <View style={{height: normalize(200)}} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingHorizontal: 16,
    paddingBottom: 25,
  },
  overview: {
    marginBottom: 15,
  },
  overviewText: {
    color: '#d2d2d2',
    fontSize: 14,
    paddingTop: 10,
    lineHeight: 22,
  },
  label: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
  value: {
    color: '#d2d2d2',
    fontSize: 14,
  },
  labelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
  },
});
