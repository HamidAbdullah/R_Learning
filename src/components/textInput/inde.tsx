import React from 'react';
import { View, TextInput, StyleProp, ViewStyle, TextStyle } from 'react-native';
import styles from './style';

type TextInputTypes = {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholderTextColor: string;
  customInput?: StyleProp<TextStyle>;
  customContainerInput?: StyleProp<ViewStyle>;
  multiline?: boolean;
  secureTextEntry?: boolean;
  keyboardType?: any;
  autoCorrect?: boolean;
};

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
    keyboardType,
    autoCorrect = false,
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
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        autoCorrect={autoCorrect}
      />
    </View>
  );
}

export default CustomTextInput;
