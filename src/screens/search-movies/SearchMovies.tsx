import {View, FlatList, StyleSheet, RefreshControl} from 'react-native';
import React, {useState} from 'react';

import {useNavigation} from '@react-navigation/native';
import {MainStackParamsList} from '@navigations/stacks/types';

import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {IMovie} from '@definitions/movies';
import MovieListItem from '@screens/movies-list/MovieListItem';
import SearchInput from '@components/search-input/SearchInput';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useSearchMoviesLazy} from '@store/apis/moviesApis';
import {debounce} from 'lodash';

type TNavigation = NativeStackNavigationProp<
  MainStackParamsList,
  'SearchMovies'
>;

export default function SearchMovies() {
  const [searchText, setSearchText] = useState('');
  const [searchMovies, {isLoading, data, isFetching}] = useSearchMoviesLazy();

  const navigation = useNavigation<TNavigation>();

  const handleLoadMore = () => {};

  const onRefresh = () => {};
  const handleViewDetails = (info: IMovie) => {
    navigation.navigate('MovieDetails', {
      info,
    });
  };

  const getSearchResult = debounce(async () => {
    try {
      const response = await searchMovies({query: searchText});
      if (response.data) {
      }
    } catch (error) {
      console.log(error);
    }
  }, 400);
  const handleChangeText = (text: string) => {
    setSearchText(text);
    if (text.length > 3) {
      getSearchResult();
    }
  };

  const renderSeprator = () => <View style={styles.seprator} />;

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <SearchInput
        value={searchText}
        onChangeText={handleChangeText}
        loading={isLoading || isFetching}
      />
      <FlatList
        data={searchText.length < 3 ? [] : data?.results}
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
        ListFooterComponent={<View style={styles.loader} />}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  safeAreaView: {flex: 1},
  container: {flex: 1},
  seprator: {
    height: 10,
  },
  loader: {
    height: 100,
    justifyContent: 'center',
  },
});
