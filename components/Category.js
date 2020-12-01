import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

function Category({ name, image }){
  return(
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <View style={styles.labelContainer}>
        <Text>{name}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '44%',
    height: 120,
    backgroundColor: 'rgb(232,224,224)',
    margin: 10
  },
  image: {
    width: '50%',
    height: '60%'
  },
  labelContainer: {
    position: 'absolute',
    top: 92,
    backgroundColor: '#4CD288',
    width: '100%',
    padding: 5,
    display: 'flex',
    alignItems: 'center'
  },
  label: {
    color: '#4F4F4F'
  }
});

export default Category;