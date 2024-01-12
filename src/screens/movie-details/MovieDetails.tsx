import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  Text,
  ScrollView,
  ActivityIndicator,
  Pressable,
} from 'react-native';
import React from 'react';
import {useRetrieveMovieDetails} from '@store/apis/moviesApis';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {MainStackParamsList} from '@navigations/stacks/types';
import Swiper from 'react-native-swiper';
import {TMDB_IMG_URL} from '@config/config';
import LinearGradient from 'react-native-linear-gradient';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import {useTheme} from '@theme/useTheme';
import Icon from 'react-native-vector-icons/Ionicons';
import {fonts} from '@config/fonts';
import Tabs from './tabs/Tabs';
import normalize from '@config/normalize';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const {height} = Dimensions.get('window');

type TNavigation = NativeStackNavigationProp<
  MainStackParamsList,
  'MovieDetails'
>;

type RouteProps = RouteProp<MainStackParamsList, 'MovieDetails'>;
export default function MovieDetails() {
  const {goBack} = useNavigation<TNavigation>();
  const {top} = useSafeAreaInsets();
  const theme = useTheme();
  const {
    params: {info},
  } = useRoute<RouteProps>();

  const {data, isLoading} = useRetrieveMovieDetails({
    movieId: info.id,
  });

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size={'large'} color={theme.primary} />
      </View>
    );
  }

  return (
    <SafeAreaView>
      <Pressable onPress={goBack} style={[styles.backbutton, {top: top + 10}]}>
        <Icon
          size={normalize(30)}
          name="chevron-back-sharp"
          color={theme.white}
        />
      </Pressable>
      <ScrollView nestedScrollEnabled>
        <View style={{height: height}}>
          <Swiper
            style={styles.swiper}
            autoplay
            autoplayTimeout={4}
            showsPagination={false}
            height={248}
            loop
            index={5}>
            {data?.images?.backdrops.map((item, index) => (
              <View key={index}>
                <Image
                  source={{uri: `${TMDB_IMG_URL}/w780/${item.file_path}`}}
                  style={styles.imageBackdrop}
                />
                <LinearGradient
                  colors={[
                    'rgba(0, 0, 0, 0.2)',
                    'rgba(0,0,0, 0.2)',
                    'rgba(0,0,0, 0.7)',
                  ]}
                  style={styles.linearGradient}
                />
              </View>
            ))}
          </Swiper>
          <View style={styles.cardContainer}>
            <Image
              source={{uri: `${TMDB_IMG_URL}/w185/${data?.poster_path}`}}
              style={styles.cardImage}
            />
            <View style={styles.cardDetails}>
              <Text style={[styles.cardTitle, {color: theme.titleText}]}>
                {data?.original_title}
              </Text>
              <Text style={[styles.cardTagline, {color: theme.titleText}]}>
                {data?.tagline}
              </Text>
              <View style={styles.cardGenre}>
                {data?.genres?.map(item => (
                  <Text
                    key={item.id}
                    style={[styles.cardGenreItem, {color: theme.titleText}]}>
                    {item.name}
                  </Text>
                ))}
              </View>
              <View style={styles.cardNumbers}>
                <View style={styles.cardStar}>
                  <Icon name="star" size={14} color="#F5B642" />
                  <Text
                    style={[styles.cardStarRatings, {color: theme.titleText}]}>
                    {data?.vote_average.toFixed(1)}
                  </Text>
                </View>
                <Text style={styles.cardRunningHours} />
              </View>
            </View>
          </View>
          <Tabs info={data} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  backbutton: {
    position: 'absolute',
    width: 40,
    height: 40,
    zIndex: 10,
    borderRadius: 40,

    left: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    ...fonts.bold,
    paddingTop: 10,
    fontSize: 12,
  },
  underlineStyle: {
    backgroundColor: '#EA0000',
  },

  contentContainer: {
    flex: 1,
    marginTop: 157,
  },
  progressBar: {
    backgroundColor: '#0a0a0a',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    // backgroundColor: '#0a0a0a',
  },
  swiper: {
    position: 'absolute',
    flex: 1,
  },
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
    flex: 1,
    position: 'absolute',
    top: 200,
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
    paddingTop: 50,
  },
  cardTitle: {
    fontSize: 19,
    ...fonts.semiBold,
    paddingTop: 10,
  },
  cardTagline: {
    ...fonts.regular,
    fontSize: 12,
  },
  cardGenre: {
    flexDirection: 'row',
  },
  cardGenreItem: {
    textAlign: 'left',
    fontSize: 10,
    marginRight: 5,
    color: 'white',
  },
  cardNumbers: {
    flexDirection: 'row',
    marginTop: 5,
  },
  cardStar: {
    flexDirection: 'row',
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
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
