import React,{ useState } from 'react';
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import DatePicker from '@react-native-community/datetimepicker';

import Background from '../components/Background';
import Button from '../components/Button';
import Input from '../components/Input';
import rice from '../assets/rice.png';

function CreateProduct() {
  const [fabricatedDate, setFabricatedDate] = useState(new Date());
  const [showFabricated, setShowFabricated] = useState(false);
  const [buyDate, setBuyDate] = useState(new Date());
  const [showBuy, setShowBuy] = useState(false);
  const [expireDate, setExpireDate] = useState(new Date());
  const [showExpire, setShowExpire] = useState(false);
  const [name, setName] = useState('Arroz Prato Fino');

  const registerProduct = () => {
    alert('Produto registrado!');
    setFabricatedDate(new Date());
    setBuyDate(new Date());
    setExpireDate(new Date());
    setName('');
  }

  const changeFabricatedDate = (_, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowFabricated(!showFabricated);
    setFabricatedDate(currentDate);
  }

  const changeBuyDate = (_, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowBuy(!showBuy);
    setBuyDate(currentDate); 
  }

  const changeExpireDate = (_, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowExpire(!showExpire);
    setExpireDate(currentDate);
  }

  return(
    <Background>
      <Image source={rice} style={styles.productImage} />

      <View style={styles.container}>
        <View style={styles.containerLabel}>
          <Text style={styles.label}>Nome do alimento</Text>
        </View>
        <Input value={name} onChangeText={value => setName(value)} />

        <Button 
          title={fabricatedDate.toDateString() !== new Date().toDateString() ? `Fabricado em ${fabricatedDate.toDateString()}` : "Data de fabricação"} 
          color="rgb(232,224,224)"
          textColor="#4F4F4F" 
          onPress={() => setShowFabricated(!showFabricated)} 
        />
        {
          showFabricated && (
            <DatePicker value={fabricatedDate} onChange={changeFabricatedDate} mode="date" />
          )
        }

        <Button 
          title={buyDate.toDateString() !== new Date().toDateString() ? `Comprado em ${buyDate.toDateString()}` : "Data de compra"} 
          color="rgb(232,224,224)"
          textColor="#4F4F4F"
          onPress={() => setShowBuy(!showBuy)} />
        {
          showBuy && (
            <DatePicker value={buyDate} onChange={changeBuyDate} mode="date" />
          )
        }

        <Button 
          title={expireDate.toDateString() !== new Date().toDateString() ? `Vence em ${expireDate.toDateString()}` : "Data de validade"} 
          color="rgb(232,224,224)"
          textColor="#4F4F4F"
          onPress={() => setShowExpire(!showExpire)} />
        {
          showExpire && (
            <DatePicker value={expireDate} onChange={changeExpireDate} mode="date" />
          )
        }
      </View>

      <Button title="Cadastrar" color="#4CD288" onPress={registerProduct} />

    </Background>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    display: 'flex',
    alignItems: 'center'
  },
  label: {
    alignSelf: 'flex-start',
    fontSize: 17,
    color: '#4F4F4F',
  },
  containerLabel: {
    width: '90%'
  },
  productImage: {
    width: '30%',
    height: '20%',
  }
});

export default CreateProduct;