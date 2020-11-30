import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

function Product({ name, color, image, textColor }){
  return(
    <View style={[styles.container, { backgroundColor: color }]}>
      <Image source={image} style={styles.image} />
      <View style={[ styles.nameContainer, { backgroundColor: textColor } ]}>
        <Text style={styles.nameText}>{name}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    width: 220,
    height: 140,
    margin: 10,
  },
  nameContainer: {
    width: '100%',
    position: 'absolute',
    top: 120,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
  },
  image: {
    width: 120,
    height: 120,
  },
  nameText: {
    color: '#4F4F4F',
  }
});

export default Product;