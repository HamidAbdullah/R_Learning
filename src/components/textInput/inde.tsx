import React from 'react';
import {View,TextInput} from 'react-native';
import styles from './style';

type TextInputTypes =  {
    placeholder : string,
    value: string,
    onChangeText: any,
    placeholderTextColor: string,
    customInput: any,
    customContainerInput: any,
    multiline: any,
    secureTextEntry: boolean,
}

function CustomTextInput(props: TextInputTypes) {
  const {
    placeholder,
    value,
    onChangeText,
    placeholderTextColor,
    customInput,
    customContainerInput,
    multiline,
    secureTextEntry = false,
  } = props || {};
  return (
    <View style={[styles.inputContainer, customContainerInput]}>
      <TextInput
        style={[styles.input, customInput]}
        placeholder={placeholder}
        multiline={multiline}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor={placeholderTextColor}
        secureTextEntry = {secureTextEntry}
      />
    </View>
  );
}

export default CustomTextInput;