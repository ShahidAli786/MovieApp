import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  GestureResponderEvent,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';

import {TMDB_IMG_URL} from '@config/config';
import {IMovie} from '@definitions/movies';
import {fonts} from '@config/fonts';

type Props = {
  info: IMovie;
  onViewDetails?: (event: GestureResponderEvent) => void;
};

export default function CardOne({info, onViewDetails}: Props) {
  return (
    <View>
      <Image
        source={{
          uri: `${TMDB_IMG_URL}/w780/${info.backdrop_path || info.poster_path}`,
        }}
        style={styles.imageBackdrop}
      />
      <LinearGradient
        colors={['rgba(0, 0, 0, 0.5)', 'rgba(0,0,0, 0.7)', 'rgba(0,0,0, 0.8)']}
        style={styles.linearGradient}
      />
      <View style={styles.cardContainer}>
        <Image
          source={{uri: `${TMDB_IMG_URL}/w185/${info.poster_path}`}}
          style={styles.cardImage}
        />
        <View style={styles.cardDetails}>
          <Text style={styles.cardTitle} numberOfLines={2}>
            {info.original_title}
          </Text>
          <View style={styles.cardGenre}>
            <Text style={styles.cardGenreItem}>Action</Text>
          </View>
          <View style={styles.cardNumbers}>
            <View style={styles.cardStar}>
              <Icon name="star" size={14} color="#F5B642" />
              <Text style={styles.cardStarRatings}>8.9</Text>
            </View>
            <Text style={styles.cardRunningHours} />
          </View>
          <Text style={styles.cardDescription} numberOfLines={3}>
            {info.overview}
          </Text>
          <TouchableOpacity activeOpacity={0.9} onPress={onViewDetails}>
            <View style={styles.viewButton}>
              <Text style={styles.viewButtonText}>View Details</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  linearGradient: {
    top: 0,
    left: 0,
    right: 0,
    height: 248,
    position: 'absolute',
  },
  imageBackdrop: {
    // flex: 1,
    height: 248,
    backgroundColor: 'black',
  },
  cardContainer: {
    position: 'absolute',
    top: 32,
    right: 16,
    left: 16,
    flexDirection: 'row',
  },
  cardImage: {
    height: 184,
    width: 135,
    borderRadius: 3,
  },
  cardDetails: {
    paddingLeft: 10,
    flex: 1,
  },
  cardTitle: {
    color: 'white',
    fontSize: 19,
    ...fonts.semiBold,
    paddingTop: 10,
  },
  cardGenre: {
    flexDirection: 'row',
  },
  cardGenreItem: {
    ...fonts.regular,
    fontSize: 11,
    marginRight: 5,
    color: 'white',
  },
  cardDescription: {
    color: '#f7f7f7',
    fontSize: 13,
    marginTop: 5,
  },
  cardNumbers: {
    flexDirection: 'row',
    marginTop: 5,
  },
  cardStar: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardStarRatings: {
    marginLeft: 5,
    fontSize: 12,
    color: 'white',
  },
  cardRunningHours: {
    marginLeft: 5,
    fontSize: 12,
  },
  viewButton: {
    justifyContent: 'center',

    borderRadius: 3,
    backgroundColor: '#EA0000',
    alignItems: 'center',
    width: 100,
    height: 30,
    marginTop: 10,
  },
  viewButtonText: {
    color: 'white',
    ...fonts.semiBold,
    fontSize: 10,
  },
});
