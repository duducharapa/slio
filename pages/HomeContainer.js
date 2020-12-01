import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';

import Calendar from './Calendar';
import Categories from './Categories';
import CreateProduct from './CreateProduct';
import Home from './Home';
import Profile from './Profile';

const Tab = createBottomTabNavigator();

function HomeContainer({navigation}){
  const goBack = () => navigation.goBack();

  return(
    <Tab.Navigator
      initialRouteName="Home"
      backBehavior="order"
      detachInactiveScreens={true}
      screenOptions={({route}) => ({
        tabBarIcon: ({size,color}) => {
          let iconName;

          if(route.name === 'Home'){
            iconName = 'ios-home';
          } else if(route.name === 'Categories'){
            iconName = 'ios-apps';
          } else if(route.name === 'CreateProduct'){
            iconName = 'ios-add-circle';
          } else {
            iconName = 'ios-person';
          }

          return <Ionicons size={size} color={color} name={iconName} />
        }
      })}
    >
      <Tab.Screen name="Home" component={Home} options={{tabBarLabel: 'Início'}} />
      <Tab.Screen name="CreateProduct" component={CreateProduct} options={{tabBarLabel: 'Criar produto'}} />
      <Tab.Screen name="Categories" component={Categories} options={{tabBarLabel: 'Categorias'}} />
      <Tab.Screen name="Profile" component={Profile} options={{tabBarLabel: 'Perfil'}} initialParams={{ goBack }} />
    </Tab.Navigator>
  );
}

export default HomeContainer;