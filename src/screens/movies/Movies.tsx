import React from 'react';
import {
  StyleSheet,
  ActivityIndicator,
  ScrollView,
  TouchableOpacity,
  Platform,
  View,
  Text,
} from 'react-native';
import Swiper from 'react-native-swiper';
import {
  useRetrieveNowPlaying,
  useRetrievePopularMovies,
} from '@store/apis/moviesApis';
import CardOne from './CardOne';
import CardTwo from './CardTwo';
import {useTheme} from '@theme/useTheme';
import {fonts} from '@config/fonts';
import BrowseListItem from './BrowseListItem';
import {MainStackParamsList} from '@navigations/stacks/types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {MainTabsParamsList} from '@navigations/types';
import {CompositeNavigationProp, useNavigation} from '@react-navigation/native';
import {IMovie, TYPE} from '@definitions/movies';
import {useAppDispatch} from '@store/hooks';
import {reset} from '@store/slices/moviesSlice';
type TNavigation = CompositeNavigationProp<
  NativeStackNavigationProp<MainStackParamsList>,
  NativeStackNavigationProp<MainTabsParamsList, 'movies'>
>;

export default function Movies() {
  const navigation = useNavigation<TNavigation>();
  const dispatch = useAppDispatch();
  const {data, isLoading} = useRetrieveNowPlaying({page: 1});
  const {data: popularMovies} = useRetrievePopularMovies({page: 1});
  const nowPlayingMovies = data?.results;

  const theme = useTheme();

  if (isLoading) {
    return <ActivityIndicator size="large" />;
  }
  const handleMovieList = (title: string, type: TYPE) => {
    dispatch(reset());
    navigation.navigate('MoviesList', {
      title,
      type,
    });
  };

  const handleViewDetails = (info: IMovie) => {
    navigation.navigate('MovieDetails', {
      info,
    });
  };

  return (
    <ScrollView style={styles.container}>
      <Swiper autoplay height={248} autoplayTimeout={4} showsPagination={false}>
        {nowPlayingMovies?.map(info => (
          <CardOne
            onViewDetails={() => handleViewDetails(info)}
            key={info.id}
            info={info}
          />
        ))}
      </Swiper>
      <View>
        <View style={styles.listHeading}>
          <Text style={[styles.listHeadingLeft, {color: theme.titleText}]}>
            Popular
          </Text>
          <TouchableOpacity>
            <Text
              style={[styles.listHeadingRight, {color: theme.titleText}]}
              onPress={() => {
                handleMovieList('Popular', 'popular');
              }}>
              See all
            </Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {popularMovies?.results.map(info => (
            <CardTwo
              onViewDetails={() => handleViewDetails(info)}
              key={info.id}
              info={info}
            />
          ))}
        </ScrollView>
        <View style={styles.browseList}>
          <BrowseListItem
            onPress={() => handleMovieList('Now Playing', 'now_playing')}
            icon="play"
            title="Now Playing"
          />
          <BrowseListItem
            onPress={() => handleMovieList('Top Rated', 'top_rated')}
            icon="trending-up"
            title="Top Rated"
          />
          <BrowseListItem
            onPress={() => handleMovieList('Upcoming', 'upcoming')}
            icon="recording"
            title="Upcoming"
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listHeading: {
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
    marginTop: 20,
  },
  listHeadingLeft: {
    ...fonts.semiBold,
    fontSize: 18,
  },
  listHeadingRight: {
    ...fonts.regular,
    ...Platform.select({
      ios: {
        fontSize: 15,
      },
      android: {
        fontSize: 16,
      },
    }),
  },
  browseList: {
    marginTop: 30,
    paddingHorizontal: 16,
    ...Platform.select({
      ios: {
        marginBottom: 60,
      },
      android: {
        marginBottom: 30,
      },
    }),
  },
});
