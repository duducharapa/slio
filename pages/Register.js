import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image, Dimensions } from 'react-native';

import Button from '../components/Button';
import Input from '../components/Input';
import logo from '../assets/slio-logo.png';

const { width, height } = Dimensions.get('screen');

function Register({ close }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');

  const register = () => {
    if(!username){
      alert('Usuário não pode ser vazio');
      return false;
    } else if(!email){
      alert('Email não pode ser vazio');
      return false;
    } else if(!password){
      alert('Senha não pode ser vazia');
      return false;
    } else if(!confirmPassword){
      alert('Confirmação da senha não pode ser vazia');
      return false;
    } else if(!city) {
      alert('Cidade não pode ser vazia');
      return false;
    } else if(!state) {
      alert('Estado não pode ser vazio');
      return false;
    } else if(password !== confirmPassword) {
      alert('A senha e sua confirmação não coincidem');
      return false;
    }

    return true;
  }

  const screens = [
    <View style={styles.inputsContainer}>
      <Input label="Nome" value={username} onChangeText={text => setUsername(text)} />
      <Input label="Email" value={email} onChangeText={text => setEmail(text)} />
    </View>,
    <View style={styles.inputsContainer}>
      <Input label="Senha" value={password} onChangeText={text => setPassword(text)} />
      <Input label="Confirmar senha" value={confirmPassword} onChangeText={text => setConfirmPassword(text)} />
    </View>,
    <View style={styles.inputsContainer}>
      <Input label="Cidade" value={city} onChangeText={text => setCity(text)} />
      <Input label="Estado" value={state} onChangeText={text => setState(text)} />
    </View>
  ];
  const [activeScreen, setActiveScreen] = useState(0);

  const changeScreen = step => {
    if((step > 0 && activeScreen === 2) || (step < 0 && activeScreen === 0)){
      let validated = true;
      if(activeScreen === 2){
        validated = register();

        if(validated){
          alert('Cadastro realizado com sucesso!');
        }
      }
      
      if(validated) {
        setActiveScreen(0);
        return close();
      }
    }else{
      setActiveScreen(activeScreen+step);
    }
  }

  useEffect(() => {}, [activeScreen]);

  return(
    <View style={styles.container}>
      <Image source={logo} style={{ width: width*0.355, height: height*0.2 }} />
      {screens[activeScreen]}
      <View style={styles.formContainer}>
        <Button title={activeScreen === 2 ? "Concluir" : "Próximo"} color="#4CD288" onPress={() => changeScreen(1)} />
        <Button title="Voltar" onPress={() => changeScreen(-1)} textColor="black" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    width: '80%',
    height: '80%',
  },
  formContainer: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  inputsContainer: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
  }
});

export default Register;