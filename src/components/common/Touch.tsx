import React from 'react';
import {Pressable, PressableProps} from 'react-native';
export interface ITouchProps extends PressableProps {
  children: React.ReactNode;
  disabled?: boolean;
}

const Touch = ({children, onPress, disabled, ...props}: ITouchProps) => {
  return (
    <Pressable onPress={onPress} disabled={disabled} {...props}>
      {children}
    </Pressable>
  );
};

export default Touch;

/**
 *
 * ----Touchable Opacity Usecase
 *
<Touch
style={({pressed}) => [
  {
    opacity: pressed ? 0.2 : 1,,
  },
  styles.button,
]}>
<Text>Hello</Text>
</Touch>
*/
// ======================
/**
 *
 * ----Touchable Ripple Effect Android
 *
<Touch
android_ripple={{color: 'white'}}
style={({pressed}) => [
  {
    opacity: pressed ? 0.2 : 1,,
  },
  styles.button,
]}>
<Text>Hello</Text>
</Touch>
*/

/**
 *

  const animated = new Animated.Value(1);
  const fadeIn = () => {
    Animated.timing(animated, {
      toValue: 0.4,
      duration: 150,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(animated, {
      toValue: 1,
      duration: 250,
      useNativeDriver: true,
    }).start();
  };
  return (
    <SafeAreaView style={styles.container}>
      <Pressable onPressIn={fadeIn} onPressOut={fadeOut}>
        <Animated.View
          style={[styles.button, { backgroundColor: '#2277ee', opacity: animated }]}>
          <Image
            style={styles.tinyLogo}
            source={{
              uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
          />
          <Text style={styles.buttonText}>Image button</Text>
        </Animated.View>
      </Pressable>
    </SafeAreaView>
  );
};

 */
