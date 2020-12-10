import React from 'react';
import { SectionList, View, Text, StyleSheet } from 'react-native';

import Product from '../components/Product';
import rice from '../assets/rice.png';

function ProductList({ title, color, textColor }) {
  const data = [
    {
      title,
      data: [
        {name: 'Arroz Prato Fino', image: rice},
        {name: 'Arroz Prato Fino', image: rice},
        {name: 'Arroz Prato Fino', image: rice}
      ]
    },
  ]

  return(
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>{data[0].title}</Text>
      <SectionList
        sections={data}
        renderItem={({ item }) => {
          const { name,image } = item;
          return <Product name={name} color={color} textColor={textColor} image={image} />;
        }}
        keyExtractor={(index,item) => item+index}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 20,
  },
  sectionTitle: {
    fontSize: 20,
    marginLeft: 9,
    color: '#4F4F4F',
    fontWeight: 'normal'
  }
});

export default ProductList;