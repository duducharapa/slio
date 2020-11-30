import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

function Link({label, onPress}){
  return(
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.link}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  link: {
    color: 'blue',
  }
});

export default Link;