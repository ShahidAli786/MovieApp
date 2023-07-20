import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Button from '@components/Button';
import commonStyle from '@config/commonStyle';
import {useTheme} from '@theme/useTheme';
import {useAppDispatch, useAppSelector} from '@store/hooks';
import {decrement, increment} from '@store/slices/counterSlice';

export default function Home() {
  const theme = useTheme();
  const {value: count} = useAppSelector(state => state.counter);
  const dispatch = useAppDispatch();
  const handleIncreament = () => dispatch(increment());
  const handleDecreament = () => dispatch(decrement());
  return (
    <SafeAreaView style={styles.container}>
      <Text style={[commonStyle.title, {color: theme.primary}]}>{count}</Text>
      <Button onPress={handleIncreament} title="Increment" />
      <Button onPress={handleDecreament} title="Decrement" />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center', gap: 30},
});
