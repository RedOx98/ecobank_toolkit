/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable eol-last */

import React, { useEffect, useState } from 'react';
import {

    StyleSheet,
    Image,
    Text,
    View,
    Alert,
} from 'react-native';
import { StackNavigationProp, createStackNavigator } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import Globalstyle from '../utils/Globalstyle';



type RootStackParamList = {
    Intro: undefined
    Login: undefined
    ServicePage: undefined
    Home: undefined
    TransactionHistory: undefined
    ShortCodes: undefined
    CustomerComplaint: undefined
    Statement: undefined
};

type IntroNavigationProp = StackNavigationProp<RootStackParamList, 'Intro'>

type IntroProps = {
    navigation: IntroNavigationProp;
    route: RouteProp<RootStackParamList, 'Intro'>;
};

function Intro({ navigation, route }: IntroProps): JSX.Element {


    useEffect(() => {
        //Call your function inside here
        setTimeout(() => {
            navigation.replace('Statement');
        }, 5000);
    }, []);

    return (
        <View style={styles.body}>
            <Image
                style={styles.logo}
                source={require('../../assets/eco.jpg')}
            />
            <Text style={[styles.text, Globalstyle.CustomFont]}>UTILITY APP</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#23557F',
    },
    logo: {
        width: 287,
        height: 140,
        margin: 20,
        zIndex: 999,
    },
    text: {
        fontSize: 30,
        margin: 10,
        // fontFamily: 'NotoSans-SemiBoldItalic',
    },
});

export default Intro;