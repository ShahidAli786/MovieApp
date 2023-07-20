import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useTheme} from '@theme/useTheme';
import Button from '@components/Button';
import {useToggleTheme} from '@theme/useToggleTheme';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import commonStyle from '@config/commonStyle';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {MainStackParamsList} from '@navigations/stacks/types';
import {useCurrentTheme} from '@theme/useCurrentTheme';

type TNavigation = NativeStackNavigationProp<MainStackParamsList, 'OnBoarding'>;

export default function OnBoarding() {
  const navigation = useNavigation<TNavigation>();
  const theme = useTheme();
  const toggleTheme = useToggleTheme();
  const currentTheme = useCurrentTheme();
  const {top, right} = useSafeAreaInsets();

  const handleLogin = () => {
    navigation.navigate('Login');
  };
  return (
    <SafeAreaView
      style={[styles.container, {backgroundColor: theme.backgroundColor}]}>
      <StatusBar
        barStyle={currentTheme === 'dark' ? 'light-content' : 'dark-content'}
      />
      <View style={styles.textContainer}>
        <Text style={[styles.title, {color: theme.titleText}]}>
          Welcome User
        </Text>
        <Text style={[styles.description, {color: theme.titleText}]}>
          This is demo template for{'\n'} react native
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button onPress={handleLogin} title="Get Started" />
      </View>
      <Button
        onPress={toggleTheme}
        textProps={{
          style: {
            color: theme.titleText,
            ...commonStyle.textMedium,
          },
        }}
        style={[styles.themeBtn, {top: top + 10, right: right + 20}]}
        title="Toggle Theme"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  textContainer: {
    flex: 9,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
  },
  themeBtn: {
    height: 60,
    position: 'absolute',
  },
  title: {
    ...commonStyle.textSemibold,
    fontSize: 28,
  },
  description: {
    ...commonStyle.textRegular,
    fontSize: 16,
    paddingVertical: 10,
    textAlign: 'center',
  },
  buttonContainer: {
    flex: 1,
  },
});
