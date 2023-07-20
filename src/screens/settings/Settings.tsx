import {View, StyleSheet} from 'react-native';
import React from 'react';
import {useToggleTheme} from '@theme/useToggleTheme';
import Button from '@components/Button';

export default function Settings() {
  const toggleTheme = useToggleTheme();
  return (
    <View style={styles.container}>
      <Button title="Toggle Theme" onPress={toggleTheme} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
