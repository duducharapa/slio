import React,{ useState } from 'react';
import { Text, StyleSheet, Switch, View, Image, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';

import Background from '../components/Background';
import Button from '../components/Button';
import Input from '../components/Input';
import profile from '../assets/profile.jpeg';

const states = [
  'Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo',
  'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba',
  'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul',
  'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'
];

function Profile({ route }) {
  const { goBack } = route.params;
  
  const [notifications, setNotifications] = useState(true);
  const [password, setPassword] = useState('A');
  const [state, setState] = useState(states[5]);

  return(
    <Background>
      <ScrollView contentContainerStyle={styles.orderContainer} style={{width: '100%', height: '100%', display: 'flex'}}
      centerContent={true}>
        <View style={[styles.container, {width: '100%'}]}>
          <Image style={styles.profilePic} source={profile} />
          <Text style={[styles.usernameLabel,{ margin: 0, padding: 0 }]}>Admin</Text>
        </View>
        <View style={[styles.container, {width: '100%'}]}>
          <View style={[styles.container, styles.containerRow]}>
            <Text style={styles.label}>Email</Text>
            <Text>admin@gmail.com</Text>
          </View>
          <View style={[styles.container, {width: '100%'}]}>
            <View style={[styles.inputLabelView]}>
              <Text style={styles.label}>Senha</Text>
            </View>
            <Input value={password} onChangeText={value => setPassword(value)} />
          </View>
          <View style={styles.container}>
            <Text style={styles.label}>Estado</Text>
            <Picker 
              mode='dropdown' 
              selectedValue={state} 
              onValueChange={(value) => setState(value)}
              style={styles.picker}
              dropdownIconColor="#4F4F4F"
            >
              {states.map((state, index) => (
                <Picker.Item value={state} label={state} key={index} />
              ))}
            </Picker>
          </View>
          <View style={[styles.container, styles.containerRow]}>
            <Text style={styles.label}>Notificações</Text>
            <Switch
              value={notifications} 
              onValueChange={() => setNotifications(!notifications)}
            />
          </View>

        </View>
        <View style={[styles.container, styles.containerButtons]}>
          <Button title="Sair" color="#FC7F74" onPress={goBack} />
        </View>
      </ScrollView>
    </Background>
  );
}

const styles = StyleSheet.create({
  orderContainer: {
    width: '100%',
    height: '92%',
    display: 'flex',
    marginVertical: 30,
    justifyContent: 'space-between'
  },
  container: {
    width: '90%',
    display: 'flex',
    alignItems: 'center'
  },
  containerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  label: {
    alignSelf: 'flex-start',
    fontSize: 17,
    color: '#4F4F4F',
  },
  containerButtons: {
    width: '100%'
  },
  profilePic: {
    width: '32%',
    height: '42%',
    borderRadius: 100
  },
  picker: {
    width: '100%',
    height: 36,
    backgroundColor: 'rgb(232,224,224)',
  },
  inputLabelView: {
    width: '90%'
  },
  usernameLabel: {
    fontSize: 30,
    color: '#4F4F4F'
  }
});

export default Profile;