import {
  View,
  Text,
  StyleSheet,
  Platform,
  GestureResponderEvent,
} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {fonts} from '@config/fonts';
import {useTheme} from '@theme/useTheme';

type Props = {
  title: string;
  icon: string;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
};

export default function BrowseListItem({title, icon, onPress}: Props) {
  const theme = useTheme();
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      <View style={styles.browseListItem}>
        <Icon name={icon} size={25} color={theme.primary} />
        <Text style={[styles.browseListItemText, {color: theme.titleText}]}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  browseListItem: {
    ...Platform.select({
      ios: {
        paddingVertical: 10,
      },
      android: {
        paddingVertical: 10,
      },
    }),
    flexDirection: 'row',
    alignItems: 'center',
  },
  browseListItemText: {
    flex: 1,

    paddingLeft: 10,
    ...Platform.select({
      ios: {
        fontSize: 15,
        ...fonts.medium,
      },
      android: {
        fontSize: 16,
        ...fonts.medium,
      },
    }),
  },
});
