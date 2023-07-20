import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {useTheme} from '@theme/useTheme';
import commonStyle from '@config/commonStyle';
import Button from '@components/Button';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {MainStackParamsList} from '@navigations/stacks/types';

type TNavigation = NativeStackNavigationProp<MainStackParamsList, 'OnBoarding'>;

export default function Login() {
  const theme = useTheme();
  const navigation = useNavigation<TNavigation>();

  const handleLoginPress = () => {
    navigation.navigate('MainTabs', {screen: 'movies'});
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={[styles.title, {color: theme.titleText}]}>Login</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button onPress={handleLoginPress} title="Login" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 28,
    ...commonStyle.textSemibold,
  },
  textContainer: {
    flex: 9,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flex: 1,
    width: '100%',
  },
});
