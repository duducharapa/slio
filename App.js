import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LogBox } from 'react-native';

import Login from './pages/Login';
import HomeContainer from './pages/HomeContainer';
import Register from './pages/Register';

const Stack = createStackNavigator();

function App() {
  LogBox.ignoreAllLogs();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" headerMode="none">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="HomeContainer" component={HomeContainer} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;