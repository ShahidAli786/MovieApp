/* eslint-disable react-hooks/exhaustive-deps */
import {
  View,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import React, {useCallback, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '@store/hooks';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {MainStackParamsList} from '@navigations/stacks/types';
import {moviesApis} from '@store/apis/moviesApis';
import MovieListItem from './MovieListItem';
import {useTheme} from '@theme/useTheme';
import {reset} from '@store/slices/moviesSlice';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {IMovie} from '@definitions/movies';
import SearchInputButton from '@components/search-input/SearchInputButton';

type TNavigation = NativeStackNavigationProp<MainStackParamsList, 'MoviesList'>;

type RouteProps = RouteProp<MainStackParamsList, 'MoviesList'>;

export default function MoviesList() {
  const theme = useTheme();
  const route = useRoute<RouteProps>();
  const navigation = useNavigation<TNavigation>();

  const {movies, isLoading, currentPage, prevPage, totalPages} = useAppSelector(
    state => state.movies,
  );

  const dispatch = useAppDispatch();

  const getMoviesList = useCallback(() => {
    dispatch(
      moviesApis.endpoints.retrieveMoviesList.initiate({
        page: currentPage,
        type: route.params.type,
      }),
    );
  }, [currentPage]);

  useEffect(() => {
    getMoviesList();
  }, []);

  const handleLoadMore = () => {
    if (currentPage !== prevPage && totalPages > currentPage) {
      getMoviesList();
    }
  };

  const onRefresh = () => {
    dispatch(reset());
    dispatch(
      moviesApis.endpoints.retrieveMoviesList.initiate({
        page: 1,
        type: route.params.type,
      }),
    );
  };
  const handleViewDetails = (info: IMovie) => {
    navigation.navigate('MovieDetails', {
      info,
    });
  };

  const handleSearchPress = () => {
    navigation.navigate('SearchMovies');
  };
  const renderSeprator = () => <View style={styles.seprator} />;
  const renderListItem = () => (
    <SearchInputButton onPress={handleSearchPress} />
  );
  return (
    <FlatList
      data={movies}
      stickyHeaderHiddenOnScroll
      stickyHeaderIndices={[0]}
      ListHeaderComponent={renderListItem}
      refreshControl={
        <RefreshControl
          refreshing={false}
          onRefresh={onRefresh}
          colors={['#EA0000']}
          tintColor="white"
          title="loading..."
          titleColor="white"
          progressBackgroundColor="white"
        />
      }
      style={styles.container}
      initialNumToRender={10}
      ItemSeparatorComponent={renderSeprator}
      renderItem={({item}) => (
        <MovieListItem
          onViewDetails={() => handleViewDetails(item)}
          info={item}
        />
      )}
      keyExtractor={item => item.id.toString()}
      onEndReached={handleLoadMore}
      onEndReachedThreshold={0.8}
      ListFooterComponent={
        isLoading ? (
          <View style={styles.loader}>
            <ActivityIndicator size="large" color={theme.primary} />
          </View>
        ) : (
          <View style={styles.loader} />
        )
      }
    />
  );
}
const styles = StyleSheet.create({
  container: {flex: 1},
  seprator: {
    height: 10,
  },
  loader: {
    height: 100,
    justifyContent: 'center',
  },
});
