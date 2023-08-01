/* eslint-disable prettier/prettier */

/* eslint-disable prettier/prettier */


/* eslint-disable comma-dangle */
/* eslint-disable jsx-quotes */

/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { NavigationContainer, RouteProp } from '@react-navigation/native';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import Home from '../screens/Home';
import Intro from '../screens/Intro';
import CustomerComplaint from '../screens/CustomerComplaint';
import CustomerInfo from '../screens/CustomerInfo';
import ShortCodes from '../screens/ShortCodes';
import Statement from '../screens/Statement';
import TransactionHistory from '../screens/TransactionHistory';
import Login from '../screens/Login';
import ServicePage from '../screens/ServicePage';

type RootStackParamList = {
  Home: undefined
  Intro: undefined
  CustomerComplaint: undefined
  CustomerInfo: undefined
  ShortCodes: undefined
  Statement: undefined
  TransactionHistory: undefined
  Login: undefined
  ServicePage: undefined
};


const Stack = createStackNavigator<RootStackParamList>();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator

        initialRouteName='Intro'


        screenOptions={{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#0080ff'
          },
          headerTintColor: '#ffffff', headerTitleStyle: {
            fontSize: 25,
            fontWeight: 'bold'
          },
        }}

      >

        <Stack.Screen
          name='ServicePage'
          component={ServicePage}
        />

        <Stack.Screen
          name='Home'
          component={Home}
        />

        <Stack.Screen
          name='Intro'
          component={Intro}
        />


        <Stack.Screen
          name='CustomerComplaint'
          component={CustomerComplaint}
        />

        <Stack.Screen
          name='CustomerInfo'
          component={CustomerInfo}
          options={{
            headerShown: false
          }}
        />

        <Stack.Screen
          name='ShortCodes'
          component={ShortCodes}
          options={{
            headerShown: false
          }}
        />

        <Stack.Screen
          name='Statement'
          component={Statement}
          options={{
            headerShown: false
          }}
        />

        <Stack.Screen
          name='TransactionHistory'
          component={TransactionHistory}
          options={{
            headerShown: true
          }}
        />

        <Stack.Screen
          name='Login'
          component={Login}
          options={{
            headerShown: true
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  button: {

  }
});

export default App;
