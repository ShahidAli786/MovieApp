import React, {useState} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

type FormCheckboxProps = {
  label: string;
  onChange: (value: boolean) => void;
};

const FormCheckbox = ({label, onChange}: FormCheckboxProps) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
    // Pass the updated checkbox state to the parent component
    onChange(!isChecked);
  };

  return (
    <TouchableOpacity onPress={handleToggle} style={styles.checkboxContainer}>
      <View
        style={[
          styles.checkbox,
          isChecked ? styles.checked : styles.unchecked,
        ]}>
        {isChecked && <Text style={styles.checkmark}>✓</Text>}
      </View>
      <Text>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  checked: {
    backgroundColor: '#000', // Change this color to the desired checked color
  },
  unchecked: {
    backgroundColor: '#fff', // Change this color to the desired unchecked color
  },
  checkmark: {
    color: '#fff', // Change this color to the color of the checkmark
  },
});

export default FormCheckbox;
