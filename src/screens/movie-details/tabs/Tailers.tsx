import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React from 'react';

type Props = {
  trailers: any;
};

export default function Tailers({trailers}: Props) {
  return (
    <View
      style={styles.container}
      // onLayout={getTabHeight.bind(this, 'trailers', computedHeight)}
    >
      {trailers.map((item, index) => (
        <TouchableOpacity
          key={index}

          // onPress={
          //     openYoutube.bind(this, `http://youtube.com/watch?v=${item.id}`)}
        >
          <View style={styles.thumbnailContainer}>
            <Image
              source={{uri: `${item.snippet.thumbnails.medium.url}`}}
              style={styles.thumbnail}
            />
            <Text style={styles.title}>{item.snippet.title}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    marginHorizontal: 16,
  },
  thumbnailContainer: {
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  thumbnail: {
    width: 135,
    height: 90,
    borderRadius: 3,
  },
  title: {
    flex: 1,
    color: 'white',
    fontWeight: '500',
    fontSize: 13,
    marginLeft: 10,
  },
});
