import {
  View,
  Text,
  TouchableOpacity,
  Image,
  GestureResponderEvent,
  StyleSheet,
} from 'react-native';
import React, {memo} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {TMDB_IMG_URL} from '@config/config';
import {IMovie} from '@definitions/movies';
import {useTheme} from '@theme/useTheme';
import {fonts} from '@config/fonts';

type Props = {
  info: IMovie;
  onViewDetails?: (event: GestureResponderEvent) => void;
};

function MovieListItem({info, onViewDetails}: Props) {
  const theme = useTheme();
  return (
    <View style={styles.cardContainer}>
      <TouchableOpacity activeOpacity={0.9} onPress={onViewDetails}>
        <View style={[styles.card, {backgroundColor: theme.titleText}]}>
          <Image
            source={{uri: `${TMDB_IMG_URL}/w185/${info.poster_path}`}}
            style={styles.cardImage}
          />
          <View style={styles.cardDetails}>
            <Text
              style={[styles.cardTitle, {color: theme.backgroundColor}]}
              numberOfLines={3}>
              {info.original_title}
            </Text>
            <View style={styles.cardGenre}>
              <Text
                style={[styles.cardGenreItem, {color: theme.backgroundColor}]}>
                {info.release_date.toString().substring(0, 4)}
              </Text>
            </View>
            <View style={styles.cardNumbers}>
              <View style={styles.cardStar}>
                <Icon name="md-star" size={16} color="#F5B642" />

                <Text
                  style={[
                    styles.cardStarRatings,
                    {color: theme.backgroundColor},
                  ]}>
                  {info.vote_average.toFixed(1)}
                </Text>
              </View>
              <Text style={styles.cardRunningHours} />
            </View>
            <Text
              style={[styles.cardDescription, {color: theme.backgroundColor}]}
              numberOfLines={3}>
              {info.overview}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default memo(MovieListItem);

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    marginHorizontal: 16,
  },
  card: {
    borderRadius: 5,
    minHeight: 148,
    flexDirection: 'row',
    paddingRight: 16,
    overflow: 'hidden',
  },
  cardDetails: {
    paddingLeft: 10,
    flex: 1,
  },
  cardImage: {
    height: 163,
    width: 120,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  cardTitle: {
    fontSize: 13,
    ...fonts.medium,
    paddingTop: 10,
  },
  cardGenre: {
    flexDirection: 'row',
  },
  cardGenreItem: {
    fontSize: 11,
    ...fonts.regular,
    marginRight: 5,
  },
  cardDescription: {
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
    ...fonts.regular,
  },
  cardRunningHours: {
    marginLeft: 5,
    fontSize: 12,
  },
});
