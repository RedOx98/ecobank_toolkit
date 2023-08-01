/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react/no-unstable-nested-components */

/* eslint-disable prettier/prettier */

/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */

import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Home from './Home';
import CustomerComplaint from './CustomerComplaint';
import Intro from './Intro';

type RootStackParamList = {
    ServicePage: undefined;
    CustomerComplaint: undefined;
    Home: undefined;
    Intro: undefined
  };

type ServicePageNavigationProp = StackNavigationProp<RootStackParamList, 'ServicePage'>;
const Tab = createMaterialBottomTabNavigator<RootStackParamList>();

type ServicePageProps = {
  navigation: ServicePageNavigationProp;
  route: RouteProp<RootStackParamList, 'ServicePage'>;
};

function ServicePage({ navigation, route }: ServicePageProps): JSX.Element {
    return (
        <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color}) => {
          let iconName: string = '';
          let size: number = 0;
          if (route.name === 'Home') {
            iconName = 'clipboard-list';
            size = focused ? 25 : 20;
          } else if (route.name === 'CustomerComplaint') {
            iconName = 'clipboard-check';
            size = focused ? 25 : 20;
          } else if (route.name === 'Intro') {
            iconName = 'clipboard-check';
            size = focused ? 25 : 20;
          }
          return <FontAwesome5 name={iconName} color={color} size={size} />;
        },
      })
      }>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="CustomerComplaint" component={CustomerComplaint} />
      <Tab.Screen name="Intro" component={Intro} />
    </Tab.Navigator>
    );
}

export default ServicePage;
