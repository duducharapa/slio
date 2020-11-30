import React,{ useState } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, Modal } from 'react-native';

import logo from '../assets/slio-logo.png';
import Button from '../components/Button';
import Input from '../components/Input';
import Link from '../components/Link';
import Background from '../components/Background';
import Register from './Register';

const { width, height } = Dimensions.get('window');

function Login({ navigation }) {
  const notImplementedYet = () => alert('Ainda não implementado');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [registerModal, setRegisterModal] = useState(false);

  const login = () => {
    if(email === "A" && password === "A"){
      navigation.navigate("HomeContainer");
    }else{
      alert('Email e senha incorretos');
    }
  };
  
  return (
    <>
      <Background>
        <Image source={logo} style={{ width: width*0.41, height: height*0.23 }} />
        <View style={styles.subContainer}>
          <Input label="Email" value={email} onChangeText={text => setEmail(text)} />
          <Input label="Senha" value={password} onChangeText={text => setPassword(text)} password />
          <Button title="Entrar" color="#4CD288" onPress={login} />
          <View style={styles.linkContainer}>
            <Text>Que? Como assim esqueceu sua senha?</Text>
            <Link label="Clique aqui para redefinir" onPress={notImplementedYet} />
          </View>
          <View style={styles.linkRowContainer}>
            <Text style={styles.registrationLabel}>Ainda não tem cadastro?</Text>
            <Link label="Corre aqui meu filho" onPress={() => setRegisterModal(true)} />
          </View>
        </View>
        <View style={styles.subContainer}>
          <Text style={styles.loginMethodsLabel}>Quer fazer login de outro modo?</Text>
          <Button title="Continuar com o Google" color="white" textColor="blue" onPress={notImplementedYet} />
          <Button title="Continuar com o Facebook" color="#395185" onPress={notImplementedYet} />
        </View>
      </Background>
      <Modal 
        animationType="fade" 
        visible={registerModal} 
        onRequestClose={() => setRegisterModal(false)}
        transparent={true}
      >
        <Register close={() => setRegisterModal(false)} />
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
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
  },
  loginMethodsLabel: {
    marginBottom: 5,
  }
});

export default Login;
