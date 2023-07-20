import {
  View,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '@store/hooks';
import {RouteProp, useRoute} from '@react-navigation/native';
import {MainStackParamsList} from '@navigations/stacks/types';
import {moviesApis} from '@store/apis/moviesApis';
import MovieListItem from './MovieListItem';
import {useTheme} from '@theme/useTheme';
import {reset} from '@store/slices/moviesSlice';

type RouteProps = RouteProp<MainStackParamsList, 'MoviesList'>;

export default function MoviesList() {
  const theme = useTheme();
  const route = useRoute<RouteProps>();

  const {movies, isLoading, currentPage, prevPage, totalPages} = useAppSelector(
    state => state.movies,
  );

  const dispatch = useAppDispatch();

  const getMoviesList = () => {
    dispatch(
      moviesApis.endpoints.retrieveMoviesList.initiate({
        page: currentPage,
        type: route.params.type,
      }),
    );
  };

  useEffect(() => {
    getMoviesList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

  const renderSeprator = () => <View style={styles.seprator} />;
  return (
    <FlatList
      data={movies}
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
      renderItem={({item}) => <MovieListItem info={item} />}
      keyExtractor={item => item.id.toString()}
      onEndReached={handleLoadMore}
      onEndReachedThreshold={0.5}
      ListFooterComponent={
        isLoading ? (
          <View style={styles.loader}>
            <ActivityIndicator size="large" color={theme.primary} />
          </View>
        ) : null
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
