import React from 'react';
import { StyleSheet, ScrollView, Image } from 'react-native';

import ProductList from '../components/ProductList';
import Background from '../components/Background';
import adversiment from '../assets/adversiment.png';

function Home() {
  return(
    <Background>
      <ScrollView 
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <Image source={adversiment} />
        <ProductList title="Recentes" color="#DAFDCF" textColor="#5FBB97" />
        <ProductList title="Perto da validade" color="#FDF7CF" textColor="#F8F490" />
        <ProductList title="Vencidos" color="#F5BCAA" textColor="#FC7F74" />
      </ScrollView>
    </Background>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    marginTop: 20,
    width: '90%',
  }
});

export default Home;