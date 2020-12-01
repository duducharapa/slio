import React from 'react';
import { FlatList, View, StyleSheet, Text } from 'react-native';

import Category from '../components/Category';
import myList from '../assets/my_list.png';
import cereals from '../assets/cereals.png';
import cheese from '../assets/cheese.png';
import fruits from '../assets/fruits.png';
import meat from '../assets/meat.png';
import vegetables from '../assets/vegetables.png';

function CategoryList(){
  const data = [
    {name: 'Minha lista', image: myList, index: 0},
    {name: 'Cereais', image: cereals, index: 1},
    {name: 'Laticíneos', image: cheese, index: 2},
    {name: 'Carnes', image: meat, index: 3},
    {name: 'Frutas', image: fruits, index: 4},
    {name: 'Vegetais', image: vegetables, index: 5},
  ];
  
  return(
    <FlatList
      numColumns={2}
      keyExtractor={({ index }) => index}
      renderItem={({ item }) => <Category name={item.name} image={item.image} />}
      data={data}
    />
  );
}

const styles = StyleSheet.create({
});

export default CategoryList;