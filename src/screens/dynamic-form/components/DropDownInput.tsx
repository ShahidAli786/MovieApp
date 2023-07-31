// rpit.anand@stanzaliving.com

import React, {useState} from 'react';
import DropDown, {DropDownPropsInterface} from 'react-native-paper-dropdown';

type Props = DropDownPropsInterface & {
  label: string;

  setValue: (value: string | number | boolean) => void;
};

export default function DropDownInput({label, value, setValue, list}: Props) {
  const [showDropDown, setShowDropDown] = useState(false);
  return (
    <DropDown
      label={label}
      mode={'outlined'}
      value={value}
      setValue={setValue}
      visible={showDropDown}
      showDropDown={() => setShowDropDown(true)}
      onDismiss={() => setShowDropDown(false)}
      list={list}
    />
  );
}
