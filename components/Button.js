import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

function Button({title, color, textColor = 'white'}){
  return(
    <TouchableOpacity style={[styles.button, {backgroundColor: color}]}>
      <Text style={[styles.text, {color: textColor}]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    padding: 5,
    width: '90%',
    borderRadius: 8,
    elevation: 2,
    margin: 4,
  },
  text: {
    fontSize: 16,
  }
});

export default Button;