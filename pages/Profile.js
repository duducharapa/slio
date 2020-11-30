import React,{ useState } from 'react';
import { Text, StyleSheet, Switch } from 'react-native';

import Background from '../components/Background';
import Input from '../components/Input';

const states = [
  'Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo',
  'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba',
  'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul',
  'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'
];

function Profile({ goBack }) {
  const [notifications, setNotifications] = useState(true);
  const [password, setPassword] = useState('A');
  const [state, setState] = useState(states[5]);

  return(
    <Background>
      <Text>Admin</Text>
      <Text>email</Text>
      <Text>valor email</Text>
      <Text>Senha</Text>
      <Input value={password} onChangeText={value => setPassword(value)} />
      <Text>Notificações</Text>
      <Switch
        value={notifications} 
        onValueChange={() => setNotifications(!notifications)}
      />
      <Button title="Sair" color="#FC7F74" onPress={goBack} />
    </Background>
  );
}

const styles = StyleSheet.create({
  
});

export default Profile;