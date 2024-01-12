import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import React from 'react';
import {IMovieDetails} from '@definitions/movies';
import {TMDB_IMG_URL} from '@config/config';
import normalize from '@config/normalize';
import {useTheme} from '@theme/useTheme';

type Props = {
  info?: IMovieDetails;
};

export default function Casts({info}: Props) {
  const theme = useTheme();
  return (
    <ScrollView nestedScrollEnabled style={styles.container}>
      {info?.casts.cast.map(item => (
        <View key={item.cast_id} style={styles.castContainer}>
          <Image
            source={{uri: `${TMDB_IMG_URL}/w185/${item.profile_path}`}}
            style={styles.castImage}
          />
          <View style={styles.characterContainer}>
            <Text style={[styles.characterName, {color: theme.titleText}]}>
              {item.name}
            </Text>
            <Text style={[styles.asCharacter, {color: theme.titleText}]}>
              {item.character && `as ${item.character}`}
            </Text>
          </View>
        </View>
      ))}
      <View style={{height: normalize(200)}} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingHorizontal: 16,
  },
  castContainer: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  castImage: {
    width: 80,
    height: 80,
    borderRadius: 80 / 2,
  },
  characterContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 16,
  },
  characterName: {
    color: 'white',
    flexDirection: 'column',
    fontSize: 16,
    fontWeight: '500',
  },
  asCharacter: {
    color: '#999',
  },
});
