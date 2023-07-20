import {
  View,
  Text,
  StyleSheet,
  GestureResponderEvent,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {TMDB_IMG_URL} from '@config/config';
import {IMovie} from '@definitions/movies';
import {useTheme} from '@theme/useTheme';
import {fonts} from '@config/fonts';

type Props = {
  info: IMovie;
  onViewDetails?: (event: GestureResponderEvent) => void;
};
export default function CardTwo({info, onViewDetails}: Props) {
  const theme = useTheme();
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onViewDetails}>
      <View style={[styles.cardContainer, {backgroundColor: theme.titleText}]}>
        <Image
          source={{uri: `${TMDB_IMG_URL}/w185/${info.poster_path}`}}
          style={styles.cardImage}
        />
        <View style={styles.cardTitleContainer}>
          <Text
            style={[styles.cardTitle, {color: theme.backgroundColor}]}
            numberOfLines={2}>
            {info.original_title}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    height: 231,
    width: 135,

    flexDirection: 'column',
    marginRight: 10,
    borderRadius: 3,
  },
  cardImage: {
    width: 135,
    height: 184,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
  },
  cardTitleContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  cardTitle: {
    fontSize: 13,
    ...fonts.medium,
    fontWeight: '500',
    textAlign: 'center',
    paddingHorizontal: 1,
  },
});
