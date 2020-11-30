import React from 'react';
import { TextInput, StyleSheet, View, Text } from 'react-native';

function Input({ label, onChangeText, value, password = false }){
  return(
    <TextInput
      value={value} 
      onChangeText={onChangeText} 
      style={styles.input} 
      placeholder={label} 
      secureTextEntry={password}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 6,
    fontSize: 16,
    margin: 5,
    width: '90%'
  }
});

export default Input;