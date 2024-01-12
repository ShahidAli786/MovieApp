import {fonts} from '@config/fonts';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {
  ActivityIndicator,
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
} from 'react-native';
import {useTheme} from '@theme/useTheme';
import Touch from '@components/common/Touch';
import {useNavigation} from '@react-navigation/native';

type SearchInputProps = TextInputProps & {
  loading?: boolean;
};

const SearchInput = ({loading, ...props}: SearchInputProps) => {
  const {goBack} = useNavigation();
  const theme = useTheme();
  return (
    <View style={styles.inputRow}>
      <Touch onPress={goBack}>
        <Icon name="arrowleft" size={30} color={theme.titleText} />
      </Touch>
      <TextInput
        style={styles.input}
        placeholder="Search Movies Here..."
        placeholderTextColor="gray"
        {...props}
      />
      {loading && (
        <View style={styles.loading}>
          <ActivityIndicator color={theme.primary} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width: '90%',
    height: 45,
    borderColor: 'gray',
    fontSize: 16,
    ...fonts.medium,
    paddingHorizontal: 10,
    color: '#333',
    backgroundColor: 'white',
    borderRadius: 5,
    // shadow
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    elevation: 2,
  },
  inputRow: {
    flexDirection: 'row',
    margin: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  loading: {
    position: 'absolute',
    right: 10,
  },
});

export default SearchInput;
