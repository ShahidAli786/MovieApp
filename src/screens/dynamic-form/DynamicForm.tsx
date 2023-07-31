import {View, StyleSheet, FlatList} from 'react-native';
import React, {useReducer, useState} from 'react';

import {FormItem} from './types';

import {Text, TextInput} from 'react-native-paper';
import normalize from '@config/normalize';
import FormCheckbox from './components/FormCheckbox';
import DropDownInput from './components/DropDownInput';

// Suppose that this data fetched from API endpoint

let initialState: FormItem[] = [
  {
    id: 1,
    label: 'Email',
    placeholder: 'Enter your email',
    type: 'input',
  },
  {
    id: 5,
    label: 'Name',
    placeholder: 'Enter your name',
    type: 'input',
  },
  {
    id: 2,
    label: 'level',
    placeholder: 'Select Your Level',
    type: 'dropdown',
    options: [
      {
        label: 'Beginner',
        value: 'beginner',
      },
      {
        label: 'Intermediate',
        value: 'intermediate',
      },
      {
        label: 'Advanced',
        value: 'advanced',
      },
    ],
  },
  {
    id: 3,
    label: 'Accept Terms and Conditions',
    placeholder: '',
    type: 'checkbox',
  },
];
let LoginForm: FormItem[] = [
  {
    id: 1,
    label: 'Email',
    placeholder: 'Enter your email',
    type: 'input',
  },
  {
    id: 5,
    label: 'Name',
    placeholder: 'Enter your name',
    type: 'input',
  },
  {
    id: 2,
    label: 'level',
    placeholder: 'Select Your Level',
    type: 'dropdown',
    options: [
      {
        label: 'Beginner',
        value: 'beginner',
      },
      {
        label: 'Intermediate',
        value: 'intermediate',
      },
      {
        label: 'Advanced',
        value: 'advanced',
      },
    ],
  },
  {
    id: 3,
    label: 'Accept Terms and Conditions',
    placeholder: '',
    type: 'checkbox',
  },
];
let ContactForm: FormItem[] = [
  {
    id: 1,
    label: 'Email',
    placeholder: 'Enter your email',
    type: 'input',
  },
  {
    id: 5,
    label: 'Name',
    placeholder: 'Enter your name',
    type: 'input',
  },
  {
    id: 2,
    label: 'level',
    placeholder: 'Select Your Level',
    type: 'dropdown',
    options: [
      {
        label: 'Beginner',
        value: 'beginner',
      },
      {
        label: 'Intermediate',
        value: 'intermediate',
      },
      {
        label: 'Advanced',
        value: 'advanced',
      },
    ],
  },
  {
    id: 3,
    label: 'Accept Terms and Conditions',
    placeholder: '',
    type: 'checkbox',
  },
];

type MultipleFormsStateItem = {
  title: string;
  id: number;
  value: FormItem[];
};
let multipleFormsState: MultipleFormsStateItem[] = [
  {id: 1, title: 'Initial Form', value: initialState},
  {id: 2, title: 'Login Form', value: LoginForm},
  {id: 3, title: 'Contact Form', value: ContactForm},
];
type Action = {
  type: 'SET_VALUE';
  payload: {id: number; formId: number; value: string | boolean | number};
};

const formReducer = (
  state: MultipleFormsStateItem[],
  action: Action,
): MultipleFormsStateItem[] => {
  switch (action.type) {
    case 'SET_VALUE': {
      const currentForm = state.filter(
        item => item.id === action.payload.formId,
      )[0];

      const currentFormStateItem = currentForm.value.map(item => {
        if (item.id === action.payload.id) {
          return {...item, value: action.payload.value};
        }
        return item;
      });

      const nextState = state.map(v => {
        if (v.id === action.payload.formId) {
          return {...v, value: currentFormStateItem};
        }
        return v;
      });

      return nextState;
    }
    default:
      return state;
  }
};

export default function DynamicForm() {
  const [stateMultipleForm, dispatch] = useReducer(
    formReducer,
    multipleFormsState,
  );
  const [showDropDown, setShowDropDown] = useState(false);

  const handleInputChange = (
    id: number,
    value: string | boolean | number,
    formId: number,
  ) => {
    dispatch({type: 'SET_VALUE', payload: {id, value, formId}});
  };

  const renderItem = ({item}: {item: MultipleFormsStateItem}) => {
    const {value: formData, title, id: formId} = item;
    return (
      <View style={styles.container}>
        <Text>{title}</Text>
        {formData.map(form => {
          switch (form.type) {
            case 'input':
              return (
                <TextInput
                  key={form.id}
                  mode="outlined"
                  showSoftInputOnFocus
                  focusable
                  label={form.label}
                  onChangeText={text =>
                    handleInputChange(form.id, text, formId)
                  }
                  placeholder={form.placeholder}
                />
              );
            case 'dropdown':
              return (
                <DropDownInput
                  key={form.id}
                  label={form.label}
                  value={form?.value || ''}
                  setValue={value => handleInputChange(form.id, value, formId)}
                  visible={showDropDown}
                  showDropDown={() => setShowDropDown(true)}
                  onDismiss={() => setShowDropDown(false)}
                  list={form?.options || []}
                />
              );
            case 'checkbox':
              return (
                <FormCheckbox
                  key={form.id}
                  onChange={value => handleInputChange(form.id, value, formId)}
                  label={form.label}
                />
              );

            default:
              return (
                <TextInput
                  key={form.id}
                  mode="outlined"
                  showSoftInputOnFocus
                  focusable
                  label={form.label}
                  placeholder={form.placeholder}
                />
              );
          }
        })}
        <Text>{JSON.stringify(formData)}</Text>
      </View>
    );
  };
  console.log(stateMultipleForm);
  return (
    <FlatList
      keyExtractor={item => item.id.toString()}
      data={stateMultipleForm}
      renderItem={renderItem}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    rowGap: normalize(15),
    padding: normalize(25),
  },
});
