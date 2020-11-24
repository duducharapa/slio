import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';

import logo from '../assets/slio-logo.png';
import Button from '../components/Button';
import Input from '../components/Input';
import Link from '../components/Link';

const { width, height } = Dimensions.get('window');

function Login() {
  return (
    <View style={styles.container}>
      <Image source={logo} style={{ width: width*0.41, height: height*0.23 }} />
      <View style={styles.subContainer}>
        <Input label="Email" />
        <Input label="Senha" />
        <Button title="Entrar" color="#4CD288" />
        <View style={styles.linkContainer}>
          <Text>Que? Como assim esqueceu sua senha?</Text>
          <Link label="Clique aqui para redefinir" />
        </View>
        <View style={styles.linkRowContainer}>
          <Text style={styles.registrationLabel}>Ainda não tem cadastro?</Text>
          <Link label="Corre aqui meu filho" />
        </View>
      </View>
      <View style={styles.subContainer}>
        <Text>Quer fazer login de outro modo?</Text>
        <Button title="Continuar com o Google" color="white" textColor="blue" />
        <Button title="Continuar com o Facebook" color="#395185" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  logo: {
    width: '51%',
    height: '30%',
  },
  subContainer: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  linkContainer: {
    width: '90%',
    display: 'flex',
    marginVertical: 6,
  },
  linkRowContainer: {
    width: '90%',
    display: 'flex',
    flexDirection: 'row',
    marginVertical: 6,
  },
  registrationLabel: {
    marginRight: 6,
  }
});

export default Login;
