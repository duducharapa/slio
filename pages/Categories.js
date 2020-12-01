import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

import Background from '../components/Background';
import Category from '../components/Category';
import CategoryList from '../components/CategoryList';

function Categories() {
  return(
    <Background>
      <View style={styles.container}>
        <Text style={styles.categoryLabel}>Categorias</Text>
        <CategoryList />
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  categoryLabel: {
    fontSize: 28,
    color: '#4F4F4F'
  },
  container: {
    width: '100%',
    alignItems: 'center',
  }
});

export default Categories;