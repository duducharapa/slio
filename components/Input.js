import React from 'react';
import { TextInput, StyleSheet, View, Text } from 'react-native';

function Input({ label }){
  return(
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder={label} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
    display: 'flex',
    alignItems: 'center',
    margin: 5,
  },
  input: {
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 6,
    fontSize: 16,
  }
});

export default Input;